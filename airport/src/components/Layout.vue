<template>
  <div class="Page">
    <Header></Header>
    <div class="background-image"></div>
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
.background-image {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;

  display: block;
  background-image: url('https://media.holidayme.com/wp-content/uploads/2015/07/06120741/Dubai_banner-min1.jpg');
  width: 1600px;
  height: 800px;
  background-repeat: no-repeat;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.content {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
