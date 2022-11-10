<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save-post="savePost" />
  </div>

  <div v-else class="col-full text-center">There's No Thread</div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import data from "../assets/data.json";
import PostList from "./PostList.vue";
import PostEditor from './PostEditor.vue';

export default {
  components: {
    PostList,
    PostEditor,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let dataSource = reactive(data)
    let { threads, posts } = toRefs(dataSource)

    let thread = computed(() => {
      return threads.value.find((thread) => thread.id === props.id);

    })
    let threadPosts = computed(() => {
      return posts.value.filter((p) => p.threadId === props.id);
    })

    let savePost = ({ post, postId }) => {
      post.threadId = props.id
      posts.value.push(post);
      thread.value.posts.push(postId);
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