<template>
    <div class="navigation">
        <div class="container">
            <button class="go-back-btn" @click="goBackHandler()"><i class="fa-solid fa-arrow-left"></i></button>
            <div class="section-name">{{sectionName}}</div>
            <slot v-if="this.$route.name == 'ResultsPage'"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:"navigation",
        data: function(){
            return({
                sectionName: "",
                labId: this.$route.params.labId
            })  
        },
        methods:{
            goBackHandler(){
                if(this.$route.name == "ResultsPage"){
                    this.$router.push({name: 'home'})
                }else if(this.$route.name == 'samplesForm'){
                    this.$router.push({name: 'labDetail', params: this.labId})
                }else if(this.$route.name == 'labDetail'){
                    this.$router.push({name: 'ResultsPage', params:{ analysisOf: this.$store.state.AnalisysType}})
                }else{
                    this.$router.go(-1)
                }
            }
        },
        mounted(){
            this.$EventBus.$on("section-name", (data) => {
            this.sectionName = data.sectionName;
            console.log(this.$route.name)
        });
    }

 }
</script>
    
<style lang="scss" scoped>
    .navigation{
        border-bottom: $border;
        padding: .5rem 0;
        box-shadow: 0px 2px 3px 1px rgb(0 0 0 / 32%);
        margin-bottom: .2rem;
        .container{
            display: flex;
            align-items: center;
            .go-back-btn{
            display: inline-block;
            width: fit-content;
        }
        .section-name{
            font-weight: 500;
        }
        }
        
    }
</style>