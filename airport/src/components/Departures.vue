<template>
<div class="Crews row">
  <div class="col-4 createCrew">
    <h3>Create departure:</h3>
      <div class="form-group">
        <input  v-model="newDeparture.timeOfDeparture" type="text" class="form-control" placeholder="Time of departure" required="required" />
      </div>
      <v-select v-model="newDeparture.flight"
                  class="category-select"
                  :options="flights"
                  label="destination"
                  type="text"
                  placeholder="Choose a flight"
                  required="required">
        </v-select>
        <v-select v-model="newDeparture.crew"
                  class="category-select"
                  :options="crews.map((p) => p.pilot )"
                  label="name"
                  type="text"
                  placeholder="Choose a crew"
                  required="required">
        </v-select>
        <v-select v-model="newDeparture.plane"
                  class="category-select"
                  :options="planes.map((p) => p.planeType )"
                  label="model"
                  type="text"
                  placeholder="Choose a plane"
                  required="required">
        </v-select>
      <button class="btn btn-primary btn-block" v-on:click="addDeparture(newDeparture)">
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
    newDeparture: {
        timeOfDeparture: '',
        crew: '',
        flight: '',
        plane: '',
    },
  };
}

export default {
  name: 'departures',
  data() {
    return getInitialData();
  },
  methods: {
    ...mapActions('departures', ['addDeparture', 'removeDeparture']),
  },
  computed: mapState({
    ...mapState('flights', ['flights']),
    ...mapState('crews', ['crews']),
    ...mapState('planes', ['planes']),
  }),
  created() {
    this.$store.dispatch('flights/getAllFlights');
    this.$store.dispatch('planes/getAllPlanes');
    this.$store.dispatch('crews/getAllCrews');
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

.dropdown {
  padding-bottom: 10px;
}

</style>
