<template>
  <div class="Register-form">
    <form>
      <h2 class="text-center">
        Log in
      </h2>
      <div class="form-group">
        <input v-model="login" type="text" class="form-control" placeholder="Username" required="required">
      </div>
      <div class="form-group">
        <input  v-model="password" type="password" class="form-control" placeholder="Password" required="required">
      </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" v-on:click="signIn">
            Log in
          </button>
        </div>
    </form>
    <p class="text-center">
      <router-link class="nav-link" to="/signup">
        Create Account
      </router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'signin',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    signIn(e) {
      this.$store.dispatch('user/login', {
        login: this.login,
        password: this.password,
      }).then(() => {
        this.$router.push('/crews');
      });
    },
  },
};
</script>

<style scoped>
.Register-form {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 80px;
  background-color: #f4f2d9;
  padding: 20px 50px;
  border-radius: 10px;
}
</style>
