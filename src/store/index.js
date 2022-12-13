import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    labAnalysisComplete: false,
    AnalisysType: "",

    userLogged: false,

    loginData: {
      userName: "Usuario 01",
      email: "example@example.com",
      password: "2255ab"
    },

    labList:[
        {
            id: 1,
            labName : "Terralab",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            starRating: 4.5,
            labLocation: "Manizales / Caldas",
            acredited: true,
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["pH", "acidez", "azufre"],
            pricing: {
                forUnit: 200000,
                wholesale: 150000,
                wholesalePolitic: 10,
                analysisCompleteCost: 1200000
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        },
        {   
            id: 2,
            labName : "Laboratorio de Manizales",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            acredited: true,
            starRating: 3.5,
            labLocation: "Manizales / Caldas",
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["cadmio", "boro", "azufre"],
            pricing: {
                forUnit: 150000,
                wholesale: 100000,
                wholesalePolitic: 15,
                analysisCompleteCost: 900000
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        },
        {
            id: 3,
            labName : "Laboratorio de Medellín",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            acredited: false,
            starRating: 4.8,
            labLocation: "Medellin / Antioquia",
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["azufre", "cacao"],
            pricing: {
                forUnit: 220000,
                wholesale: 160000,
                wholesalePolitic: 6,
                analysisCompleteCost: 1400000
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        },
        {
            id: 4,
            labName : "Laboratorio universitario",
            labLogo: "http://latentacion.com.co/wp-content/uploads/2020/12/Logo-JPG-01-150x150.jpg",
            starRating: 4.1,
            acredited: true,
            labLocation: "Manizales / Caldas",
            address: "Cra 15 # 14 -05",
            labAnalisysTypes: ["pH",  "acidez", "azufre"],
            pricing: {
                forUnit: 210000,
                wholesale: 120000,
                wholesalePolitic: 13,
                analysisCompleteCost: 1150000
            },
            email: "loremipsum@example.co",
            phone: "3196696945"
            
        }
    ],
    samples: [

      {
        tableName : "table01",
        tableId: 1,
        tableContent: [
          {
            id:1,
            property:"Lorem Ipsum Dolor",
            propertyIdentification: "123456789",
            dateOfSampling: "2022-10-29",
            city: "Manizales",
            sidewalk: "Bajo Tablazo",
            shadowPercent: 50,
  
        },
        {
            id:2,
            property:"Lorem Ipsum Dolor",
            propertyIdentification: "987654321",
            dateOfSampling: "2022-11-06",
            city: "Manizales",
            sidewalk: "Bajo Tablazo",
            shadowPercent: 70,
        },
        {
            id: 3,
            property:"Sit amet concetetur",
            propertyIdentification: "11223344",
            dateOfSampling: "2022-11-12",
            city: "Manizales",
            sidewalk: "Bajo Tablazo",
            shadowPercent: 50,
        },
        ]
        
      }
      
    ],

    sample: null
  },
  getters: {
  },
  mutations: {
    updateAnalysisComplete(state, bool){
      state.labAnalysisComplete = bool
    },
    updateSampleTable(state, sample){
      state.samples[0].tableContent = sample
    },
    userLoggedIn(state){
      state.userLogged = true
      console.log("usuario logueado con exito")
    },
    analysisType(state, type){
      state.AnalisysType = type
    }
  },
  actions: {
    updateSampleTable(context, sample){
      context.commit("updateSampleTable", sample)
    },
    userLoggedIn(context){
      context.commit('userLoggedIn')
    },
    updateAnalysisComplete(context, bool){
      context.commit('updateSampleTable', bool)
    },
    analysisType(context, type){
      context.commit('analysisType', type)
    }
  },
  modules: {
  }
})
