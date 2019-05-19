import axios from 'axios';
import Vue from 'vue';

const state = {
  flights: [],
};

const getters = {
  flights: st => st.flights,
};

const actions = {
  getAllFlights({ commit }) {
    axios.get('/flights').then((response) => {
      const crews = response.data;
      commit('setFlight', crews);
    });
  },

  addFlight({ commit }, crew) {
    axios.post('/flights', crew).then(() => {
      commit('addFlight', crew);
      Vue.$snotify.success('Flight was created');
    });
  },
  removeFlight({ commit }, crew) {
    return axios.delete(`/flights/${crew.number}`).then(() => {
      commit('removeFlight', crew);
      Vue.$snotify.success('Flight was removed');
    });
  },
};

// mutations
const mutations = {
  setFlight(st, crews) {
    // eslint-disable-next-line no-param-reassign
    st.flights = crews;
  },
  addFlight(st, crew) {
    // eslint-disable-next-line no-param-reassign
    st.flights.push(crew);
  },
  removeFlight(st, flight) {
    // eslint-disable-next-line no-param-reassign
    st.flights = st.flights.filter(p => p.number !== flight.number);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};