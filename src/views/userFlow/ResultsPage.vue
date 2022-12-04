<template>
    <div class="container">
        <LabCard v-for="(lab, index) in labList"  :key="index" :lab-data="lab"  @click.native="ToDetails(lab)" ></LabCard>
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

            labList: [
                {
                    labName : "Terralab",
                    labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
                    starRating: 4.5,
                    labLocation: "Manizales / Caldas",
                    address: "Cra 15 # 14 -05",
                    labAnalisysTypes: ["pH", "cadmio", "acidez", "boro", "azufre"],
                    pricing: {
                        forUnit: 200000,
                        wholesale: 150000,
                        wholesalePolitic: 10
                    },
                    email: "loremipsum@example.co",
                    phone: "3196696945"
                    
                },
                {
                    labName : "Laboratorio de Manizales",
                    labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
                    starRating: 3.5,
                    labLocation: "Manizales / Caldas",
                    address: "Cra 15 # 14 -05",
                    labAnalisysTypes: ["pH", "cadmio", "boro", "azufre"],
                    pricing: {
                        forUnit: 150000,
                        wholesale: 100000,
                        wholesalePolitic: 15
                    },
                    email: "loremipsum@example.co",
                    phone: "3196696945"
                    
                },
                {
                    labName : "Laboratorio de Medellín",
                    labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
                    starRating: 4.8,
                    labLocation: "Medellin / Antioquia",
                    address: "Cra 15 # 14 -05",
                    labAnalisysTypes: ["pH", "cadmio", "acidez", "boro", "azufre", "cacao"],
                    pricing: {
                        forUnit: 220000,
                        wholesale: 160000,
                        wholesalePolitic: 6
                    },
                    email: "loremipsum@example.co",
                    phone: "3196696945"
                    
                },
                {
                    labName : "Laboratorio universitario",
                    labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
                    starRating: 4.1,
                    labLocation: "Manizales / Caldas",
                    address: "Cra 15 # 14 -05",
                    labAnalisysTypes: ["pH", "cadmio", "acidez", "boro", "azufre"],
                    pricing: {
                        forUnit: 210000,
                        wholesale: 120000,
                        wholesalePolitic: 13
                    },
                    email: "loremipsum@example.co",
                    phone: "3196696945"
                    
                }
            ]
        })
    },
    methods:{
        ToDetails(lab){
            this.$emit('to-details', {
                labData : lab,
                status : 2} 
            )
            console.log('detectado')
        }
    }
}
</script>

<style lang="scss" scoped>

    .container{
        padding: 0;
    }

</style>
