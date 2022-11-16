<template>
  <app-layout>
    <RouterView />
  </app-layout>
</template>

<script>
import { onMounted } from 'vue'
import AppLayout from './layout/AppLayout.vue'
import { useStore } from 'vuex'
import getCookie from '@/helper/cookie/getCookie'

export default {
  components: { AppLayout },
  name: 'App',

  setup() {
    const store = useStore()
    let storeActions = [
      'fetchCategories',
      'fetchForums',
      'fetchPosts',
      'fetchUsers'
    ]

    onMounted(() => {
      if (document.cookie) {
        getCookie('user') && store.dispatch('addAuthUser', { user: JSON.parse(getCookie('user')) })
        if (getCookie('isLoggedIn')) store.dispatch('toggleLoggedIn', { isLoggedIn: getCookie('isLoggedIn') })
      }

      storeActions.forEach(action => {
        store.dispatch(action)
      })
    })
  }
}
</script>

<style>
@import url("./assets/style.css");
</style>
