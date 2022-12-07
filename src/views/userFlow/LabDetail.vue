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
                <h1>4.5</h1>
                <div class="all-reviews-count">54 CALIFICACIONES</div>

                <div class="ratings-percents">
                    <div class="percent-bar">1</div>
                    <div class="percent-bar">2</div>
                    <div class="percent-bar">3</div>
                    <div class="percent-bar">4</div>
                    <div class="percent-bar">5</div>
                </div>
            </div>
            <div class="users-reviews">
                <div class="review-container">
                    <div class="review-info">
                        <span class="user-name">User</span>
                        <span class="user-rating">4.5</span> 
                        <span class="review-date">15 de noviembre de 2022</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam 
                    </p>
                    <div class="users-likes">A 78 usuarios les parece util</div>
                </div>
            </div>
        </section>
        <div class="buy-service">
            <div class="prices">
                <div class="price-type">
                    <small>Precio por unidad</small>
                    <div>{{labData.pricing.forUnit}}</div>
                </div>
                <div class="price-type">
                    <small>Precio a partir de {{labData.pricing.wholesalePolitic}} unidades</small>
                    <div>{{labData.pricing.wholesale}}</div>
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
        "labData"
    ],
    data: function(){
        return({

        })
    },
    methods:{
        ToForms(){
            this.$emit('to-forms', {
                labData: this.labData,
                status: 3
            })
            console.log("To Forms")
        }
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
            margin-bottom: 2rem;

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
                    padding: .01rem .1rem;
                    width: 100%;
                    text-align: center;
                    min-width: fit-content;
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