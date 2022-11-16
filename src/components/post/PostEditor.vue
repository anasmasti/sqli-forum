<template>
    <div class="col-full">
        <form @submit.prevent="addPost">
            <div class="form-group">
                <textarea v-model="newPost" rows="10" class="form-input"></textarea>
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit Post</button>
            </div>
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