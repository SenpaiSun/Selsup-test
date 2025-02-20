# Тестовое задание для Selsup.
## Описание:
Данный проект позволяет изменять структуру входящих данных. В данном случае мы изменяем значения полей `value` у массива объектов `ParamValue`, проставляя эти значения в инпуты для дальнейшего редактирования. Используя кнопку "Сохранить и получить модель", в console выводится полная структура `paramValues`.
```
interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}
```

![image](https://github.com/user-attachments/assets/0a11fa49-eb5d-49e9-8fba-0637aecfbbde)



Запуск проекта:
1. Клонируйте репозиторий;
2. `npm i`
3. `npm start`
