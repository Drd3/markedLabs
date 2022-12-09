<template>
    <div class="flow-container">
        <NavBar class="d-print-none"></NavBar>
        <Navigation v-if="(status != 7)" class="d-print-none">
            <button class="filter-results ml-auto" @click="(showFilters = true)"><i class="el-icon-arrow-down"></i> Filtrar</button>
        </Navigation>
        <router-view/>
        <!-- <SamplesForm v-if="(status == 3)" :lab-data="selectedLab" v-on:to-submission-form="toSubmissionForm"></SamplesForm>
        <SubmissionForm v-if="(status == 4)" v-on:to-final-steps="toFinalSteps" ></SubmissionForm>
        <FinalSteps v-if="(status== 5)" v-on:to-final-steps="toSamplesTags"></FinalSteps>
        <samplesTags v-if="(status == 6)"></samplesTags>
        <Login v-if="(status == 7)" v-on:to-samples-form="loggedToForms" msg="Debes ingresar para poder continuar."></Login>-->
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Navigation from '@/components/Navigation.vue';
import ResultsPage from './userFlow/ResultsPage'
import LabDetai from './userFlow/LabDetail.vue';
import SamplesForm from './userFlow/SamplesForm.vue';
import SubmissionForm from './userFlow/SubmissionForm.vue';
import FinalSteps from './userFlow/FinalSteps.vue';
import samplesTags from '@/components/samplesTags.vue';
import Login from './userFlow/Login.vue';
import { RouterView } from 'vue-router';
export default {
    components:{
    NavBar,
    Navigation,
    ResultsPage,
    LabDetai,
    SamplesForm,
    SubmissionForm,
    FinalSteps,
    samplesTags,
    Login,
    RouterView
},
    data: function() {
        return({
            status: 1,
            selectedLab: {},
            showFilters: false
        })
    },
    methods:{
        /*getLabData(labData){
            this.status = labData.status
            this.selectedLab = labData.labData

        },
        toForms(obj){
            this.status = obj.status
            this.selectedLab =  obj.labData

        },
        toSubmissionForm(obj){
            this.status = obj.status,
            this.selectedLab = obj.labData

        },
        toFinalSteps(obj){
            this.status = obj.status
        },
        toSamplesTags(n){
            this.status = n
        },
        loggedToForms(n){
            this.status = n
        }*/
    },
    watch:{
        showFilters(newVal, Oldval){
            
        }
    }
}
</script>

<style lang="scss" scoped>
.flow-container{
    position: relative;
}
.filter-results{
    margin-left: auto;
    border: $border;
    border-radius: 5px;
    padding: inherit 1rem;
}
.filter-results:focus{
    background: $secondary;
    color: #fff;
}
</style>