<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save-post="savePost" />
  </div>

  <div v-else class="col-full text-center">There's No Thread</div>
</template>

<script>
import { computed } from 'vue';
import PostList from "./PostList.vue";
import PostEditor from './PostEditor.vue';
import { useStore } from 'vuex';

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
    let { threads, posts } = store.getters.getData;

    let thread = computed(() => {
      return threads.find((thread) => thread.id === props.id);

    })
    let threadPosts = computed(() => {
      return posts.filter((p) => p.threadId === props.id);
    })

    let savePost = ({ post }) => {
      post.threadId = props.id
      store.dispatch('addPost', post)
    }

    return {
      threads,
      posts,
      thread,
      threadPosts,
      savePost
    };
  }
};
</script>

<style lang="scss" scoped>

</style>