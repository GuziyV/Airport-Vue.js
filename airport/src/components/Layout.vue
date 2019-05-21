<template>
  <div class="Page">
    <Header></Header>
    <div class="bg-image"></div>
    <router-view class="content"></router-view>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import Header from './navigation/Header';

export default {
  components: {
    Header,
  },
  name: 'Layout',
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
