
import { check_occurrence } from "./check_occurrence.js";


export const include_filter = (data, condition_values) => {
    let filtered = data.filter((dataObj) => {
        let objCorresponds = check_occurrence(dataObj, condition_values)
        // если в объекте присутствуют запрашиваемые данные то возвращаем объект
        if (objCorresponds) {
            return dataObj
        }
    })
    return filtered
}

