<template>
  <div class="p-8" v-if="thread">
    <h1 class="capitalize text-3xl mb-5 font-black text-blue-500" v-text="thread.title"></h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save-post="savePost" />
  </div>

  <div v-else class="col-full text-center">There's No Thread</div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import PostList from "@/components/post/PostList.vue";
import PostEditor from '@/components/post/PostEditor.vue';
import firebase from "firebase/compat/app";
import router from '@/router';

export default {
  components: {
    PostList,
    PostEditor,
  },
  props: {
    id: {
      type: String
    },
  },
  setup(props) {
    let store = useStore()
    let threadPosts = store.getters.getPostsByThread(props.id)
    let thread = reactive({})


    onMounted(() => {
      let threadsRef = firebase.firestore().collection("/threads");

      threadsRef.doc(props.id).get().then((snapshot) => {
        Object.assign(thread, snapshot.data())
      })
    })

    let savePost = ({ post }) => {
      post.threadId = props.id
      store.dispatch('addPost', post)
      router.push('/')
    }

    return {
      thread,
      savePost,
      threadPosts
    };
  }
};
</script>

<style lang="scss" scoped>

</style>