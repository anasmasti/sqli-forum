<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
            <div class="user-info">
                <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
                <a href="#">
                    <img :src="userById(post.userId).avatar" class="avatar-large" alt="user avatar" />
                    <p class="desktop-only text-small">100 posts</p>
                </a>
            </div>
            <div class="post-content">
                <div>
                    <p>
                        {{ post.text }}
                    </p>
                </div>
                <AppTimeStamps :timestamps="post.publishedAt" />
            </div>
        </div>
    </div>
</template>
  
<script>
import dataSource from "../assets/data.json";

export default {
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            threads: dataSource.threads,
            //   posts: dataSource.posts,
            users: dataSource.users,
        };
    },
    methods: {
        postbyId(postId) {
            return this.posts.find((p) => p.id === postId);
        },
        userById(userId) {
            return this.users.find((u) => u.id === userId);
        },

    },
};
</script>
  
<style lang="scss" scoped>

</style>