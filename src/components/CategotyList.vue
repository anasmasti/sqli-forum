<template>
    <ForumList v-for="category in categories" :key="category.id" :forums="getForumsForCategory(category)"
        :title="category.name" :categoryId="category.id"/>
</template>

<script>
import { useStore } from 'vuex'
import ForumList from './ForumList.vue'

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
        let { forums } = store.getters.getData

        let getForumsForCategory = (category) => {
            return forums.filter((forum) => forum.categoryId === category.id)
        }

        return {
            getForumsForCategory
        }
    }
}
</script>

<style>

</style>