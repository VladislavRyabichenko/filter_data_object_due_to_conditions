
export const DATA_WITH_CONDITIONS = {
    "data" : [
        {"name" : "John", "email" : "john2@mail.com", "rating" : 1},
        {"name" : "John", "email" : "john1@mail.com", "rating" : 2},
        {"name" : "Jane", "email" : "jane@mail.com", "rating" : 3},
        {"name" : "Filmore", "email" : "filmore@mail.com", "rating" : 4},
        {"name" : "Dan", "email" : "dan@mail.com", "rating" : 5,"test": true},
        {"name" : "Bob", "email" : "bob@mail.com","rating" : 6, "test": false},
    ],
    "condition" : {
        "include" : [{"name" : "John"}, {"name": "Bob"}, {"name": "Jane"},{"test":true}],
        "exclude" : [{"test" : false},{"name" : "John"}],
        "sort_by" : ["rating"]
    }
}

