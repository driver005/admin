import moment from 'moment'

export const dateToUnixTimestamp = (date: Date) => {
    if (date instanceof Date) {
        return (date.getTime() / 1000).toFixed(0)
    }
    return null
}

export const atMidnight = (date: moment.MomentInput) => {
    const result = moment(date)
    if (!moment.isMoment(result)) {
        console.log('date is not instance of Moment: ', date)
        return null
    }
    result.hour(0)
    result.minute(0)
    result.second(0)
    result.millisecond(0)

    return result
}

export const addHours = (
    date: moment.MomentInput,
    hours: moment.DurationInputArg1
) => {
    return moment(date)?.add(hours, 'hours')
}

/**
 * The format is: [gt]=number|option
 * e.g: [gt]=2|days
 * @param {*} value
 */

export const relativeDateFormatToTimestamp = (value: string) => {
    const [count, option]: any = value.split('|')

    // relative days are always subtract
    let date: any = moment()

    date.subtract(parseInt(count), option)
    date = atMidnight(date)

    const result = `${date.format('X')}`

    return result
}

// Takes in a value from the date picker e.g. 42|days or a timestamp
export const formatDateFilter = (filter: object) => {
    return Object.entries(filter).reduce((acc: any, [key, value]: any) => {
        if (value.includes('|')) {
            acc[key] = relativeDateFormatToTimestamp(value)
        } else {
            acc[key] = value
        }
        return acc
    }, {})
}
