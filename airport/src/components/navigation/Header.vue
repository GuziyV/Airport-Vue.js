<template>
  <nav class="Header navbar navbar-light bg-light">
    <div v-if="isLoggedIn">
      <div v-if="currentUser.role === 'Admin'">
        <router-link class="nav-link" to="/Crews">
          Crews
        </router-link>
        <router-link class="nav-link" to="/Flights">
          Flights
        </router-link>
        <router-link class="nav-link" to="/Planes">
          Planes
        </router-link>
        <router-link class="nav-link" to="/Departures">
          Departures
        </router-link>
      </div>
      <div v-else>
    <router-link to="/signin">
          Lviv airport
        </router-link>
    </div>
    </div>
    <div v-else>
    <router-link to="/signin">
          Lviv airport
        </router-link>
    </div>
    <div>
      <div v-if="!isLoggedIn">
        <router-link class="nav-link btn btn-primary" to="/signin">
          Sign In
        </router-link>
        <router-link class="nav-link btn btn-dark" to="/signup">
          Sign Up
        </router-link>
      </div>
      <div v-else>
        <router-link class="btn btn-link" to="/profile">{{ currentUser.login }}</router-link> |
        <a href="#" class="btn btn-link-danger" v-on:click="logout">Logout</a>
      </div>
    </div>
  </nav>
</template>
<script>
import { userService } from './../../services/userService';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'header',
  data() {
    return {
    };
  },
  methods: {
    logout(e) {
      this.$store.dispatch('user/logout');
      this.$router.push('/');
    },
  },
  computed: mapState({
    isLoggedIn: state => state.user.isLoggedIn,
    currentUser: state => state.user.currentUser,
    isManager: state => state.user.currentUser.role === 'Manager',
  }),
};
</script>

<style scoped>
.Header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
}

.Header .nav-link {
  display: inline-block;
}

.Header .btn.btn-link-danger {
  color: red;
}
</style>
