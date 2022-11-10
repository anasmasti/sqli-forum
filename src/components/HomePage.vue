<template>
	<CategotyList :categories="categories" />
	<!-- <ThreadListPage :threads="threads" /> -->
</template>

<script>
import { useStore } from 'vuex';
import CategotyList from './CategotyList.vue'

export default {
	components: { CategotyList },
	setup() {
		let store = useStore()
		let { categories } = store.getters.getData;

		return {
			categories
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
