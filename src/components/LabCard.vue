<template>
    <div class="lab-card">
        <div class="lab-data-info">
            <div class="lab-star-rating"><i class="el-icon-star-on"></i>{{labData.starRating}}</div>
            <div class="lab-card-logo">
                <img :src="labData.labLogo" class="fit-cover" :alt="labData.labName">
            </div>
            <div class="lab-name">{{labData.labName}}</div>
            <div class="location">{{labData.labLocation}}</div>
        </div>
        <div class="lab-service-info">
            <div class="lab-analysis-list">
                <span v-for="(analysis, index) in labData.labAnalisysTypes" :key="index"> {{analysis}} </span>
                <div class="see-more">Ver más</div>
            </div>
            <div class="lab-service">
                <div class="service-item">Entrega en 12 dias aprox.</div>
            </div>
            <div class="lab-pricing">
                <div class="price">
                    <small>Precio por unidad</small>
                    <div class="cost">{{labData.pricing.forUnit}}</div>
                </div>
                <div class="price">
                    <small>Precio a partir de {{labData.pricing.wholesalePolitic}} muestras</small>
                    <div class="cost">{{labData.pricing.wholesale}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: "LabCard",
        props:[
            "labData"
        ]
    }
</script>
<style lang="scss" scoped>
    .lab-card{
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem;
        border: $border;
        max-width: 400px;
        min-height: 200px;
        margin: auto;
        box-shadow: 0px 2px 3px 1px rgb(0 0 0 / 32%);
        .lab-data-info{
            padding-right: 1rem;
            border-right: $border;
            justify-self: center;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            flex-grow: 0;
            width: 120px;
            .lab-star-rating{
                font-weight: 400;
                width: fit-content;
                margin: 0 auto;

                i{
                    color: $secondary;
                    margin-right: .2rem;
                }
            }
            .lab-card-logo{
                width: 70px;
                height: 70px;
                border-radius: 100px;
                overflow: hidden;
                border: 1px solid #e6e6e6;
                margin: 1rem auto .2rem auto;
                box-shadow: -1px 1px 2px 1px rbga(0, 0, 0, .5);
            }

            .lab-name{
                font-weight: 400;
                font-size: 1.1rem;
                flex-grow: 1;
                text-align: center;
            }
            .location{
                font-size: .9rem;
                text-align: center;
            }
        } 
        .lab-service-info{
            flex-grow: 1;
            text-align: left;
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            
            .lab-analysis-list{
                position: relative;
                font-size: .9rem;
                border-bottom: $border;
                padding-bottom: .5rem;
                margin-bottom: 1rem;
    
                .see-more{
                    background: #fff;
                    position: absolute;
                    right: 0;
                    bottom: -.45rem;
                    text-decoration: underline;
                    color: $secondary;
                    padding-left: .5rem;
                }
            }
            .lab-service{

                .service-item{
                    font-size: .9rem;
                    background: $secondary;
                    padding: .1rem .5rem;
                    color: #fff;
                }
            }
            .lab-pricing{
                margin-top: 1rem;
                .cost{
                    font-weight: 500;
                    font-size: 1.2rem;
                    line-height: 1;
                }
            }
        }
        

    }
</style>