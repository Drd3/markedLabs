<template>
    <div class="member-card">
        <div class="hexagon-shadow member-photo">
            <div>
                <img :src="photo"/>
            </div>
        </div>
        <div class="card-body">
            <h3 class="member-name">{{name}}</h3>
            <div class="member-charge">{{charge}}</div>
            <div class="social-media-list">
                <div v-for="(socialMedia, index) in socialMedias" :key="index" class="social-media">
                </div>
            </div>
            <div class="desc">
                {{description}}
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"MemberCard",
    props:[
        "photo",
        "name",
        "charge",
        "socialMedias",
        "description"
    ]
}
</script>
<style lang="scss" scoped>
    .member-card{
        width: 100%;
        max-width: 260px;
        margin: auto;
        .member-photo{
            div{
                width: 130px;
                height: 130px;
                background: $primary;
                margin: auto;
            }
        }
        .card-body{
            .member-name{
                font-size: 1.5rem;
                font-weight: 300;
                color: $primary;
                margin-bottom: 0;
                text-transform: uppercase;
            }
            .member-charge{
                text-transform: uppercase;
                color: $text-muted;
            }
            .social-media-list{
                display: flex;
                justify-content: center;
                margin: 1rem 0;
                .social-media{
                    background: $secondary;
                    width: 25px;
                    height: 25px;
                    margin: 0 .5rem;
                }
            }

            .desc{
                width: 100%;
                color: $text-muted;
                font-size: .93rem;
            }
        }
    }

</style>
