<template>
    {{ category().name }}
    <ForumList :title="category().name" :forums="getForumsForCategory()" />
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
        let { forums, categories } = store.getters.getData

        let category = () => {
            return categories.find((c) => c.uid === props.id)
        }

        let getForumsForCategory = () => {
            return forums.filter((forum) => forum.categoryId === props.id)
        }

        return {
            category,
            getForumsForCategory
        }
    }
}
</script>

<style>

</style>