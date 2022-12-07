<template>
    <div>
        <NavBar class="d-print-none"></NavBar>
        <Navigation class="d-print-none"></Navigation>
        <ResultsPage v-if="(status == 1)" v-on:to-details="getLabData"></ResultsPage>
        <LabDetai v-if="(status == 2)" :lab-data="selectedLab" v-on:to-forms="toForms"></LabDetai>
        <SamplesForm v-if="(status == 3)" :lab-data="selectedLab" v-on:to-submission-form="toSubmissionForm"></SamplesForm>
        <SubmissionForm v-if="(status == 4)" v-on:to-final-steps="toFinalSteps" ></SubmissionForm>
        <FinalSteps v-if="(status== 5)" v-on:to-final-steps="toSamplesTags"></FinalSteps>
        <samplesTags v-if="(status == 6)"></samplesTags>
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
export default {
    components:{
        NavBar,
        Navigation,
        ResultsPage,
        LabDetai,
        SamplesForm,
        SubmissionForm,
        FinalSteps,
        samplesTags
    },
    data: function() {
        return({
            status: 1,
            selectedLab: {}

        })
    },
    methods:{
        getLabData(labData){
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
        }
    }
}
</script>