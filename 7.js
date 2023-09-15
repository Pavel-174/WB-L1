// Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер.
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.

// Массив синхронных функций
// 1. Перебераем массив методом forEach, с использованием двух его параметров func - текущий элемент и index порядковый номер элемента
// добавляем 1 к элементу, например если номер показываем для пользователя (чтобы начинался с 1)

const arrayFunc = [
    funcA = () => {
      return "Hello! I'm Func A";
    },
    funcB = () => {
      return "Hello! I'm Func B";
    },
    funcB = () => {
      return "Hello! I'm Func C";
    },
  ]

  arrayFunc.forEach((func, index) => {
    console.log(func(), `index: ${index + 1}`);
  })

// Массив асинхронных функций
// 1. Обращаемся к элементу массива, в соответствии с текущим индексом цикла
// Так как мы знаем, что это функция, сразу вызываем её. await остановит интерпритатор javaScript до момента выполнения промиса справа

  const arrayAsyncFunc = [
    funcA = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Hello! I'm Func A")
        }, 2000)
      })
    },
    funcB = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Hello! I'm Func B")
        }, 600)
      })
    },
    funcB = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Hello! I'm Func C")
        }, 1400)
      })
    },
  ];

  const callAllAsyncFunc = async (array) => {
    for (let i = 0; i < array.length; i++) {
      const result = await arrayAsyncFunc[i]();

      console.log(result, `index: ${i}`)
    }
  }

  callAllAsyncFunc(arrayAsyncFunc);