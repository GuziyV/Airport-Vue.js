import axios from 'axios';
import Vue from 'vue';

const state = {
  planes: [],
};

const getters = {
  planes: st => st.planes,
};

const actions = {
  getAllPlanes({ commit }) {
    axios.get('/planes').then((response) => {
      const crews = response.data;
      commit('setPlane', crews);
    });
  },

  addPlane({ commit }, crew) {
    axios.post('/planes', crew).then(() => {
      commit('addPlane', crew);
      Vue.$snotify.success('Plane was created');
    });
  },
  removePlane({ commit }, crew) {
    return axios.delete(`/planes/${crew.id}`).then(() => {
      commit('removePlane', crew);
      Vue.$snotify.success('Plane was removed');
    });
  },
};

// mutations
const mutations = {
  setPlane(st, crews) {
    // eslint-disable-next-line no-param-reassign
    st.planes = crews;
  },
  addPlane(st, crew) {
    // eslint-disable-next-line no-param-reassign
    st.planes.push(crew);
  },
  removePlane(st, plane) {
    // eslint-disable-next-line no-param-reassign
    st.planes = st.planes.filter(p => p.id !== plane.id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};