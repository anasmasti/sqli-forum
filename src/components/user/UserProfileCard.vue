<template>
    <section>
        <AppUserAvatar size="28" />
        <h1 v-text="user.name" class="capitalize text-3xl font-black"></h1>
        <p class="text-justify" v-text="user.email"></p>
   </section>
</template>

<script>
export default {
    props: {
        user: Object
    }
}
</script>

<style>

</style>