<template>
    <div class="text-xs text-gray-500" :title="exactDate(timestamps)">
        {{ diffDate(timestamps) }}
    </div>
</template>

<script>
import {
    diffDate,
    exactDate
} from '@/helper/formatDate'

export default {
    props: {
        timestamps: Number
    },
    setup() {
        return {
            diffDate,
            exactDate
        }
    }
}
</script>

<style>

</style>