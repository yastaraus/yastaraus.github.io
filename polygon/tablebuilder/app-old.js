/*
    1. При разрозненных данных из массива объектов:
        - Пропускает заголовки столбиков;
        - Смещает некоторые значения под другие столбики;
    (Закомментируй выборочно ключи в объектах, что бы увидеть)

    Сравнивать ключи с хедером

    To do:
    Нужна проверка на json 
*/

const DATA = [
    {
        'model': 'test-1',
        'year': '1991',
        // 'price': '1000000',
        'value': '19999',
        'engine': '1.6',
        // 'engine': '1.66',
    },
    { 
        'model': 'test-2',
        //'year': '1992',
        'price': '2000000',
        'value': '29999',
    },
    {
        'model': 'test-3',
        // 'year': '1993',
        'price': '3000000',
        // 'value': '39999',
        'color': 'red',
    },
    
];

const TABLE_ELEM = document.getElementById('data-table');

// Функция получения уникальных props из массива объектов (ОБЪЕКТ)
function getUniqHeaders(arr) {
    let unUniqHeaders = []; // Массив неуникальных props
    for (let i = 0; i < arr.length; i++) {
            let currObjProps = Object.getOwnPropertyNames(arr[i]); // Переменная с названиями props текущего цикла
            unUniqHeaders = unUniqHeaders.concat(currObjProps); // Конкатинируем эти props с массивом
    };
    return new Set(unUniqHeaders); // Возвращаем только уникальные props
};

// Считаем максимальное число ключей в массиве объектов
function headersCount(arr) {
    let maxKeys = 0;
    let objMaxKeys = 0;
    for (let i = 0; i < arr.length; i++) {
        let objLength = Object.keys(arr[i]).length;
        if (objLength > maxKeys) {
            maxKeys = objLength;
            objMaxKeys = i;
        };
    };
    return objMaxKeys;
};

// Собираем <thead>
function generateTableHead(table, headers) {
    let thead = table.createTHead(); // Создаем <thead>
    let row = thead.insertRow(); // Вставляем туда <tr>
    for (let key of headers) {
        let th = document.createElement("th"); // Создаем <th>
        let text = document.createTextNode(key); // Создаем текст из ключей объекта
        th.appendChild(text); // Добавляем этот текст в <th>
        row.appendChild(th); // Добавляем <th> в <tr>
    };
};

// Собираем <tbody>
function generateTableBody(table, data) {
    for (let element of data) {
        let row = table.insertRow(); // Создаем строку
        for (key in element) {
            let cell = row.insertCell(); // Создаем ячейку
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        };
    };
};

// Собираем всю таблицу
const HEADERS = getUniqHeaders(DATA);
function generateFullTable(table, data, headers) {
    // Проверка на пустой массив
    if (DATA.length > 0) {
        generateTableBody(table, data);
        generateTableHead(table, headers);
    } else {
        // console.log('Массив объектов пустой!');
        alert('Массив объектов пустой!');
    };
};





























// // generateFullTable(TABLE_ELEM, DATA, HEADERS);

// // let x = Object.keys(DATA[0]);
// // console.log(x);

// // DATA[0].forEach(element => {
// //     console.log(element.key, element.value);
// // });

// let testObj = DATA[0];

// // for (key in testObj) {
// //     // console.log(key, key.value);
// //     // console.log(Object.entries(testObj));
// //     console.log(Object.keys(testObj));
// //     console.log(Object.values(testObj));
// // }


// // const obj = {
// //     width: 300,
// //     height: 200,
// //     title: "Menu"
// //   }
  
// //   for (let key in obj) {
// //     if(obj.hasOwnProperty(key)){
// //       console.log(`${key} : ${obj[key]}`)
// //     }
// //   }


// function testFunc(obj, table) {
//     let thead = table.createTHead(); // Создаем <thead>
//     let row = thead.insertRow(); // Вставляем туда <tr>
//     let checkArr = [];

//     for (let key in obj) {

//         if (checkArr.includes(key) === false) {

//             checkArr.push(key);
//             // console.log(checkArr);
//             let th = document.createElement("th"); // Создаем <th>
//             let text = document.createTextNode(key); // Создаем текст из ключей объекта
//             th.appendChild(text); // Добавляем этот текст в <th>
//             row.appendChild(th); // Добавляем <th> в <tr>

//         } else {

//             console.log('Не так!!!');

//         };
//     };
// };

// testFunc(testObj, TABLE_ELEM);
