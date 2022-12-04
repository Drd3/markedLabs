<template>
    <div>
        <NavBar></NavBar>
        <Navigation></Navigation>
        <ResultsPage v-if="(status == 1)" v-on:to-details="getLabData"></ResultsPage>
        <LabDetai v-if="(status == 2)" :lab-data="selectedLab" v-on:to-forms="toForms"></LabDetai>
        <SamplesForm v-if="(status == 3)" :lab-data="selectedLab" v-on-:to-submission-form="toSubmissionForm"></SamplesForm>
        <SubmissionForm v-if="(status == 4)"></SubmissionForm>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Navigation from '@/components/Navigation.vue';
import ResultsPage from './userFlow/ResultsPage'
import LabDetai from './userFlow/LabDetail.vue';
import SamplesForm from './userFlow/SamplesForm.vue';
import SubmissionForm from './userFlow/SubmissionForm.vue';
export default {
    components:{
        NavBar,
        Navigation,
        ResultsPage,
        LabDetai,
        SamplesForm,
        SubmissionForm
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

            console.log('laboratorios seeleccionado', labData)
        },
        toForms(obj){
            this.status = obj.status
            this.selectedLab =  obj.labData

            console.log('Para formularios')
        },
        toSubmissionForm(obj){
            this.status = obj.status,
            this.selectedLab = obj.labData
        }
    }
}
</script>