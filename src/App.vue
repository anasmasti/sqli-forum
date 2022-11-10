<template>
  <app-layout>
    <RouterView />
  </app-layout>
</template>

<script>
import AppLayout from './layout/AppLayout.vue'

export default {
  components: { AppLayout },
  name: 'App'
}
</script>

<style>
@import url("./assets/style.css");
</style>
