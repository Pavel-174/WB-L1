// Разработайте функцию преобразования `JSON` в связный список. На входе функция должна получать `JSON`,
// содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

// 1. Преобразуем объект в JSON
// 2. Записываем в консткутор две ссылки 
// 3. Добавляетv в конец объекта ссылку на новый элемент
// 4. Если head или tail нет, добавляем первый элемент
//      если элементы в списке есть изменяем значение свойства объекта в tail (у последней ноды) на новый элемент, вместо null
//      a у нового элемента next уже смотрит на null
//      записываем в ссылку tail новый узел
// 5.  Возращаем head объекта со всеми вложенными данными
// 6.  Конвертируем JSON в связный список


const array = [
    { name: 'John', age: 25, },
    { name: 'Brian', age: 19, },
    { name: 'Eva', age: 27, },
    { name: 'Sara', age: 19, },
    { name: 'Alex', age: 19, },
    { name: 'Ethan', age: 19, },
    { name: 'Derek', age: 41, },
  ];
  
  
  const json = JSON.stringify(array);

    class LinkedList {
      // 
      constructor() {
        this.head = null;
        this.tail = null;
      }
  
      append = (value) => {
        const newNode = {
          value: value,
          next: null,
        };
  
        
        if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;
  
          return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
      }

      getList = () => {
        return this.head;
      }
    }
  
    const convertJsonToLinkedList = (json) => {
      const list = JSON.parse(json);
      const linkedList = new LinkedList();
  
      if (!(Array.isArray(list) && list.length > 0)) return 'not an array was passed or the array is empty'
      list.forEach(obj => linkedList.append(obj));
      return linkedList.getList();
    }
  
    console.log(convertJsonToLinkedList(json));
    