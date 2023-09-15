// Реализовать функцию конвертации `JSON` в строку 

//Как я понял необходимо указать метод который возвращает JavaScript-значение, преобразованное в JSON-строку. Не понял это задание.

// 1. value - Значение, преобразуемое в строку JSON.
// 2. replacer (необязательно) Если является функцией, преобразует значения и свойства по ходу их преобразования в строку; если является массивом, определяет набор свойств, включаемых в объект в окончательной строке. 
// 3. space (необязательно) Делает результат красиво отформатированным (расставляя пробелы).

//CСинтаксис:
// JSON.stringify(value[, replacer[, space]])

// Примеры:

JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

// Символы:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "символ";
  }
});
// '{}'