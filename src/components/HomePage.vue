<template>
	<ThreadListPage :threads="threads" />
</template>

<script>
import { reactive, toRefs } from 'vue';
import data from "../assets/data.json";
import ThreadListPage from './ThreadListPage.vue'

export default {
	components: { ThreadListPage },
	setup() {
		let dataSource = reactive(data)
		let { threads } = toRefs(dataSource)

		return {
			threads
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
