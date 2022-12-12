<template>
    <div>

    <div class="table-container">
      
      <b-editable-table
        disableDefaultEdit
        :rowUpdate="rowUpdate"
        :editMode="'row'"
        striped hover
        responsive
        outlined
        sticky-header	
        class="editable-table"
        v-model="items"
        :fields="fields"
      >
        <template #cell(isActive)="data">
          <span v-if="data.value" >Yes</span>
          <span v-else>No</span>
        </template>
        <template #cell(edit)="data">
          <div v-if="data.isEdit">
            <BIconX class="edit-icon" @click="handleSubmit(data, false)"></BIconX>
            <BIconCheck
              class="edit-icon"
              @click="handleSubmit(data, true)"
            ></BIconCheck>
          </div>
          <BIconPencil
            v-else
            class="edit-icon"
            @click="handleEdit(data, true)"
          ></BIconPencil>
        </template>
        <template #cell(delete)="data">
          <BIconTrash
            class="remove-icon"
            @click="handleDelete(data)"
          ></BIconTrash>
        </template>
      </b-editable-table>

    </div>
      <button class="btn-add-sample btn-primary" @click="handleAdd()"><i class="el-icon-plus"></i>Añadir muestra</button>

      <div class="lab-pricing">
        <div class="actualprice">
          <small>Costo total</small>
          <div>{{handlePrice}}</div>
        </div>
        <button class="contract-service btn-primary" @click="toSubmissionForm()">Contratar<i class="el-icon-right"></i></button>

      </div>
    </div>

    
  </template>
  
  <script>
  import BEditableTable from "bootstrap-vue-editable-table";
  import {
    BIconTrash,
    BIconPencil,
    BIconX,
    BIconCheck,
    BButton,
  } from "bootstrap-vue";
  export default {
    name:"SamplesTable",
    components: {
      BEditableTable,
      BIconX,
      BIconTrash,
      BIconPencil,
      BIconCheck,
      BButton,
    },
    props:[
      "pricingData"
    ],
    data() {
      return {
        fields: [
          { key: "edit", label: "" },
          {
            key: "property",
            label: "Nombre del propietario",
            type: "text",
            editable: true,
            placeholder: "Enter Name...",
            class: "name-col",
            sortable: true
          },
          {
            key: "propertyIdentification",
            label: "Identificacion del propietario",
            type: "text",
            class: "identidication-col",
            editable: true

          },         
          {
            key: "dateOfSampling",
            label: "Fecha de muestreo",
            type: "date",
            editable: true,
            class: "date-col",
            locale: "en",
            sortable: true,
            "date-format-options": {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            },
          },
          {
            key: "city",
            label: "Municipio",
            type: "text",
            editable: "true",
            placeholder: "Ingresa el municipio",
            class: "city-col",
            editable: true

          },
          {
            key: "sidewalk",
            label: "Vereda",
            type: "text",
            editable: "true",
            placeholder: "Ingresa el la vereda",
            class: "sidewalk-col",
            editable: true

          },
          {
            key: "shadowPercent",
            label: "% sombrio",
            type:"range", min:"0", max:"100",
            editable: true,
            placeholder: "Ingresa el porcentaje de sombra",
            class: "shadow-col",
            editable: true

          },
          { key: "delete", label: "" },
        ],
        items:  this.$store.state.samples[0].tableContent,
        rowUpdate: {},
      };
    },
    methods: {

      toSubmissionForm(){
        this.$store.dispatch('updateSampleTable', this.items)
        this.$router.push({name: 'submissionForm', params:{ labId: this.$route.params.labId, tableId: this.$store.state.samples[0].tableId} })
          /*this.$emit('to-submission-form', {
              status: 4,
              labData: this.labData
          })*/
          console.log("A formlario de el envio")
      },

      handleAdd() {
        const newId = Date.now();
        this.rowUpdate = {
          edit: false,
          id:  newId,
          action: "add",
          data: {
            id: newId,
            property:"",
            propertyIdentification: "",
            dateOfSampling: null,
            city: "",
            sidewalk: "",
            shadowPercent: null,
          },
        };
      },
      handleSubmit(data, update) {
        this.rowUpdate = {
          edit: false,
          id: data.id,
          action: update ? "update" : "cancel",
        };
      },
      handleEdit(data) {
        this.rowUpdate = { edit: true, id: data.id };
      },
      handleDelete(data) {
        this.rowUpdate = { id: data.id, action: "delete" };
      },
      
    },
    computed:{
      handlePrice(){
        if(this.$store.state.labAnalysisComplete){
          return this.pricingData.analysisCompleteCost
        }else{
          if(this.items.length >= this.pricingData.wholesalePolitic){
            return this.pricingData.wholesale * this.items.length
          }else{
            return this.pricingData.forUnit * this.items.length
          }
        }
      }
    }


  };
  </script>
  
  <style lang="scss" scoped>
  .table-container {
    margin: 0;
    overflow: auto;
    max-height: 500px;
    .editable-table {
      width: 800px;
      border-collapse: collapse;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #e6e6e6;
      box-shadow: 3px 1.2px 5px -1px #0000004f;

      thead{
        background: $secondary;
      }
      .data-cell{
        padding: .2rem;
      }
      .shadow-col{
        width: 300px;
      }
      .identidication-col{
        width: 400px;
      }

    }
  }


  

  .remove-icon {
    color: $danger;
    cursor: pointer;
    font-size: 20px;
  }
  
  .edit-icon {
    color: $primary;
    cursor: pointer;
    font-size: 20px;
  }
  
 
  .btn-add-sample{
    width: 100%;
    margin-bottom: 1rem;
    opacity: .7;
  }

  .lab-pricing{
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .actualprice{
      small{
        display: block;
        line-height: 1;
      }
      div{
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1;
      }
    }

  }
  </style>