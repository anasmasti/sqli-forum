<template>
    <button type="submit" class="rounded-lg bg-blue-500 p-1 font-bold text-white px-2 hover:bg-gray-600 capitalize" v-text="text"></button>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style>

</style>