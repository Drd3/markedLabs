<template>
    <div class="lab-info-header">
        <div class="lab-media">
            <div class="lab-img">
                <img :src="labLogo" class="fit-cover" alt="">
            </div>
            <div class="star-rating">{{starRating}}</div>
        </div>
        <div class="lab-info">
            <div>{{labLocation}}</div>
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
        "LabPhone"
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
            .lab-img{
                width: 70px;
                height: 70px;
                border-radius: 100%;
                border: $border;
                overflow: hidden;
                display: block;
                margin: auto;
                box-shadow: $shadow;
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