<template>
  <div>
    <a>
      <button class="others-btn" id="archive" @click="goArchived">
        <ion-icon name="archive-outline"></ion-icon>
        <br />Archive
      </button>
    </a>
    <a>
      <button class="others-btn" id="cancel" @click="goHome">
        <ion-icon name="home-outline"></ion-icon>
        <br />Go Home
      </button>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
    goArchived() {
      this.$router.push({ name: 'archived' });
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
  align-items: center;
  text-align: center;
}
.others-btn {
  width: 48%;
  height: 200px;
}
ion-icon {
  font-size: 80px;
}
button {
  font-size: 20px;
  background-color: violet;
  color: white;
  transition: all 0.1s ease-in-out;
}

button:hover {
  transform: scale(1.1, 1.1);
}
#cancel {
  background-color: salmon;
}
</style>
