import axios from 'axios';
import Vue from 'vue';

const state = {
  crews: [],
  stewardesses: [],
  pilots: [],
};

const getters = {
  crews: st => st.crews,
  stewardesses: st => st.stewardesses,
  pilots: st => st.pilots,
};

const actions = {
  getAllCrews({ commit }) {
    axios.get('/crews').then((response) => {
      const crews = response.data;
      commit('setCrews', crews);
    });
  },

  addCrew({ commit }, crew) {
    axios.post('/crews', crew).then(() => {
      commit('addCrew', crew);
      Vue.$snotify.success('Сrew was created');
    });
  },
  // eslint-disable-next-line no-dupe-keys
  getAllStewardesses({ commit }) {
    axios.get('/stewardesses').then((response) => {
      const stewardesses = response.data;
      commit('setStewardesses', stewardesses);
    });
  },
  addStewardess({ commit }, stewardess) {
    axios.post('/stewardesses', stewardess).then(() => {
      commit('addStewardess', stewardess);
    });
  },
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line no-dupe-keys
  getAllPilots({ commit }) {
    axios.get('/pilots').then((response) => {
      const pilots = response.data;
      commit('setPilots', pilots);
    });
  },
  addPilot({ commit }, Pilot) {
    axios.post('/piots', Pilot).then(() => {
      commit('addPilot', Pilot);
    });
  },
  removeCrew({ commit }, crew) {
    return axios.delete(`/crews/${crew.id}`).then(() => {
      commit('removeCrew', crew);
      Vue.$snotify.success('Project was removed');
    });
  },
};

// mutations
const mutations = {
  setCrews(st, crews) {
    // eslint-disable-next-line no-param-reassign
    st.crews = crews;
  },
  addCrew(st, crew) {
    // eslint-disable-next-line no-param-reassign
    st.crews.push(crew);
  },
  setStewardesses(st, stewardesses) {
    // eslint-disable-next-line no-param-reassign
    st.stewardesses = stewardesses;
  },
  addStewardess(st, stewardess) {
    // eslint-disable-next-line no-param-reassign
    st.crews.push(stewardess);
  },
  setPilots(st, pilots) {
    // eslint-disable-next-line no-param-reassign
    st.pilots = pilots;
  },
  addPilot(st, pilot) {
    // eslint-disable-next-line no-param-reassign
    st.crews.push(pilot);
  },
  removeCrew(st, crew) {
    // eslint-disable-next-line no-param-reassign
    st.crews = st.crews.filter(p => p.id !== crew.id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};