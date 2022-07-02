
Входящие параметры:
JSON объект со списком данных (data), и условием для обработки (condition):

{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}],
"condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}

Выходные данные:
JSON объект с данными полученными после применения условия обработки (result):
{"result": [{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "mike@mail.com", "rating": 20, "disabled": false}]}
