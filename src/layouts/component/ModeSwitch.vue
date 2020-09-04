<template>
  <div>
    <div
      id="on"
      @click="toggleSwitch('localStorage')"
      :class="{ active: value === 'localStorage' }"
    >
      Local Storage Mode
    </div>
    <div
      id="off"
      @click="toggleSwitch('jsonServer')"
      :class="{ active: value === 'jsonServer' }"
    >
      Server Mode
    </div>
    <button class="btn btn-info" @click="changeMode(value)">
      Save Mode
    </button>
  </div>
</template>

<script>
export default {
  props: ['value', 'changeMode'],
  methods: {
    toggleSwitch(value) {
      console.log(value);
      //  This must be an input cause our model is listening to the input value
      this.$emit('input', value);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 250px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightseagreen;
}

#off:hover,
#off.active {
  background-color: tomato;
}
</style>
