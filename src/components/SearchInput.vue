<template>
    <div class="input-container">
        <div>

        </div>
        <input placeholder="¿Que tipo de analisis necesitas?" type="text" v-model="searchText" @keyup.enter="Search()"/>
        <div>
            
        </div>
    </div>
</template>
<script>

import VueRouter from 'vue-router'

export default ({
    name:"SearchInput",
    data: function() {
        return ({
            searchText: ""
        })
    },
    methods:{
        Search(){
            if(this.searchText != ""){
                this.$router.push('/UserFlowManager');
            }
        }
    }
})
</script>

<style lang="scss" scoped>
    .input-container{
        margin: .5rem 0;
        input{
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 2px solid $success;
            color: $success;
        }
    }
</style>
