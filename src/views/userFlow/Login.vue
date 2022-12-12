<template>
    <div class="container">
        <h2>Bienvenido</h2>
        <div class="situation-message">{{msg}}</div>

        <button class="btn-complete-form" @click="autoCompleteForm()">Completar formulario</button>
        
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item class="form-item" prop="email">
                <div class="label">Correo electronico</div>
                <el-input placeholder="Ingresa tu correo electronico" v-model="loginForm.email"></el-input>
            </el-form-item>
            <el-form-item class="form-item" prop="password">
                <div class="label">Contraseña</div>
                <el-input placeholder="Introduce tu contraseña" type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <div class="error-msg">{{errorMsg}}</div>
            <div >{{this.$store.state.loginData.email}}{{this.$store.state.loginData.password}}</div>
            <el-form-item>
                <el-button class="btn-primary submit-button" @click="submitForm('loginForm')">Ingresar</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script>
    export default{
        name: "Login",
        props:{
            msg:{
                type: String,
                default: ""
            },
            status: {
                type: Number,
                default: null
            },
            labId:{
                type: Number,
                default: null
            }
        },  
        data: function(){

            var checkEmail = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('Ingresa un correo electronico'));
                }
            } 

            var checkPassword = (rule, value, callback) =>{
                if(!value){
                    return callback(new Error('Ingresa la contraseña'))
                }
            } 

            return({
                loginForm: {
                    email: "",
                    password : ""
                },

                userLogged: this.$store.state.loginData,

                errorMsg: "",
                
                rules:{
                    email: [
                        { validator: checkEmail, trigger: 'blur' },
                    ],
                    password: [
                        {validator: checkPassword, trigger: 'blur'}
                    ]
                }
                
            })
        },
        methods:{
            autoCompleteForm(){
                this.loginForm.email = this.userLogged.email
                this.loginForm.password = this.userLogged.password
            },  
            submitForm(formName) {

                    console.log(formName, 'Entra al metodo de validacion')
                    if(this.loginForm.email && this.loginForm.password){
                    if(this.loginForm.email == this.userLogged.email && this.loginForm.password == this.userLogged.password) {
                        this.$emit('to-samples-form', 3)  
                        if(this.status == 1){
                            var id = this.labId;
                            this.$store.dispatch('userLoggedIn')
                            this.$router.push({name: 'samplesForm', params:{ id }})
                        }if(this.status == 2){
                            this.$store.dispatch('userLoggedIn')
                            this.$router.push({name: 'home'})
                        }                 
                    }else{
                        this.errorMsg = "Correo o contraseña son incorrectos"
                    }
                }
                else{
                    this.errorMsg = "Introduce todos los datos"
                    return false;
                }   
            },
        }
    }
</script>
<style lang="scss" scoped>

.container{
    margin-top: 2rem;
}

    h2{
        color: $primary;
        font-weight: 300;
        font-size: 1.5rem;  
        text-align: center;
    }

    .situation-message{
        text-align: center;
    }
        .form-item{
            width: 100%;
            margin: 1rem auto;
            .label{
                font-size: .9rem;
                margin-left: .5rem;
                font-weight: 200;
            }
            .el-input{
                width: 100%;
                input{
                    width: 100%;
                }     
            }
                  
        }

        .error-msg{
            color: $danger;
            text-align: center;
            height: 2rem;
            margin-top: 2rem;
        }

        .submit-button{
            width: 100%;
            font-weight: 400;
            font-size: 1rem;
            padding: .5rem;
        }

        .btn-complete-form{
            margin: auto;
            text-decoration: underline;
            color: $secondary;
            display: block;
        }
</style>