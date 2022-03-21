export const getRoundedNumber = (num: number) => {
    return num.toFixed(4)
}

export const getRoundedCourseChanges = (prev: number, val: number) => {
    const result = prev - val
    return (result >= 0) ? `+${result.toFixed(4)}` : result.toFixed(4)
}