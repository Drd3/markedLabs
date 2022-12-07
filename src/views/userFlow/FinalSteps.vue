<template>
    <div class="container">
        <h2>¡Ya terminaste!</h2>
        <div>Ya culminaste el proceso, ahora debes realizar los siguientes pasos</div>
        <div class="stepper">
            <div class="step">
                <div class="index">1.</div>
                <div class="info">
                    Imprime estas etiquetas con los datos de las muestras y colocalos en sus recpectivas bolsas.
                </div>
                <button @click="toSamplesTags()">
                   <i class="el-icon-printer"></i> imprimir etiquetas
                </button>
            </div>

            <div class="step">
                <div class="index">2.</div>
                <div class="info">
                    Lleva este formato al punto de envio  
                </div>
                <button>
                   <i class="el-icon-printer"></i> imprimir etiquetas
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import samplesTag from '@/components/samplesTags.vue';

export default {
    name: "FinalSteps",
    components: {
        samplesTag
    },
    props: [
        "samplesData"
    ],
    data: function(){
        return({

        })
    },

    methods:{
        toSamplesTags(){
            let route = this.$router.resolve({ path: "/samplesTags" });
            window.open(route.href)
        },

    },


}
</script>

<style lang="scss" scoped>
    .stepper{
        .step{
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-template-rows: auto auto;
            background: $primary;
            border-radius: 5px;
            margin: 1rem 0;
            padding: 1.5rem 2rem 1rem 2rem;
            .index{
                color: $success;
                font-weight: 400;
                font-size: 3rem;
                text-align: center;
            }
            .info{
                align-content: flex-end;
                color: $success;
            }

            button{
                grid-column: 1 / span 2;
                background: $success;
                margin-top: 1rem;
                border-radius: 2.5px;
                color: $primary;
                font-weight: 400;
                vertical-align: top;
                i{
                    font-size: 1.2rem;
                }
            }

        }
    }
</style>