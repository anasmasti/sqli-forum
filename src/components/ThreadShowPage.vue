<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPost" name="" id="" rows="10" class="form-input"></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit Post</button>
        </div>
      </form>
    </div>
  </div>

  <div v-else class="col-full text-center">There's No Thread</div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue';
import data from "../assets/data.json";
import PostList from "./PostList.vue";

export default {
  components: {
    PostList,
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
    let newPost = ref("")

    let thread = computed(() => {
      return threads.value.find((thread) => thread.id === props.id);

    })
    let threadPosts = computed(() => {
      return posts.value.filter((p) => p.threadId === props.id);
    })

    let addPost = () => {
      const postId = "dhdhd" + Math.random();
      const post = {
        id: postId,
        publishedAt: Math.floor(Date.now() / 1000),
        text: newPost.value,
        threadId: props.id,
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
      };
      posts.value.push(post);
      thread.value.posts.push(postId);
      newPost = "";
    }

    return {
      threads,
      posts,
      newPost,
      thread,
      threadPosts,
      addPost
    };
  }
};
</script>

<style lang="scss" scoped>

</style>