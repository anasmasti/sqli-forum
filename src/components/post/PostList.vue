<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.uid" class="post">
            <div class="user-info">
                <a href="#" class="user-name">{{ userById(post.userId)?.name }}</a>
                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="avatar-large" alt="user avatar" />
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
import { useStore } from 'vuex';
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    setup() {
        let store = useStore()
        let userById = store.getters.getUserById

        return {
            userById
        }
    }
};
</script>
  
<style lang="scss" scoped>

</style>