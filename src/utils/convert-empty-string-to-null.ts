export const convertEmptyStringToNull = (data: object) => {
    const obj: any = { ...data }
    Object.keys(data).forEach((k) => {
        if (obj[k] === '') {
            obj[k] = null
        }
    })
    return obj
}
