<template>
    <div>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="w-28" alt="Profile">

        <h1 v-text="user.name" class="capitalize text-3xl font-black"></h1>
        <p class="text-justify" v-text="user.email"></p>
    </div>
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