<template>
    <div class="post-date text-faded0" :title="exactDate(timestamps)">
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