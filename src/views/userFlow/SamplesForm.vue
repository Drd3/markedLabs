<template>
    <div class="container">
        <LabHeader 
            :lab-name="labData.labName"
            :lab-logo="labData.labLogo"    
            :star-rating="labData.starRating"
            :lab-location="labData.labLocation"
            :lab-email="labData.email"
            :lab-phone="labData.phone"
        ></LabHeader>
        <div class="form-item">
            <div class="label">Tipo de muestra</div>
            <el-autocomplete
            popper-class="my-autocomplete"
            v-model="sampleType"
            label="tipo de muestra"
            :fetch-suggestions="querySearchAsync"
            placeholder="Tipo de muestra"
            @select="handleSelect"
        >
        <i
            class="el-icon-edit el-input__icon"
            slot="suffix"
            >
        </i>
        <template slot-scope="{ item }">
            <div class="value">{{ item.value }}</div>
        </template>
    </el-autocomplete>
        </div>

        <div class="form-item">
            <div class="label">Tipo de analisis</div>
            <el-autocomplete
            popper-class="my-autocomplete"
                v-model="analisysType"
                label="tipo de analisis"
                :fetch-suggestions="querySearchAsync"
                placeholder="Tipo de analisis"
                @select="handleSelect"
            >
            <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
               >
            </i>
            <template slot-scope="{ item }">
                <div class="value">{{ item.value }}</div>
            </template>   
        </el-autocomplete>
        </div>


        <button class="btn-primary" @click="toSubmissionForm()">Contratar</button>

    </div>
</template>


<script>
import LabHeader from '@/components/LabHeader.vue';
export default {
    name: "SamplesFrom",
    components:{
        LabHeader
    },
    props:[
     "labData"
    ],
    data: function(){
        return({
            sampleType:"",
            analisysType: "",
            links: "",
            timeout: null,


            tableData:[
                {
                    property:"Emanuel Rico Rojas",
                    propertyIdentification: "10022313254",
                    dateOfSampling: "20/11/2022",
                    city: "Manizales",
                    sidewalk: "Bajo Tablazo",
                    shadowPrecent: "12%"

                },
                {
                    property:"Emanuel Rico Rojas",
                    propertyIdentification: "10022313254",
                    dateOfSampling: "20/11/2022",
                    city: "Manizales",
                    sidewalk: "Bajo Tablazo",
                    shadowPrecent: "12%"

                },
                {
                    property:"Emanuel Rico Rojas",
                    propertyIdentification: "10022313254",
                    dateOfSampling: "20/11/2022",
                    city: "Manizales",
                    sidewalk: "Bajo Tablazo",
                    shadowPrecent: "12%"

                }
            ]
        })
    },
    methods: {
        toSubmissionForm(){
            this.$emit('to-submission-form', {
                status: 4,
                labData : this.labData
            })
        },
      loadAll() {

        var analisysList = {}

        labData.labAnalisysTypes.forEach(analisys => {
                analisysList.push({ "value": analisys},)
        });
        
        return analisysList;
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
}
</script>
<style lang="scss" scoped>
    .container{
        padding: 1rem;
        .form-item{
            width: 100%;
            margin: 1rem auto;
            .label{
                color: $text-muted;
                font-weight: .7rem;
                margin-bottom: .5rem;
                margin-left: .5rem;
                font-weight: 200;
            }
            .el-autocomplete{
                width: 100%;
                .el-input{
                 width: 100%;
                    input{
                        width: 100%;
                    }     
                }
            }
                  
        }
    }
    .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>