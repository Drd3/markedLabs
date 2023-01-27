<template>
    <div class="container">
        <LabHeader 
            :lab-name="labData.labName"
            :lab-logo="labData.labLogo"    
            :star-rating="labData.starRating"
            :lab-location="labData.labLocation"
            :lab-email="labData.email"
            :lab-phone="labData.phone"
            :acredited="labData.acredited"
            :address="labData.address"
        ></LabHeader>
        
        <div class="lab-advantages">
            <div class="advantage-item">Entrega en 12 dias aprox</div>
            <div class="advantage-item">Calidad garantizada</div>
        </div>
        <section class="lab-description">
            <h3>Descripcion</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputa
            </p>
        </section>
        <section class="frequent-questions">
            <h3>Preguntas frecuentes</h3>
            <div class="text-box">
                <input placeholder="¿Tienes alguna pregunta?" type="text">
                <button class="btn btn-primary"><i class="fa-regular fa-paper-plane"></i></button>
            </div>
            <div class="questions-list">
                <div class="question-item">
                    <div class="question">¿Lorem ipsum dolor?</div>
                    <p class="response">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                    </p>
                </div>
                <div class="question-item">
                    <div class="question">¿Lorem ipsum dolor?</div>
                    <p class="response">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                    </p>
                </div>
                
            </div>
        </section>
        <section class="reviews">
            <div class="ratings">
                <h1>{{labData.starRating}}</h1>
                <div class="all-reviews-count">{{ GetTotalReviewsQuantity() }} CALIFICACIONES</div>

                <div class="ratings-percents">
                    <div v-for="(review, index) in labReviews.califications" :key="index" class="percent-bar" :style="{'width': CalculateReviewPercent(review) + '%'}">{{ index + 1 }} <span class="percent-indicator"> {{ CalculateReviewPercent(review) }}% </span> </div>
                    <!-- <div class="percent-bar" style="width: 10%;">2 <span class="percent-indicator"> 10% </span></div>
                    <div class="percent-bar" style="width: 20%;">3 <span class="percent-indicator"> 20% </span></div>
                    <div class="percent-bar" style="width: 50%;">4 <span class="percent-indicator"> 50% </span></div>
                    <div class="percent-bar" style="width: 20%;">5 <span class="percent-indicator"> 20% </span></div>-->
                </div>
            </div>
            <div class="users-reviews">
                <div v-for="(commentary, index) in labReviews.comments" :key="index" class="review-container">
                    <div class="review-info">
                        <span class="user-name">{{commentary.userName}}</span>
                        <span class="user-rating">{{ commentary.userLabcalification }}<i class="el-icon-star-on"></i></span> 
                        <span class="review-date">{{ commentary.postDate }}</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam 
                    </p>
                    <div class="users-likes">A {{ commentary.usersAgree }} usuarios les parece util</div>
                </div>
            </div>
        </section>
        <div class="buy-service">
            <div class="prices" v-if="!this.labPricing">
                <div class="price-type">
                    <small>Precio por unidad</small>
                    <div>{{labData.pricing.forUnit}}</div>
                </div>
                <div class="price-type">
                    <small>Precio a partir de {{labData.pricing.wholesalePolitic}} unidades</small>
                    <div>{{labData.pricing.wholesale}}</div>
                </div>
            </div>
            <div class="prices" v-else>
                <div class="price-type">
                    <small>Analisis completo</small>
                    <div>{{labData.pricing.analysisCompleteCost}}</div>
                </div>
            </div>
            <div class="order-service-button-box">
                <button class="btn-primary order-service-button" @click="ToForms()">Ordenar servicio</button>
            </div>
        </div>
    </div>
</template>
<script>
import LabHeader from '@/components/LabHeader.vue';
export default {
    name: "LabDetail",
    components:{
        LabHeader
    },
    props:[ 
        "labPricing",
        "labAnalysisType"
    ],
    data: function(){
        return({
            labData: {},
            labId: this.$route.params.labId,
            labReviews:{
                califications: [
                     12,
                     32,
                    43,
                     23,
                     22
                ],
                comments:[
                    {
                        userName: "Lorem",
                        comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam",
                        userLabcalification: 4,
                        usersAgree: 12,
                        postDate: "15 de noviembre de 2022"
                    }
                ]
            }
        })
    },
    methods:{
        ToForms(){
            if(this.$store.state.userLogged){
                this.$router.push({name: 'samplesForm', params: { labId : this.labId}})
                /*this.$emit('to-forms', {
                labData: this.labData,
                status: 3
                })
                console.log("To Forms")*/
            }else{
                this.$router.push({name: 'login', params: { msg: "Debes loguearte primero para continuar", status: 1, labId: this.$route.params.labId}})
                /*this.$emit('to-forms', {
                    labData: this.labData,
                    status: 7,
                    msg: "Debes loguearte primero"
                })*/
                console.log("To Forms")
            }
            
        },

        getLabById(){
            var filteredLab = this.$store.state.labList.filter(n => n.id == this.$route.params.labId)
            this.labData = filteredLab[0]
        },
        SectionName(){
            this.$EventBus.$emit("section-name", {sectionName: "Detalle del laboratorio", activeFiltersButton: false});
        },
        HandlePricing(){
            this.$store.dispatch('analysisType', this.labPricing)
        },
        HandleAnalysisType(){
            this.$store.dispatch('analysisType', this.labAnalysisType)
        },
        GetTotalReviewsQuantity(){
            let total = 0;
            this.labReviews.califications.forEach(element => {
                total = total + element
            });
            return total
        },
        CalculateReviewPercent(n){
            return ((100 * n) / this.GetTotalReviewsQuantity()).toFixed(1)
        }
    },
    mounted(){
        this.getLabById()
        this.SectionName()
        this.HandlePricing()
        this.HandleAnalysisType()
    }
}
</script>
<style lang="scss" scoped>
    .container{
        padding: 1rem;
    }
    .lab-advantages{
        margin: 1rem auto;
        width: max-content;
        .advantage-item{
            background: $secondary;
            padding: .2rem 1rem;
            display: inline-block;
            width: fit-content;
            margin: .2rem;
            color: #fff;
            font-weight: 200;
            font-size: .9rem;
            box-shadow: $shadow;
        }
    }
    section{
        margin-bottom: 2rem;
        h3{
            font-weight: 400;
        }
    }

    .frequent-questions{
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        border-bottom: $border;
        .text-box{
            display: flex;
            input{
                flex-grow: 1;
                flex-shrink: 1;
                width: 100%;
                margin-right: .3rem;
            }
            button{
                flex-grow: 0;
                flex-shrink: 0;
                width: 40px;
            }
        }

        .questions-list{
     
            margin-top: 2rem;
            .question-item{
                .question{
                    font-weight: 400;
                }
                .response{
                    padding-left: 2rem;
                    max-width: 500px;
                    p{
                        margin-top: .5rem;
                    }
                }
            }
        }
    }

    .reviews{
        margin-top: 4rem;
        .ratings{
            margin-bottom: 3rem;

            h1{
                margin: 0 auto .3rem auto;
                text-align: center;
                font-weight: 400;
                font-size: 4rem;
                line-height: 1;
            }
            .all-reviews-count{
                text-align: center;
                color: $text-muted;
                font-weight: 200;
            }
            .ratings-percents{
                display: flex;
                gap: .2rem;
                margin-top: 1.5rem;

                .percent-bar{
                    background: $secondary;
                    color: #fff;
                    font-size: .85rem;
                    padding: .02rem .05rem;
                    max-width: 100%;
                    text-align: center;
                    min-width: 20px;
                    position: relative;

                    .percent-indicator{
                        position: absolute;
                        bottom: - 100%;
                        color: $text-muted;
                        left: 0;
                        right: 0;
                        text-align: center;
                    }
                }
            }
        }
        .users-reviews{
            .review-container{
                .review-info{
                    display: flex;
                    .user-name{
                        font-weight: 400;
                    }
                    .user-rating{
                        margin-left: .5rem;
                    }
                    .review-date{
                        margin-left: auto;
                        color: $text-muted;
                        font-weight: .75rem;
                    }
                }
                .users-likes{
                    font-size: .95rem;
                }
            }
        }
    }

    .buy-service{
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        border-top: $border;
        width: 100%;
        padding:1rem 1.5rem 2rem 1.5rem;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .prices{
            .price-type{
                margin: 1;
                small{
                    line-height: 1;
                }
                div{
                    line-height: 1;
                    font-weight: 500;
                    font-size: 1.2rem;
                }
            }
        }
        .order-service-button-box{
            height: 100%;
            widows: 100%;
            .order-service-button{
                font-weight: 400;
                font-size: 1.2rem;
                width: 100%;
                height: 100%;
            }
        }
    }
        
</style>