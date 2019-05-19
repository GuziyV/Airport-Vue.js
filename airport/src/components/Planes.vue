<template>
<div class="Crews row">
  <div class="col-4 createCrew">
    <h3>New Plane: </h3>
      <div class="form-group">
        <input  v-model="newPlane.planeType.model" type="text" class="form-control" placeholder="Model" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newPlane.planeType.numberOfSeats" type="number" class="form-control" placeholder="Number of seats" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newPlane.planeType.loadCapacity" type="number" class="form-control" placeholder="Load capacity" required="required" />
      </div>
      <button class="btn btn-primary btn-block" v-on:click="addPlane(newPlane)">
        Create
      </button>
  </div>
  <div class="col-8">
    <h3>All Flight</h3>
    <div v-for="plane in planes" v-bind:key="plane.id" class="crew">
      <div>
        Model: {{ plane.planeType.model }}
      </div>
      <div>
        Release date: {{ plane.releaseDate }}
      </div>
      <div>
        Number of seats: {{ plane.planeType.numberOfSeats }}
      </div>
      <div>
        Load capacity: {{ plane.planeType.loadCapacity }}
      </div>
      <a class="cross" @click="removePlane(plane)">&#x2715;</a>
    </div>
  </div>
</div>
</template>

<script>
import userService from './../services/userService';
import { mapState, mapActions } from 'vuex';

function getInitialData() {
  return {
    newPlane: {
        planeType: {
            model: "",
            numberOfSeats: "",
            loadCapacity: "",
        },
        releaseDate: new Date()
    },
  };
}

export default {
  name: 'flights',
  data() {
    return getInitialData();
  },
  methods: {
    ...mapActions('planes', ['addPlane', 'removePlane']),
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
    ...mapState('planes', ['planes']),
  }),
  created() {
    this.$store.dispatch('planes/getAllPlanes');
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
