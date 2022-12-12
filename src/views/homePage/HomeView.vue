<template>
  <div class="">
      <header>
        <div class="container">
          <nav>
            <div class="home-nav-item hexagon user-link" v-if="!this.$store.state.userLogged" @click="toLogin()">
              <i class="el-icon-user"></i>
            </div>
            <div class="home-nav-item hexagon user-link" v-if="this.$store.state.userLogged">
              <img src="../../assets/img/photo.jpg" class="fit-cover"/>
            </div>
            <div class="home-nav-item hexagon menu-link">
              <i class="el-icon-more-outline"></i>
            </div>
          </nav>
          <div class="header">
            <h1 class="header-title">
            Market Labs
            </h1>
            <h5 class="header-subtitle">E-Commerce de servicios de laboratorios.</h5>
            <SearchInput></SearchInput>
         </div>
        </div>
      </header>
      <section class="recent-labs">
        <div class="container">
          <h1 class="section-title">LABORATORIOS MÁS RECIENTES</h1>
          <DecorativeHexagons :shadows-active="true"></DecorativeHexagons>
          <div class="join-us">
            <hooper :settings="newLabsCarouselSettings">
              <slide v-for="(lab, index) in newLabsList" :key="index">
                <NewLabCard :lab-name="lab.name" :lab-location="lab.location" :lab-image-url="lab.imgUrl"></NewLabCard>
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
            <div>¿Quieres ser parte?</div>
            <a>UNETE A NOSOTROS</a>
          </div>
        </div>
      </section>
      <section class="about-market-labs">
        <div class="container">
          <h1 class="section-title">¿QUÉ ES MARKET LABS?</h1>
          <DecorativeHexagons :shadows-active="false"></DecorativeHexagons>
          <img class="map-image" src="../../assets/img/markedlab-map.png"/>
          <div class="market-labs-desc">
            <p>
              Market Labs es un "marketplace" donde los laboratorios pueden prestar sus servicios de investigación, a través de una plataforma que permite agilizar el proceso de análisis.
            </p>
            <p>
              Los laboratorios tienden a demorar los resultados debido a que llevan a cabo procesos repetitivos y poco estandarizados. Adicionalmente, tampoco se encuentra una plataforma que los integre o les permita ser visibles en el mercado.
            </p>
            <p>
              Mediante esta plataforma se busca favorecer la investigación a nivel nacional, a través de un ecosistema que permita visibilizar los laboratorios y protocolos que agilicen la prestación de sus servicios. 
            </p>
          </div>
          <DecorativeHexagons :shadows-active="false"></DecorativeHexagons>
        </div>
      </section>
      <section class="objectives">
        <div class="container section-border">
          <h1 class="section-title">¿CUALES SON NUESTROS OBJETIVOS?</h1>
          <DecorativeHexagons :shadows-active="true"></DecorativeHexagons>
          <div class="objectives-list">
            <div class="objective">
              <div class="objective-image hexagon-shadow">
                <div>
                  <img src="../../assets/img/team-members-2.jpg" class="fit-cover"/>
                </div>
              </div>
              <div class="objective-text">
                Desarrollar una plataforma que integre los servicios de los laboratorios y estandarice sus protocolos.
              </div>
            </div>
            <div class="objective">
              <div class="objective-text">
                Automatizar los protocolos operativos en la recopilación de la información y venta de servicios.
              </div>
              <div class="objective-image hexagon-shadow">
                <div>
                  <img src="../../assets/img/team-members-2.jpg" class="fit-cover"/>
                </div>
              </div>
              
            </div>
            <div class="objective ">
              <div class="objective-image hexagon-shadow">
                <div>
                  <img src="../../assets/img/team-members-2.jpg" class="fit-cover"/>
                </div>
              </div>
              <div class="objective-text">
                Fortalecer la conectividad y visibilidad comercial de los laboratorios a nivel nacional.   
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="how-it-works ">
        <div class="container section-border">
          <h1 class="section-title">¿COMO FUNCIONA?</h1>
          <DecorativeHexagons :shadows-active="true"></DecorativeHexagons>

          <div class="explanation-list">
            <div class="explanation-item-container">
              <div class="explanation-item">
                <div class="explanation-image hexagon">
                  <img src="../../assets/img/exp-1.png"/>
                </div>
                <div class="explanation-info">
                  <div class="explanation-title">
                    Busqueda
                  </div>
                  <span>Del analisis que necesitas</span>
                </div>
              </div>
            </div>

            <div class="explanation-item-container">
              <div class="explanation-item">
                <div class="explanation-image hexagon">
                  <img src="../../assets/img/selection.png"/>
                </div>
                <div class="explanation-info">
                  <div class="explanation-title">
                    Selección
                  </div>
                  <span>Del laboratorio que mas se adecue a tus necesidades.</span>
                </div>
              </div>
            </div>

            <div class="explanation-item-container">
              <div class="explanation-item">
                <div class="explanation-image hexagon">
                  <img src="../../assets/img/forms.png"/>
                </div>
                <div class="explanation-info">
                  <div class="explanation-title">
                    Formulario
                  </div>
                  <span>Del laboratorio que mas se adecue a tus necesidades.</span>
                </div>
              </div>
            </div>

            <div class="explanation-item-container">
              <div class="explanation-item">
                <div class="explanation-image hexagon">
                  <img src="../../assets/img/envio-03.png"/>
                </div>
                <div class="explanation-info">
                  <div class="explanation-title">
                    Envio
                  </div>
                  <span>Del laboratorio que mas se adecue a tus necesidades.</span>
                </div>
              </div>
            </div>

            <div class="explanation-item-container">
              <div class="explanation-item">
                <div class="explanation-image hexagon">
                  <img src="../../assets/img/analisis-04.png"/>
                </div>
                <div class="explanation-info">
                  <div class="explanation-title">
                    Analisis
                  </div>
                  <span>Del laboratorio que mas se adecue a tus necesidades.</span>
                </div>
              </div>
            </div>

            <div class="explanation-item-container">
              <div class="explanation-item">
                <div class="explanation-image hexagon">
                  <img src="../../assets/img/envio-muestras-05.png"/>
                </div>
                <div class="explanation-info">
                  <div class="explanation-title">
                    Informe
                  </div>
                  <span>Del laboratorio que mas se adecue a tus necesidades.</span>
                </div>
              </div>
            </div>


            
          </div>
        </div>
      </section>
      <section class="our-team">
        <div class="container ">
          <h1 class="section-title">NUESTRO EQUIPO</h1>
          <DecorativeHexagons :shadows-active="true"></DecorativeHexagons>
          <hooper :settings="teamMembersCarousel">
            <slide v-for="(member, index) in teamMemberList" :key="index">
              <MemberCard 
                :photo="member.memberPhoto"
                :name="member.name"
                :charge="member.charge"
                :social-medias="member.socialMedias"
                :description="member.description"
                ></MemberCard>
            </slide>
          </hooper>
        </div>
      </section>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
import NewLabCard  from '@/components/NewLabCard.vue';
import DecorativeHexagons from '@/components/DecorativeHexagons.vue';
import MemberCard from '@/components/MemberCard.vue';
import SearchInput from '@/components/SearchInput.vue';


export default {
  name: 'HomeView',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    NewLabCard,
    DecorativeHexagons,
    MemberCard,
    SearchInput
  },
  data: function(){
    return({
      newLabsCarouselSettings: {
        autoPlay: true,
        playSpeed: 2000,
        centerMode: true
      },

      teamMembersCarousel:{
        centerMode: true
      },

      
      //========= SIMULATED DATA ===========//

      newLabsList:[
        {
          name: "Terralab",
          location: "Manizales / Caldas",
          imgUrl: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg"
        },
        {
          name: "Laboratorio Clinico",
          location: "Manizales / Caldas",
          imgUrl: ""
        },
        {
          name: "Laboratorio de Medellin",
          location: "Medellín / Antioquia",
          imgUrl: "data:image/png;base64,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"
        },
      ],

      teamMemberList:[
        {
          name: "Kristian Cañaveral",
          memberPhoto: "@/assets/img/photo.jpg",
          charge: "Lorem Ipsum",
          socialMedias:{
            twitter: "",
            linkedIn: "",
            email: ""
          },
          description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
        },
        {
          name: "Emanuel Rico Rojas",
          memberPhoto: "@/assets/img/photo.jpg",
          charge: "Diseñador visual",
          socialMedias:{
            twitter: "",
            linkedIn: "",
            email: ""
          },
          description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
        }
      ]


    })
  },
  methods:{
    toLogin(){
      if(!this.$store.state.userLogged){
        this.$router.push({name:'login', params: { status : 2 }})
      }
    }
  }
}
</script>
<style lang="scss" scoped>

  
  header{
    background-image: url(../../assets/img/Header-mobile.png);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: fit-content;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: $success;

    nav{
      width: fit-content;
      margin-left: auto;
      .menu-link{
        margin-top: -10px;
        margin-left: 29px;
      }
      .home-nav-item{
        background: $success;
        color: #fff;
        width: fit-content;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
      }
    }
    .header-title{
      font-weight: 400;
      line-height: 1;
      margin-bottom: .5rem;
      font-size: 3rem;
    }
    .header-subtitle{
      margin: 0;
      font-weight: 300;
      font-size: 1rem;
      letter-spacing: .5px;
    }
  }
  
  .hooper{
      min-height: fit-content;
      height: 200px;
      padding-left: 0;
  }

  section{
      padding: 0 1rem;
      text-align: center;

      .container{
        padding: 5rem 0;
      }

    .section-title{
      color: $primary;
      font-weight: 300;
      font-size: 1.5rem;      
    }
  }

  .section-border{
    border-bottom: $border;
  }

  .recent-labs{
    .hooper{
      
      .hooper-navigation{
        .hooper-prev{
        margin-left: -1rem;
          }
          .hooper-next{
            margin-right: -1rem;
          }
      }
      
    }
  }

  .about-market-labs{
    background: $secondary;

    color: #fff;
    text-align: justify;
    
    
    h1{
      text-align: center;
      color: #fff;
    }
    .map-image{
      margin: 2rem 0;
      max-width: 430px;
    }
    .market-labs-desc{
      margin-bottom: 5rem;
    }
  }

  .objectives{
    .objectives-list{
      margin-top: 2rem;
      max-width: 388px;
      margin: auto;
      .objective{
        display: flex;
        align-items: center;
        margin: 2rem 0;
        max-width: 366px;
        
        .objective-image{
          margin: 0 .5rem;
          div{
            background: $secondary;
            height: 110px;
            width: 110px;
          }
        }
        .objective-text{
          text-align: left;
        }
      }
    }
  }

  $hexagonSize: 75px; 
  .how-it-works{
    .explanation-list{
      margin-top: 2rem;
      .explanation-item-container{
        width: 50%;
        display: flex;
        margin: -.5rem 0;
      }
      .explanation-item{
        display: flex;
        align-items: center;
        margin: -.1rem 0;
        justify-content: center;
        align-items: flex-start;
        .explanation-image{
          height:$hexagonSize;
          width: $hexagonSize;
          flex-shrink: 0;
          background: $secondary;
          display: flex;
          align-items: center;
          justify-content: center;
          
          img{
            width: 60%;
            height: 60%;
            position: relative;
            object-fit: fill;
          }
        }
        .explanation-info{
          .explanation-title{
            text-transform: uppercase;
            color: $primary;
            font-weight: 400;
            font-size: 1rem;

          }
          span{
            font-size: .9rem;
            line-height:1;
            display: block;
            margin-top: .2rem;
          }
        }
      }
      .explanation-item-container:nth-child(odd){
        margin-left: auto;
        .explanation-item{
          margin-left: -1.2rem;
          .explanation-info{
            text-align: left;
          }
        }
      }

      .explanation-item-container:nth-child(even){
        justify-content: flex-end;
        .explanation-item{
          margin-right: -1.2rem;
          .explanation-image{
          order: 2;  
        }
        .explanation-info{
          order: 1;
          text-align: right;
        }
        }
        
      }
    }
  }

  .our-team{

    .hooper{
      min-height: 350px;
      margin-top: 2rem
    }
  }

  
</style>