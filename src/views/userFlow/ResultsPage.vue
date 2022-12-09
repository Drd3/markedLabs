<template>
    <div class="container">
        <div class="filter-list-container">
            <div class="filters-list">
                <h2>Filtrar por:</h2>
                <button>
                    <i class="el-icon-close"></i>
                </button>
                <div class="acreditation-item">
                    <h5>Precio</h5>
                    
                </div>
                <div class="acreditation-item">
                    <h5>Ubicación</h5>
                    
                </div>
            </div>
        </div>

        <LabCard v-for="(lab, index) in labList"  :key="index" :lab-data="lab"  @click.native="ToDetails(lab.id)" ></LabCard>
    </div>
</template>

<script>
import LabCard from '@/components/LabCard.vue';

export default{
    name: "ResultsPage",
    components:{
        LabCard
    },
    data: function(){
        return({

            //===== SIMULATED DATA=======//

            labList: this.$store.state.labList
        })
    },
    methods:{
        ToDetails(labId){
            this.$router.push({ name: 'labDetail', params: { labId } })
            /*this.$emit('to-details', {
                labData : lab,
                status : 2} 
            )*/
            
            console.log('detectado')
        },
        SectionName(){
            this.$EventBus.$emit("section-name", {sectionName: "Pagina de resultados", activeFiltersButton: true});
        }
    },

    mounted(){
        this.SectionName()
    }

}
</script>

<style lang="scss" scoped>

    .container{
        padding: 0;
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
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        box-shadow: 0px -2px 20px 3px rgba(0, 0, 0, .4);
    }

</style>
