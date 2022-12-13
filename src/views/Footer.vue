<template>
    <footer>
        <div class="container">
            <div class="footer-item">
                <h4>
                    Nos ubicamos en:
                </h4>
                <div class="footer-item-info">
                    Manizales / Caldas - Colombia
                    <div>CRA 15 # 14 - 05</div>
                </div>
            </div>
            <div class="footer-item">
                <h4>
                    Contactanos en:
                </h4>
                <div class="footer-item-info">
                    marketlabs@gmail.com
                </div>
            </div>
            <div class="footer-item">
                <h4>
                    Siguenos en redes sociales:
                </h4>
                <div class="footer-item-info">
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div class="privacity-politic">
                Copyright All rights reserved.
                <a href="#">Politica de privacidad</a> 
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
}
</script>
<style lang="scss" scoped>
    footer{
        background: $primary;
        color:  $success;
        text-align: center;
        .container{
            padding: 1rem;
            padding-top: 2rem;
        }
        .footer-item{
            margin: 2rem 0;
            
            h4{
                font-weight: 300;
                font-size: 1.2rem;
            }
            .footer-item-info{
                font-weight: 200;
                i{
                    font-size: 2rem;
                    margin-right: 1rem;
                    margin-top: .5rem;
                }
            }
        }
        .privacity-politic{
            text-align: center;
            a{
                display: block;
                color: $success;
            }
        }  
    }
    
</style>