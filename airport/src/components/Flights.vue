<template>
<div class="Crews row">
  <div class="col-4 createCrew">
    <h3>New Flight</h3>
      <div class="form-group">
        <input  v-model="newFlight.departureFrom" type="text" class="form-control" placeholder="Departure from" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newFlight.destination" type="text" class="form-control" placeholder="Destination" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newFlight.timeOfDeparture" type="text" class="form-control" placeholder="Time of departure" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newFlight.arrivalTime" type="text" class="form-control" placeholder="Arrival Time" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newFlight.numberOfTickets" type="number" class="form-control" placeholder="Number of tickets" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newFlight.pricePerTicket" type="number" class="form-control" placeholder="Price per ticket" required="required" />
      </div>
      <button class="btn btn-primary btn-block" v-on:click="addFlight(parseFlight())">
        Create
      </button>
  </div>
  <div class="col-8">
    <h3>All Flight</h3>
    <div v-for="flight in flights" v-bind:key="flight.number" class="crew">
      <div>
        From {{ flight.departureFrom }} to {{ flight.destination}}
      </div>
      <div>
        Time: {{ new Date(flight.timeOfDeparture).toLocaleString() }} to {{ new Date(flight.arrivalTime).toLocaleString() }}
      </div>
      <div>
        Number of tickets: {{ flight.tickets.length }} ({{ flight.tickets[0].price }}$)
      </div>
      <a class="cross" @click="removeFlight(flight)">&#x2715;</a>
    </div>
  </div>
</div>
</template>

<script>
import userService from './../services/userService';
import { mapState, mapActions } from 'vuex';

function getInitialData() {
  return {
    newFlight: {
        departureFrom: '',
        destination: '',
        timeOfDeparture: '',
        arrivalTime: '',
        pricePerTicket: '',
        numberOfTickets: '',
    },
  };
}

export default {
  name: 'flights',
  data() {
    return getInitialData();
  },
  methods: {
    ...mapActions('flights', ['addFlight', 'removeFlight']),
    parseFlight() {
      const tickets = [];
      for(let i = 0; i < this.newFlight.numberOfTickets; i++) {
        tickets.push({
          price: this.newFlight.pricePerTicket,
        });
      }
      return {
        departureFrom: this.newFlight.departureFrom,
        timeOfDeparture: this.newFlight.timeOfDeparture,
        destination: this.newFlight.destination,
        arrivalTime: this.newFlight.arrivalTime,
        tickets: tickets,
      }
    }
  },
  computed: mapState({
    ...mapState('flights', ['flights']),
  }),
  created() {
    this.$store.dispatch('flights/getAllFlights');
  }
};
</script>

<style scoped>

.Crews .crew {
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  background-color:seashell;
}

.Crews .crew .cross {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

</style>
