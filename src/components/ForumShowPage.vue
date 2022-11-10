<template>
  <div class="col-full">
    <div>
      <div>
        <h1 v-text="forum.name"></h1>
        <p v-text="forum.description"></p>
      </div>
      <a href="">
        New Thread
      </a>


    </div>
    <div>
      <ThreadListPage :threads="threadsList" />
    </div>
  </div>
</template>

<script>
import ThreadListPage from './ThreadListPage.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { ThreadListPage },
  setup(props) {
    let store = useStore()
    let { forums, threads } = store.getters.getData;

    let forum = () => {
      return forums.find((f) => f.id === props.id);
    }

    let threadsList = computed(() => {
      return threads.filter((t) => t.threadId === props.id);
    })

    return {
      forum,
      threadsList
    }
  }
}
</script>

<style>

</style>