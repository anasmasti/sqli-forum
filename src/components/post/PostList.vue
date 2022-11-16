<template>
    <div v-for="post in posts" :key="post.uid" class="bg-gray-50 mt-2 p-4 rounded-xl flex justify-between">
        <div class="post-content">
            <p v-text="post.text" class="capitalize text-lg font-black"></p>
            <AppTimeStamps :timestamps="post.publishedAt" />
        </div>
        <div class="flex flex-col-reverse">
            <span class="text-sm">
                {{ userById(thread.userId)?.name ? userById(thread.userId)?.name : '--' }}
            </span>
            <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="w-7" alt="user avatar" />
            </a>
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