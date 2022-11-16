<template>
  <div class="col-full">
    <div>
      <div>
        <h1 v-text="forum.name"></h1>
        <p v-text="forum.description"></p>
      </div>

      <form @submit.prevent="postThtread">
        <input type="text" v-model="threadTitle">
        <button type="submit">New Thread</button>
      </form>

    </div>
    <div>
      <ThreadList :threads="threadsByForum" />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import ThreadList from '@/components/thread/ThreadList.vue'
import { useStore } from 'vuex';
import firebase from "firebase/compat/app";
import { onMounted } from '@vue/runtime-core';

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
    let threadsByForum = reactive([])

    store.watch((_, getters) => {
      Object.assign(forum, getters.getForumById(props.id))
    })

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

    onMounted(async () => {
      let threadsRef = firebase.firestore().collection("/threads");

      await threadsRef.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          threadsByForum.push({
            uid: doc.id,
            ...doc.data(),
          });
          });
          console.log(threadsByForum);
        });
    
      })

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