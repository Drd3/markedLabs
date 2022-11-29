<template>
    <div class="new-lab-card">
        <div class="lab-card-head">
            <div class="card-media">
                <img :src="labImageUrl"/>
            </div>
            <div>
                <div class="lab-name">{{labName}}</div>
                <div class="lab-location">{{labLocation}}</div>
            </div>
        </div>
        <div class="card-body">
            <div class="lab-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
            <div class="join-date">- Se unió en : 20 de Oct 2022 </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewLabCard',
    props:[
        'labName',
        'labImageUrl',
        'labLocation'
    ],
    data: function() {
        return({

        })
    },
}
</script>
<style lang="scss" scoped>
    .new-lab-card{
        width: 100%;
        max-width: 250px;
        margin: auto;
        .lab-card-head{
            display: flex;
            align-items: center;
            .card-media{
                width: 60px;
                height: 60px;
                border-radius: 100%;
                border: 1px solid #e6e6e6;
                overflow: hidden;
                margin-right: 1rem;

                img{
                    position: relative;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
            .lab-name{
                text-align: left;
                font-size: 1.2rem;
                color: #000;
                line-height: 1;
            }
            .lab-location{
                font-weight: 200;
                text-align: left;
                font-size: 1rem;
            }
        }

        .card-body{
            margin-top: .5rem;
            .lab-desc{
                text-align: justify;
            }
            .join-date{
                color: $text-muted;
                margin-top: .5rem;
                text-align: right;
            }
        }
    }

</style>