<template>
    <div v-for="post in posts" :key="post.uid" class="bg-gray-50 mt-2 p-4 rounded-xl flex justify-between">
        <div class="post-content">
            <p v-text="post.text" class="capitalize text-lg font-black"></p>
            <AppTimeStamps :timestamps="post.publishedAt" />
        </div>
        <div>
            <img class="w-7" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user avatar" />
            <div>
                <p class="text-sm">
                    By
                    <span class="text-blue-500 capitalize">
                        {{ userById(post?.userId)?.name ? userById(post?.userId)?.name : '--' }}
                    </span>
                </p>
                <AppTimeStamps :timestamps='post.publishedAt' />
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