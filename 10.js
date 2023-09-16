// Реализовать функцию конвертации строки в `JSON` со всеми необходимыми проверками и валидациями.

// 1. если передаваемое значени функция, символ или undefined, выводим сообщение о ошибке так как JSON не поддерживает эти типы данных
// 2. если значение строка, оборачиваем её в "", убираем пробелы  в начале и конце и возвращаем ее
// 3. если значение число, булиновое значение или null с помощью конструктора String, получаем строку и возвращаем её
// 4. если передан массив, перебираем его и для каждого элемента рекурсивно вызываем текущую функцию и возвращаем новую строку разделенных запятыми
// 5.  если передан объект, объявляем пустой массив, чтобы сложить в него каждую пару ключ-значение,  перебираем объект с помощью for in
//при каждой итерации добавляем в массив строку ключ оборачиваем в "" и а для значения рекурсивно вызываем данную функцию
// это позволит добраться до любой вложенности объектов. Возвращаем массив.

function convertToJSON(value) {
    if (typeof value === 'function' || typeof value === 'symbol' || typeof value === undefined)
      return 'incorrect data was transmitted'
  
    if (typeof value === 'string') {
      return `"${value.trim()}"`;
    }
  
    if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
      return String(value);
    }
  
    if (Array.isArray(value)) {
      return `[${value.map(item => convertToJSON(item)).join(',')}]`
    }
  
    if (typeof value === 'object') {
      const array = [];
  
      for (key in value) {
        array.push(`"${key}":${convertToJSON(value[key])}`)
      }
  
      return `{${array.join(',')}}`;
    }
  }
  
  console.log(convertToJSON( function() {console.log(32)} )) // => 'incorrect data was transmitted'
  console.log(convertToJSON('Hello world!')) // => "Hello world!"
  console.log(typeof convertToJSON('Hello world!')) // => string
  console.log(convertToJSON(55)) // => 55
  console.log(typeof convertToJSON(55)) // => string
  console.log(convertToJSON([12, 'Boom', { count: 63443 }])) // => [12,"Boom",{"count":63443}]
  console.log(typeof convertToJSON([12, 'Boom', { count: 63443 }])) // => string
  console.log(convertToJSON({ count: 63443, prop: { 12: 12.4 } })) // => {"count":63443,"prop":{"12":12.4}}
  console.log(typeof convertToJSON({ count: 63443, prop: { 12: 12.4 } })) // => string