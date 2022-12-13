<template>
    <div class="lab-info-header">
        <div class="lab-media">
            <div class="lab-card-logo">
                <div class="lab-img">
                    <img :src="labLogo" class="fit-cover" alt="">
                </div>
                <span class="acreditation-icon" v-if="acredited">
                    <i class="el-icon-check"></i>
                </span>
            </div>
            
            <div class="star-rating"><i class="el-icon-star-on"></i>{{starRating}}</div>
        </div>
        <div class="lab-info">
            <div><span>{{labLocation}}</span> - <span>{{address}}</span></div>
            <h3>{{labName}}</h3>
            <div class="contact-info">{{labEmail}}</div>
            <div class="contact-info">{{LabPhone}}</div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'LabHeader',
    props:[
        "labName",
        "labLogo",
        "starRating",
        "labLocation",
        "labEmail",
        "LabPhone",
        "acredited",
        "address"
    ]
}
</script>
<style lang="scss" scoped>
    .lab-info-header{
        display: flex;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: $border;
        .lab-media{
            width: 100px;
            margin-right: .5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .lab-card-logo{
                width: 70px;
                height: 70px;
                margin: 1rem auto .2rem auto;
                box-shadow: -1px 1px 2px 1px rbga(0, 0, 0, .5);
                position: relative;

                .lab-img{
                    border: 1px solid #e6e6e6;
                    box-shadow: $shadow;
                    border-radius: 100px;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                }

                .acreditation-icon{
                    background: $secondary;
                    color: $success;
                    display: block;
                    width: 25px;
                    height: 25px;
                    text-align: center;
                    border-radius: 100px;
                    border: 4px solid #fff;
                    position: absolute;
                    right: 5px;
                    bottom: -7px;
                    font-size: .7rem;

                }
            }
            .star-rating{
                width: fit-content;
                font-weight: 400;
            }
        }

        .lab-info{
          h3{
            margin-top: 0;
            font-weight: 400;
          } 
          .contact-info{
            justify-self: flex-end;
          }
        } 
    }
</style>