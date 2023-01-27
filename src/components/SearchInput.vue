<template>
    <div class="input-container">
        <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="¿Que analisis necesitas?"
            @select="handleSelect"
            @keyup.enter="Search()"
            class="search-autocomplete">
            <template slot-scope="{ item }">
                <div class="value">{{ item.value }}</div>
            </template>
        </el-autocomplete>
        <div v-if="showAnalysisTypes" class="in-text">
            / de:
        </div>
        <el-select :class="{'select-active': showAnalysisTypes}" @change="CreateAnalisisList(analisysSelected)" class="analysis-select" v-model="analisysSelected" placeholder="Tipo de analisis">
            <el-option
            v-for="item in analysisTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <button class="btn-primary search-button">
            <i class="el-icon-search el-input__icon" @click="Search()"></i>
        </button>
    </div>
</template>
<script>
export default ({
    name:"SearchInput",
    data: function() {
        return ({
            links: [],
            state: '',
            showAnalysisTypes: false,
            analisysSelected: "",
            analisysSelectedList: [],
            analysisTypes: [
                {
                    value: "analysisComplete",
                    label: "analisis completo"
                },
                {
                    value: "pH",
                    label: "pH"
                },
                {
                    value: "cadmio",
                    label: "Cadmio"
                },
                {
                    value: "acidez",
                    label: "Acidez"
                },
                {
                    value: "boro",
                    label: "Boro"
                },
                {
                    value: "azufre",
                    label: "Azufre"
                },
            ]
        })
    },
    methods:{
        Search(){
            if(this.state != ""){
                this.$router.push({name: 'ResultsPage', params: { analysisOf: this.analisysSelectedList}});
            }
        },
        CreateAnalisisList(item){
            console.log(this.analisysSelectedList)
            this.analisysSelectedList.push(item)
        },
        querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "Analisis de suelos"},
         ];
      },
      handleSelect(item) {
        this.showAnalysisTypes = true
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      SelectedOption(){
        this.Search()
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
})
</script>

<style lang="scss">
    .input-container{
        margin: 1rem 0;
        display: flex;
        align-items: center;
        background: #fff;
        border: $border;
        border-radius: 5px;
        padding: 0.2rem;
        box-shadow: $shadow;
        .el-autocomplete, .search-autocomplete{
            width: 100%;
            background: transparent;
            border: 0;
        
            input{
                border: 0 !important;
            }

        }

        select{
            border: 0 !important;
        }
        .in-text{
            color: #000;
            width: 70px;
            margin-right: .5rem;
        }
        .analysis-select{
            width: 0;
            overflow: hidden;
            transition: .5s ease;
        }
        .select-active{
            width: 100%;
        }
        .search-button{
            width: 40px;
        }

        .search-button{
            padding: 0;
            width: 45px;
            flex-shrink: 0;
            margin-left: .2rem;
        }
    }
</style>
