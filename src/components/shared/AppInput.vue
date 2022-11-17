<template>
    <input v-model="inputValue" @change="getInputValue"
        class="border border-gray-300 bg-gray-50 p-1 rounded-lg">

</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
    props: {
        isSent: Boolean
    },
    setup(props, context) {
        let inputValue = ref('')

        // Send input value event to the parent
        let getInputValue = () => {
            context.emit('inputValue', inputValue.value)
        }

        // Observe props to empty inputs after sending data
        watchEffect((props.isSent, () => {
            if (props.isSent) {
                inputValue.value = ""
            }
        }))

        return {
            inputValue,
            getInputValue
        }
    }
}
</script>

<style>

</style>