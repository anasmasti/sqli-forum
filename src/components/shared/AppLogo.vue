<template>
    <p :class="`self-center ${size} whitespace-nowrap ${color}`">
        <span class="logo">SQLI</span> <span class="font-light">Forum</span> 
    </p>
</template>

<script>
export default {
    props: {
        size: String,
        color: String
    }
}
</script>

<style>

</style>