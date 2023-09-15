// Задача о сортировке объектов: у вас есть массив объектов вида `{ name: 'John', age: 25 }`.
// Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.

// 1. Сортируем массив методом sort по возрасту
// 2. Сортируем массив методом sort по алфавиту (только строки с одинаковыми значениями возраста возраста)


const arrayExample = [
    { name: 'John', age: 25, },
    { name: 'Brian', age: 19, },
    { name: 'Eva', age: 27, },
    { name: 'Sara', age: 19, },
    { name: 'Alex', age: 19, },
    { name: 'Ethan', age: 19, },
    { name: 'Derek', age: 41, },
    { name: 'Alex', age: 19, },
  ];
  
  const sortArrayByAge = (arr) => {
    const arrayByAge = arr.sort((a, b) => {
      return (b.age < a.age) - (a.age < b.age);
    })
  
    const arrayByName = arrayByAge.sort((a, b) => {

      if (a.age === b.age) {
        return (b.name < a.name) - (a.name < b.name)
      }
    })
  
    return arrayByName;
  }
  
  console.log(sortArrayByAge(arrayExample));