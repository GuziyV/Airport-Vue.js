<template>
<div class="Login-form">
  <form>
    <h2 class="text-center">
      Registration
    </h2>
    <div class="form-group">
      <input v-model="user.login" type="text" class="form-control" placeholder="Username" required="required">
    </div>
    <div class="form-group">
      <input v-model="user.password" type="password" class="form-control" placeholder="Password" required="required">
    </div>
    <div class="form-group">
      <input v-model="user.email" type="text" class="form-control" placeholder="Email" required="required">
    </div>
    <div class="form-group">
      <input v-model="user.phone" type="text" class="form-control" placeholder="Phone" required="required" data-format="+38 (0dd) ddd-dddd">
    </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block" v-on:click="signUp">
          Register
        </button>
      </div>
      <div class="clearfix">
      </div>
  </form>
</div>
</template>

<script>
import userService from './../services/userService';

export default {
  name: 'signup',
  data() {
    return {
      user: {
        login: '',
        password: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    signUp(e) {
      this.$store.dispatch('user/register', this.user).then(() => {
        this.$router.push('/signIn');
      });
    },
  },
};
</script>

<style scoped>
.Login-form {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 80px;
  background-color: #f4f2d9;
  padding: 20px 50px;
  border-radius: 10px;
}
</style>
