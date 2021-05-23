const DATA = [{
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
        'price2': '3330000',
        // 'value': '39999',
        'color': 'red',
        // 'color': 'green',
    },

];
const TABLE_ELEM = document.getElementById('data-table');

function tableFromJson(json, table) {
    const ALL_HEADERS = keysToHeadersArr(json);
    // Функция получения уникальных ключей из массива объектов (МАССИВ)
    function keysToHeadersArr(arr) {
        let headers = []; // Создаем массив
        for (let i = 0; i < arr.length; i++) { // Итерируем по массиву
            for (let key in arr[i]) { // Итерируем по объектам внутри массива
                if (!headers.includes(key)) { // Проверка на наличие подобного ключа в headers
                    headers.push(key); // Добавляем ключ в headers
                };
            };
        };
        return headers;
    };
    // Создание массивов с данными из объекта
    function valuesToDataArr(dataObj, headersArr) {
        let arr = []; // Создаем массив
        let newArr = new Array(headersArr.length); // Создаем новый массив с длинной как у headersArr
        for (let key in dataObj) { // Итерируем по свойствам в объекте
            let i = headersArr.indexOf(key); // Записываем в переменную index ключа в массиве headersArr
            newArr[i] = dataObj[key]; // Создаем значение ключа в массиве newArr с index как в массиве headersArr
            arr = newArr;
        };
        return arr;
    };
    // Генерируем <tbody>
    function genTableBody(table, headersArr, data) {
        for (let element of data) {
            let row = table.insertRow(); // Создаем строку
            let arr = valuesToDataArr(element, headersArr);
            for (let i = 0; i < arr.length; i++) {
                let cell = row.insertCell(); // Создаем ячейку
                if (arr[i]) { // Проверка на наличие значения в массиве
                    let text = document.createTextNode(arr[i]);
                    cell.appendChild(text);
                } else {
                    let text = document.createTextNode('—');
                    cell.appendChild(text);
                };
            };
        };
    };
    // Генерируем <thead>
    function genTableHead(table, headers) {
        let thead = table.createTHead(); // Создаем <thead>
        let row = thead.insertRow(); // Вставляем туда <tr>
        for (let header of headers) {
            let th = document.createElement("th"); // Создаем <th>
            let text = document.createTextNode(header); // Создаем текст из header
            th.appendChild(text); // Добавляем этот текст в <th>
            row.appendChild(th); // Добавляем <th> в <tr>
        };
    };
    genTableBody(table, ALL_HEADERS, json);
    genTableHead(table, ALL_HEADERS);
};
tableFromJson(DATA, TABLE_ELEM);



