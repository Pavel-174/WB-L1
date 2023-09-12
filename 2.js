// Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае. 
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

// 1. sum начинается с 1, и добавляем шаг +1
// 2. в цикле используем только половину от  числа
// 3. проверяем было ли уже добавлено число, потому что 5 * 14 меньше (70/2=) 35 и будет рассчитываться дважды (5+14, 14+5)

function isWeird(number) {
    let half = parseInt(number / 2) - 1,
        sum = 1,
        evenNumber = -1,
        addedNumbers = new Set();
    
    for (let divider = sum+1; divider < half; divider++) {
      evenNumber = parseInt(number/divider);
      
      if (!addedNumbers.has(divider) && number / divider == evenNumber) {
        sum += divider + evenNumber;
        addedNumbers.add(divider);
        addedNumbers.add(evenNumber);
      }
    }
    
    let isWeird = sum > number;
    
    return {number, sum, isWeird}; 
  }
  
  
  let value = 70;
  
  console.log(isWeird(value));
