<template>
    <ForumList v-for="category in categories" :key="category.uid" :title="category.name" :categoryId="category.uid"
        :forums="forums(category.uid)" />
</template>

<script>
import { useStore } from 'vuex';
import ForumList from "../forum/ForumList.vue";

export default {
    components: { ForumList },
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    setup() {
        let store = useStore()
        let forums = store.getters.getForumsByCategory

        return {
            forums
        }
    }
}
</script>

<style>

</style>