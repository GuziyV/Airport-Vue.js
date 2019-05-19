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
  setStewardesses(st, stewardesses) {
    // eslint-disable-next-line no-param-reassign
    st.stewardesses = stewardesses;
  },
  addStewardess(st, stewardess) {
    // eslint-disable-next-line no-param-reassign
    st.departures.push(stewardess);
  },
  setPilots(st, pilots) {
    // eslint-disable-next-line no-param-reassign
    st.pilots = pilots;
  },
  addPilot(st, pilot) {
    // eslint-disable-next-line no-param-reassign
    st.departures.push(pilot);
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