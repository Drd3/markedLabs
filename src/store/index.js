import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samples: [
      {
          id:1,
          property:"Emanuel Rico Rojas",
          propertyIdentification: "10022313254",
          dateOfSampling: "20-11-2022",
          city: "Manizales",
          sidewalk: "Bajo Tablazo",
          shadowPercent: 12,

      },
      {
          id:2,
          property:"Emanuel Rico Rojas",
          propertyIdentification: "10022313254",
          dateOfSampling: "2022-11-20",
          city: "Manizales",
          sidewalk: "Bajo Tablazo",
          shadowPercent: 12,
      },
      {
          id: 3,
          property:"Emanuel Rico Rojas",
          propertyIdentification: "10022313254",
          dateOfSampling: "2022-11-20",
          city: "Manizales",
          sidewalk: "Bajo Tablazo",
          shadowPercent: 12,
      },
    ],

    sample: null
  },
  getters: {
  },
  mutations: {
    updateSampleTable(state){
      state.samples = sample
    }
  },
  actions: {
    updateSampleTableAction(context){
      context.commit("updateSampleTable")
    }
  },
  modules: {
  }
})
