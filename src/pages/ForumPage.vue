<template>
    <ForumList :forums="forums" />
</template>

<script>
import { useStore } from 'vuex';
import ForumList from '@/components/forum/ForumList.vue'

export default {
    components: { ForumList },
    setup() {
        let store = useStore()
        let  forums  = store.getters.getForums;

        return {
            forums
        }
    }
}
</script>

<style>

</style>