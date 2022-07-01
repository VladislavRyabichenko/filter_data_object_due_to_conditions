
// функция проверяет присутствие запрошеной пары "ключ:значение" в объекте
// например ("name" : "John")
export const check_occurrence = (obj, values) => {
    let corresponds
    corresponds = values.some((condition) => {
        const key = Object.keys(condition)
        const value = condition[key]
        return obj[key] === value
    })
    return corresponds
}