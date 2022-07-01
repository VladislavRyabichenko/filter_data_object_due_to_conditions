import {check_occurrence} from "./check_occurrence.js";

// функция описывает объект как "неподходящий"
// если он содержит запашиваемые данные
export const exclude_filter = (data, condition_values) => {

    let filtered = data.filter((dataObj) => {
        let objCorresponds = check_occurrence(dataObj, condition_values)
        // если не содержит, то возвращаем в массив
        if (!objCorresponds) {
            return dataObj
        }
    })
    return filtered
}