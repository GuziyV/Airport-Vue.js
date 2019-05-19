import axios from 'axios';
import Vue from 'vue';

const state = {
  departures: [],

};

const getters = {
  departures: st => st.departures,
  stewardesses: st => st.stewardesses,
  pilots: st => st.pilots,
};

const actions = {
  getAllDepartures({ commit }) {
    axios.get('/departures').then((response) => {
      const departures = response.data;
      commit('setDepartures', departures);
    });
  },
  addDeparture({ commit }, crew) {
    axios.post('/departures', crew).then(() => {
      commit('addDeparture', crew);
      Vue.$snotify.success('departure was created');
    });
  },
};

// mutations
const mutations = {
  setDepartures(st, departures) {
    // eslint-disable-next-line no-param-reassign
    st.departures = departures;
  },
  addDeparture(st, departure) {
    // eslint-disable-next-line no-param-reassign
    st.departures.push(departure);
  },
  removeDeparture(st, departure) {
    // eslint-disable-next-line no-param-reassign
    st.departures = st.departures.filter(p => p.id !== departure.id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};