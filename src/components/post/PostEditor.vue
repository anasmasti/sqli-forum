<template>
    <div class="my-5">
        <form @submit.prevent="addPost">
            <textarea class="bg-gray-50 w-full border border-gray-300 p-2 rounded-lg" placeholder="Add new post" v-model="newPost" rows="10"></textarea>
            <AppButton text="Add Post" />
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    setup(_, context) {
        let store = useStore()
        let newPost = ref("")
        let user = store.getters.authUser;

        let addPost = () => {
            const post = {
                publishedAt: Math.floor(Date.now() / 1000),
                text: newPost.value,
                userId: user.uid,
            };
            context.emit("save-post", { post })
            newPost.value = "";
        }

        return {
            addPost,
            newPost
        }
    }
}
</script>

<style>

</style>