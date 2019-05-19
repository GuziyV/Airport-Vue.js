<template>
<div>
    Hi user
</div>
</template>

<script>
import userService from './../services/userService';
import { mapState, mapActions } from 'vuex';

function getInitialData() {
  return {
    newCrew: {
        pilot: {
          name: "",
          surname: "",
          experience: 0,
        },
        stewardesses: [
          {
            name: "",
            surname: "",
            dateOfBirth: new Date(),
          }
        ],   
    },
  };
}

export default {
  name: 'buyTickets',
  data() {
    return getInitialData();
  },
  methods: {
    onNumberOfStewardessesChange(event) {
      this.newCrew.stewardesses = [];
      for(let i = 0;i < event.target.value;i++){
        this.newCrew.stewardesses.push({
          name: "",
          surname: ""
        });
      }
    },
    ...mapActions('crews', ['addCrew', 'removeCrew']),
  },
  computed: mapState({
    ...mapState('crews', ['stewardesses', "pilots", "crews"]),
  }),
  created() {
    this.$store.dispatch('crews/getAllCrews');
  }
};
</script>

<style scoped>
</style>
