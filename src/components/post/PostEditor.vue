<template>
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
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup(_, context) {
        let newPost = ref("")

        let addPost = () => {
            const postId = "dhdhd" + Math.random();
            const post = {
                id: postId,
                publishedAt: Math.floor(Date.now() / 1000),
                text: newPost.value,
                userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
            };
            context.emit("save-post", { post, postId })
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