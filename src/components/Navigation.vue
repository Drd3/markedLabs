<template>
    <div class="navigation">
        <div class="container">
            <button class="go-back-btn"><i class="fa-solid fa-arrow-left"></i></button>
            <div class="section-name">Nombre de la sección</div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"navigation",
        props:[
            "sectionName"
        ]
    }
</script>

<style lang="scss" scoped>
    .navigation{
        border-bottom: $border;
        padding: .5rem 1rem;
        box-shadow: 0px 2px 3px 1px rgb(0 0 0 / 32%);
        margin-bottom: .2rem;
        .container{
            display: flex;
            align-items: center;
            .go-back-btn{
            display: inline-block;
            width: fit-content;
        }
        .section-name{
            font-weight: 500;
        }
        }
        
    }
</style>