<template>
    <div class="container">
        <div class="lab-info-card">
            <div class="lab-info">
                <div class="card-pres">
                    <img :src="labData.labLogo" alt="">
                    <div class="lab-name">{{labData.labName}}</div>
                </div>
                <div class="price">
                    <small>Precio por muestra</small>
                    <div>{{labData.pricing.forUnit}}</div>
                </div>
            </div>
            <div class="invoice-info">
                <span class="table-name">{{tableData.tableName}} /  </span> <small>{{tableData.tableContent.length}} <span v-if="(tableData.tableContent.length <= 1)">Muestra</span>
                    <span v-if="(tableData.tableContent.length >= 2)">Muestras</span>
                </small>
                <div class="invoice">
                <div class="invoice-item">
                    <span>Costo del analisis</span>
                    <span class="invoice-price">{{SamplesCost}}</span>
                </div>
                <div class="invoice-item">
                    <span>Precio de envio</span>
                    <span class="invoice-price">{{sendCost}}</span>
                </div>
                <div class="invoice-item total-price">
                    <span>Precio total</span>
                    <span class="invoice-price">{{TotalPrice}}</span>
                </div>
            </div>
            </div>
        </div>
        <div class="user-info-card">
            <div>
                <small>Nombre de usuario:</small>
                <div>{{this.$store.state.loginData.userName}}</div>
            </div>
            <div>
                <small>Correo electronico:</small>
                <div>{{this.$store.state.loginData.email}}</div>
            </div>
        </div>
        <div class="direction-card">
            <small>Direccion del destino</small>
            <div>{{labData.labLocation}} - {{labData.address}}</div>
        </div>
        <div class="send-method">
            <el-form ref="sendForm" :rules="sendFormRules" :model="sendForm">
                <el-form-item  class="form-item" prop="sendMethod">
                        <div class="label">Metodo de envio</div>
                        <el-select v-model="sendMethod" placeholder="Selecciona metodo de envio">
                        <el-option
                            v-for="item in sendMethodOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </el-form-item>
                <el-form-item class="form-item" prop="payMethod">
                        <div class="label">Metodo de pago</div>
                        <el-select v-model="payMethod" placeholder="Selecciona metodo de pago">
                        <el-option
                            v-for="item in payMethodOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </el-form-item>
            </el-form>
            
            
        </div>
        <button :class="{'button-muted': FormValidated}" class="btn-primary w-100" @click="toFinal()">Continuar</button>
    </div>
</template>
<script>
export default {
    name: "SubmissionForm",
    props:[
        "totalPrice"
    ],
    data: function(){

        var checkSendMethod = (rule, value, callback) => {
            if(!value){
                return callback( new Error('Introduzca un metodo de envio'))
            }
        }

        var checkPayMethod = (rule, value, callback) => { 
            if(!value){
                return callback(new Error('Introduzca un metodo de pago'))
            }
        }

        return({
            labData: [],
            tableData: [],
            samplesCost: 0,
            sendCost: 20000,

            formIsValid : false,

            sendForm: {
                sendMethod: '',
                payMethod:'',
            },

            sendFormRules:{
                sendMethod:[
                    {validator: checkSendMethod, trigger: 'blur'}
                ],
                payMethod:[
                    {validator: checkPayMethod, trigger: 'blur'}
                ]
            },

        payMethodOptions: [{
          value: 'paypal',
          label: 'Paypal'
        }, {
          value: 'efecty',
          label: 'Efecty'
        }, {
          value: 'pse',
          label: 'PSE'
        }
    ],

    sendMethod: '',
    payMethod:'',

    sendMethodOptions: [{
          value: 'Servientrega',
          label: 'Servientrega'
        }, {
          value: 'FedEx',
          label: 'FedEx'
        }, {
          value: 'Envia',
          label: 'Envia'
        }
    ],

    })
},

methods:{
    toFinal(){
        this.$router.push({name: 'finalSteps'})
        console.log('hacia final')
        /*this.$emit('to-final-steps', {
            status: 5
        })*/
    },
    getLabById(){
        var filteredLab = this.$store.state.labList.filter(n => n.id == this.$route.params.labId)
        this.labData = filteredLab[0]
    },
    getTableDataById(){
        var filteredTable = this.$store.state.samples.filter(n => n.tableId == this.$route.params.tableId)
        this.tableData = filteredTable[0]
    },
    SectionName(){
        this.$EventBus.$emit("section-name", {sectionName: "Formulario de envio", activeFiltersButton: false});
    }
},

computed:{
    FormValidated(){
        if(this.sendForm.sendMethod == "" && this.sendForm.payMethod == ""){
            return true;
        }else{ 
            return false;
        }
    },
    SamplesCost(){
        if(this.tableData.tableContent.length <= this.labData.pricing.wholesalePolitic){
            return this.labData.pricing.forUnit * this.tableData.tableContent.length
        }else{
            return this.labData.pricing.wholesale * this.tableData.tableContent.length
        }
    },
    TotalPrice(){
        return this.sendCost + this.SamplesCost;
    }
},

mounted(){
    this.getLabById();
    this.getTableDataById();
    this.SectionName();
}

}
</script>
<style lang="scss" scoped>
.container{
    margin-bottom: 2rem;
}
    .lab-info-card, .direction-card, .send-method, .user-info-card{
        border: $border;
        box-shadow: $shadow;
        border-radius: 5px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .lab-info-card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        .lab-info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: $border;
            .card-pres{
                display: flex;
                align-items: center;
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    border: $border;
                    box-shadow: $shadow;
                    position: relative;
                    object-fit: cover;
                    margin-right: .5rem;
                }
                .lab-name{
                    font-weight: 400;
                    line-height: 1.3;
                }
            }
            

            .price{
                small{
                    line-height: 0;
                }
                div{
                    font-weight: 400;
                }
            }
        }
        .invoice-info{
            padding-left: 1rem;
            .table-name{
                font-weight: 400;
            }
            .invoice{
                margin-top: 1rem;
                .invoice-item{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: .9rem;
                    
                }

                .total-price{
                    border-top: $border;
                    padding-top: .5rem;
                    margin-top: .5rem;
                }
            
            }
        }    
    }

    .user-info-card{
        display: flex;
        & > div{
            margin-right: 1.5rem;
        }
    }
    .form-item{
    width: 100%;
    margin: 0 auto;
        .label{
            color: $text-muted;
            font-weight: .7rem;
            margin-bottom: 0rem;
            margin-left: .5rem;
            font-weight: 200;
        }
        .el-select{
            width: 100%;
            .el-input{
            width: 100%;
                input{
                    width: 100%;
                }     
            }
        }
        
    }

</style>