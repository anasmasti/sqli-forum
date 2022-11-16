<template>
  <section class="p-8">
    <div>
      <h1 v-text="forum.name" class="text-3xl font-black"></h1>
      <p v-text="forum.description" class="text-xl"></p>
    </div>

    <form @submit.prevent="postThtread" class="flex gap-2 my-5">
      <input type="text" class="border border-gray-500 bg-gray-50 p-1 rounded-lg" v-model="threadTitle">
      <AppButton text="Add Post" />
    </form>

    <ThreadList :threads="threadsByForum" />
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';
import ThreadList from '@/components/thread/ThreadList.vue'
import { useStore } from 'vuex';
import firebase from "firebase/compat/app";

export default {
  props: {
    id: String
  },
  components: { ThreadList },
  setup(props) {
    let store = useStore()
    let forum = store.getters.getForumById(props.id);
    let user = store.getters.authUser;
    let threadTitle = ref('')
    let threadsByForum = store.getters.getThreadsByForum(props.id)

    let postThtread = () => {
      let forumsRef = firebase.firestore().collection("/forums");
      let threadsRef = firebase.firestore().collection("/threads");

      let thread = {
        forumId: forum.uid,
        lastPostAt: Math.floor(new Date().getTime() / 1000),
        posts: [],
        publishedAt: Math.floor(new Date().getTime() / 1000),
        title: threadTitle.value,
        userId: user.uid,
      }

      threadsRef.add(thread).then((sendedThread) => {
        forumsRef.doc(forum.uid).update({
          threads: [sendedThread.uid]
        })
      })
    }

    return {
      forum,
      threadTitle,
      postThtread,
      threadsByForum
    }
  }
}
</script>

<style>

</style>