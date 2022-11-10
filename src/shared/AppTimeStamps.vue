<template>
    <div class="post-date text-faded0" :title="exactDate(timestamps)">
        {{ diffDate(timestamps) }}
    </div>
</template>

<script>
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

export default {
    props: {
        timestamps: Number
    },
    setup() {
        let diffDate = (timestaps) => {
            return dayjs.unix(timestaps).fromNow()
        }

        let exactDate = (timestaps) => {
            return dayjs.unix(timestaps).format('llll')
        }

        return {
            diffDate,
            exactDate
        }
    }
}
</script>

<style>

</style>