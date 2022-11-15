<template>
	<CategotyList :categories="categories" />
</template>

<script>
import { useStore } from 'vuex';
import CategotyList from '@/components/category/CategotyList.vue'

export default {
	components: { CategotyList },

	setup() {
		let store = useStore()
		let categories = store.getters.getCategories;

		return {
			categories
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
