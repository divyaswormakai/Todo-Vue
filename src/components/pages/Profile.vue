<template>
  <div class="app-content">
    Profile of:
    <h1>{{ username }}</h1>
    <br />
    <div class="totalInfo" v-if="this.getData">
      <div class="totalInfo-part">
        <h1>To-do</h1>
        <br />
        <h2>{{ this.getData.todo.length }}</h2>
      </div>
      <div class="totalInfo-part">
        <h1>Completed</h1>
        <br />
        <h2>{{ this.getData.completed.length }}</h2>
      </div>
      <div class="totalInfo-part">
        <h1>Archived</h1>
        <br />
        <h2>{{ this.getData.archived.length }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      username: this.$route.params.username
    };
  },

  asyncComputed: {
    ...mapGetters({
      mode: 'getMode'
    }),
    getData() {
      if (this.mode) {
        let userData = null;
        userData = this.$store.getters[this.mode + '/getInfo'];
        return userData;
      }
    }
  }
};
</script>

<style scoped>
.app-content {
  background-color: thistle;
}
.totalInfo {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.totalInfo-part {
  background-color: rgb(231, 143, 231);
  min-width: 20vw;
  border-radius: 10px;
  text-align: center;
  transition: all 0.1s ease-in-out;
}
.totalInfo-part:hover {
  cursor: pointer;
  transform: scale(1.05, 1.05);
  color: white;
}
</style>
