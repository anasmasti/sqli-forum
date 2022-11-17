<template>
    <img :class="size ? `w-${size}` : 'w-7'" src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
        alt="user avatar" />
</template>

<script>
export default {
    props: {
        size: String
    }
}
</script>

<style>

</style>