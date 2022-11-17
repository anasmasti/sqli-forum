<template>
	<MainHeader />
	<div class="p-9">
		<slot></slot>
	</div>
	<MainFooter />
</template>
  
<script>
import MainHeader from '@/components/layout/header/MainHeader.vue';
import MainFooter from '@/components/layout/footer/MainFooter.vue';


export default {
	components: { MainHeader, MainFooter },

};
</script>
  
<style lang="scss" scoped>

</style>