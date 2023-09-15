// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, которая вызывает каждую функцию в 
// этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

// Массив синхронных функций
//1. возвращаем самовызывающуюся функцию, которая сработает сразу после вызова callAllFunc
// с помощью метода map перебираем каждый элемент массива, так как мы знаем, что внутри функция, сразу вызываем её
// и новый массив, с результатом выполнения каждой функции присваиевам в новую переменную

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
  
  const callAllFunc = (array) => {
    return function() {
      const result = array.map(func => func());
  
      return result;
    }();
  }
  
  console.log(callAllFunc(arrayFunc));
  
  //Массив асинхронных функций
  //1. дожидаемся ответа метода Promise.all, который вернет выполнится, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\после выполнения каждого из промисов в массиве, который вернёт метод map
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
        }, 300)
      })
    },
    funcB = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Hello! I'm Func C")
        }, 1000)
      })
    },
  ]
  
  const callAllAsyncFunc = (array) => {
    return async function() {
      const result = await Promise.all(array.map(func => func()));
  
      return result;
    }();
  }
  
  callAllAsyncFunc(arrayAsyncFunc).then(res => console.log(res));