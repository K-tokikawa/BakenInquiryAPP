<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from './router';

export default defineComponent({
  name: 'App',
  components: {
  }, setup() {
    router.push('/')
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
