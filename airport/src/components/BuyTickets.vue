<template>
<div class="Login-form">
    <div class="form-group">
        <input  v-model="ticketForm.departureFrom" type="text" class="form-control" placeholder="destination" required="required" />
    </div>
    <div class="form-group">
        <input  v-model="ticketForm.destination" type="text" class="form-control" placeholder="destination" required="required" />
    </div>
    <div class="form-group">
        <datepicker v-on:changedMonth="ticketForm.date" v-model="ticketForm.date"></datepicker>
    </div>
    <button class="btn btn-primary btn-block" v-on:click="search">
        Search
    </button>
    <div v-for="flight in flights" v-bind:key="flight.number">
      <div>
        From {{ flight.departureFrom }} to {{ flight.destination}}
      </div>
      <div>
        Time: {{ flight.timeOfDeparture }} to {{ flight.arrivalTime}}
      </div>
      <div>
        Number of tickets: {{ flight.tickets.length }} ({{ flight.tickets[0].price }}$)
      </div>
      <button class="btn btn-primary btn-block" v-on:click="printFlight(flight)">
        Buy Ticket
      </button>
    </div>
</div>
</template>

<script>
import userService from './../services/userService';
import { mapState, mapActions } from 'vuex';
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import axios from 'axios';


function getInitialData() {
  return {
    ticketForm: {
        departureFrom: '',
        destination: '',
        date: '',
    },
    flights: [],
  };
}

export default {
  name: 'buyTickets',
  data() {
    return getInitialData();
  },
  components: {
    Datepicker
  },
  methods: {
   search() {
      const url = `/products/search?deaprtureFrom=${ticketForm.departureFrom}&destination=${ticketForm.destination}&date=${ticketForm.date}`;
      axios.get(url).then((flights) => {
        this.flights = flights;
      });
   },
   printFlight(flight) {
       console.log(flight)
   }
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
.Login-form {
  max-width: 450px;
  margin: 0 auto;
  margin-top: 80px;
}
</style>
