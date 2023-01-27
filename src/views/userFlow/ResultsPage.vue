<template>
    <div class="container">
        <div class="filter-list-container" v-if="showFilters">
            <div class="filters-list">
                <h2>Filtrar por:</h2>
                <button class="close-button" @click="showFilters = false">
                    <i class="el-icon-close"></i>
                </button>
                <div class="filter-item">
                    <h5>Precio</h5>
                    <div class="form-item cost-range-inputs">
                        <div class="label">Minimo</div>
                        <el-input-number size="small" v-model="minPrice"></el-input-number>
                    </div>
                    <div class="form-item cost-range-inputs">
                        <div class="label">Maximo</div>
                        <el-input-number size="small" v-model="maxPrice"></el-input-number>
                    </div>
                </div>
                <div class="filter-item">
                    <h5>Ubicación</h5>
                    <div class="form-item">
                        <div class="label">Ciudad</div>
                        <el-select v-model="city" placeholder="Elije una ciudad">
                            <el-option
                                v-for="item in cityList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div>
                    <button class="btn-primary filter-buttons">Aplicar</button>
                </div>
            </div>
        </div>
        
        <LabCard v-for="(lab, index) in getLabsBySearchParams"  :key="index" :lab-data="lab" :completeAnalysis="handleAnalysisComplete" @click.native="ToDetails(lab.id)" ></LabCard>
    </div>
</template>

<script>
import LabCard from '@/components/LabCard.vue';

export default{
    name: "ResultsPage",
    props:[
        "analysisOf"
    ],  
    components:{
        LabCard
    },
    data: function(){
        return({
            minPrice: 0,
            maxPrice: 0,
            city: "",
            showFilters:false,
            analysisComplete: false,
            //===== SIMULATED DATA=======//

            cityList: [
                {
                    value: "Manizales",
                    label: "Manizales"
                },
                {
                    value: "Medellin",
                    label: "Medellin"
                },
            ],

            labList: {}
        })
    },
    methods:{
        ToDetails(labId){
            
            this.$router.push({ name: 'labDetail', params: {labId: labId, labPricing: this.handleAnalysisComplete, labAnalysisType: this.$route.params.analysisOf} })
            /*this.$emit('to-details', {
                labData : lab,
                status : 2} 
            )*/
            
            console.log('detectado')
        },
        SectionName(){
            this.$EventBus.$emit("section-name", {sectionName: "Pagina de resultados", activeFiltersButton: true});
        },
        ListenFilterButton(){
            this.$EventBus.$on('active-filters', (data) => {
                this.showFilters = data
            })
        },
        
        
    },
    computed:{
        getLabsBySearchParams(){
            if(this.$route.params.analysisOf == "analysisComplete"){
                this.analysisComplete= true
                return this.$store.state.labList
            }else{
                return this.$store.state.labList.filter(lab => lab.labAnalisysTypes.includes(this.$route.params.analysisOf) )
            }
        },
        handleAnalysisComplete(){
            if(this.$route.params.analysisOf == "analysisComplete"){
                return true        
            }else{
                return false
            }
        },
        
    },

    mounted(){
        this.SectionName()
        this.ListenFilterButton()
    }

}
</script>

<style lang="scss" scoped>

    .container{
        padding: 0;
        background: #F4F4F4;
    }
    .filter-list-container{
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 43, 91, .4);
        transform: translateY(0vh);
    }
    .filters-list{
        padding: 2rem 1.5rem;
        background: #fff;
        display: block;
        width: 100%;
        border: $border;
        min-height: 70vh;
        position: absolute;
        bottom: 0;
        box-shadow: 0px -2px 20px 3px rgba(0, 0, 0, .4);
        

        .filter-item{
            margin: 2rem 0;
        }
        .close-button{
            position: absolute;
            right: 1rem;
            top: 1rem;

        }
        .cost-range-inputs{
            width: 50%;
            display: inline-block;
        }

        .el-select{
            width: 100%;
        }
        .filter-buttons{
            margin-left: auto;
            display: block;
            padding: .5rem 2rem;
        }
    }

</style>
