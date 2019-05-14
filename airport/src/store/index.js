import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import crews from './modules/crews';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    crews,
  },
});
