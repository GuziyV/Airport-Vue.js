import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import crews from './modules/crews';
import flights from './modules/flights';
import planes from './modules/planes';
import departures from './modules/departures';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    departures,
    user,
    crews,
    flights,
    planes,
  },
});
