
export const sort_by = (data, criteria) => {
    return  data.sort(compare(criteria))
}

// условие сортировки по заданому критерию
const compare = ([criteria]) => {
    return (x,y) => {
        if (x[criteria] < y[criteria]) { return -1 }
        if (x[criteria] > y[criteria]) { return  1 }

        return 0
    }
}
