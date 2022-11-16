<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
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
    let threadPosts = store.getters.getPosts
    let thread = reactive({})


    onMounted(() => {
      let threadsRef = firebase.firestore().collection("/threads");

      threadsRef.doc(props.id).get().then((snapshot) => {
        console.log(snapshot.data());
        Object.assign(thread, snapshot.data())
      })
    })

    let savePost = ({ post }) => {
      post.threadId = props.id
      store.dispatch('addPost', post)
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