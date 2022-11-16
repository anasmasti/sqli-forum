<template>
    <ForumList :title="category.name" :forums="forumsByCategory(category.uid)" :categoryId="category.uid" />
</template>

<script>
import ForumList from '@/components/forum/ForumList.vue'
import { useStore } from 'vuex'

export default {
    components: { ForumList },
    props: {
        id: {
            type: String
        }
    },

    setup(props) {
        let store = useStore()
        let category = store.getters.getCategoryById(props.id)
        let forumsByCategory = store.getters.getForumsByCategory

        return {
            category,
            forumsByCategory
        }
    }
}
</script>

<style>

</style>