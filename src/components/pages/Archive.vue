<template>
  <div class="app-content">
    <h2>This is the archive page</h2>

    {{ mode }}

    <ul>
      <transition-group
        enter-active-class="animate__animated animate__backInLeft animate__faster"
        leave-active-class="animate__animated animate__backOutRight animate__faster"
        mode="out-in"
      >
        <li
          v-list-type.archive
          v-for="item in mode === 'localStorage'
            ? localArchived
            : serverArchived"
          :key="item.id"
          class="list-item"
        >
          {{ item.content }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  asyncComputed: {
    ...mapGetters({
      mode: 'getMode',

      localArchived: 'localStorage/getArchived',

      serverArchived: 'jsonServer/getArchived'
    })
  }
};
</script>

<style scoped>
.app-content {
  background-color: rgba(224, 102, 102, 0.3);
}

ul {
  width: 70%;
}
</style>
