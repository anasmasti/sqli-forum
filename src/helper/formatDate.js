import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

export function diffDate(timestaps) {
    return dayjs.unix(timestaps).fromNow()
}

export function exactDate(timestaps) {
    return dayjs.unix(timestaps).format('llll')
}