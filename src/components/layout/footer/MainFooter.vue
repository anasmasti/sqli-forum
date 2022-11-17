<template>
    <footer class="flex justify-center">
        <AppLogo />
        <span class="ml-1">&copy; {{ currentYear }}</span>
    </footer>
</template>
  
<script setup>
let currentYear = new Date().getFullYear()
</script>
  
<style>

</style>