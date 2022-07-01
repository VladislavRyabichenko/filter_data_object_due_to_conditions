
import { DATA_WITH_CONDITIONS } from "./constants/data.js";

import { include_filter } from "./JS/helpers/include_filter.js";
import { exclude_filter } from "./JS/helpers/exclude_filter.js";
import { sort_by } from "./JS/helpers/sort_function.js";


//  На основании условий проводит фильтрацию и сортировку данных
const process = (dataAndCondition) => {
    const data = dataAndCondition['data']
    const condition = dataAndCondition['condition']

    let processedData = data

    if ('include' in condition) {
        processedData = include_filter(processedData, condition["include"])
    }
    if ('exclude' in condition) {
        processedData = exclude_filter(processedData, condition["exclude"])
    }
    if ('sort_by' in condition) {
        processedData = sort_by(processedData, condition["sort_by"])
    }

    return {
        "result" : processedData
    }

}

console.log("Data", DATA_WITH_CONDITIONS.data)
console.log("_________________________________")
console.log("Conditions", DATA_WITH_CONDITIONS.condition)
console.log("_________________________________")
const result = process(DATA_WITH_CONDITIONS)
console.log("result", result)