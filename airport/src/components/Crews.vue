<template>
<div class="Crew row">
  <div class="col-4 createCrew">
    <h3>New Crew</h3>
    <h4>Pilot:</h4>
      <div class="form-group">
        <input  v-model="newCrew.pilot.name" type="text" class="form-control" placeholder="Name" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newCrew.pilot.surname" type="text" class="form-control" placeholder="Surname" required="required" />
      </div>
      <div class="form-group">
        <input  v-model="newCrew.pilot.experience" type="number" class="form-control" placeholder="Experience(years)" required="required" />
      </div>
      <label for="numberOfStewardesses">Number of stewardesses</label>
      <select id="numberOfStewardesses"  @change="onNumberOfStewardessesChange($event)" name="numberOfStewardesses">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div v-for="(stewardess, i) in newCrew.stewardesses" v-bind:key="i" class="stewardess">
        <div class="form-group">
          <input  v-model="stewardess.name" type="text" class="form-control" placeholder="Name" required="required" />
        </div>
        <div class="form-group">
          <input  v-model="stewardess.surname" type="text" class="form-control" placeholder="Surname" required="required" />
        </div>
        <div class="form-group">
          <input  v-model="stewardess.dateOfBirth" type="date" class="form-control" placeholder="Surname" required="required" />
        </div>
      </div>
      <button class="btn btn-primary btn-block" v-on:click="addCrew(newCrew)">
        Create
      </button>
  </div>
  <div class="col-8">
    <h3>All Crews</h3>
    <div v-for="(crew, i) in crews" v-bind:key="crew.pilot.surname + i" class="crew">
      <div class="pilot">
        <h4>Pilot: </h4>
          <div>
            Name: {{ crew.pilot.name }}
          </div>
          <div>
            Surname: {{ crew.pilot.surname }}
          </div>
          <div>
            Experience: {{ crew.pilot.experience }}
          </div>
      </div>
      <div class="stewardessess">
        <h4>Stewardesses: </h4>
          <div class="stewardess" v-for="(stewardess, i) in crew.stewardesses" v-bind:key="stewardess.surname + i">
            <div>
              Name: {{  stewardess.name }}
            </div>
            <div>
              Surname: {{ stewardess.surname }}
            </div>
            <div>
              Date of birth: {{ (new Date(stewardess.dateOfBirth)).getFullYear() }}
            </div>
          </div>
      </div>
      <a class="cross" @click="removeCrew(crew)">&#x2715;</a>
    </div>
  </div>
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
  name: 'crews',
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

<style>

.Crew .stewardess {
  border-bottom: 1px solid black;
  margin: 10px 0;
}

.Crew .crew {
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  background-color:#f4f2d9;
}

.Crew .crew .cross {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.createCrew {
   padding: 20px 50px;
   border-radius: 10px;
   background-color: #f4f2d9;
}

</style>
