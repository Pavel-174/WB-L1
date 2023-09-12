// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра »).


// Для решения задачи необходимо:

// 1. Привести все буквы к нижнему регистру. 
// 2. Сравнивать символы строки сначала и с конца строки на равном удалении по циклу.
// 3. При любом несовпадении (ошибке) - выходим из цикла (строка - не палиндром), иначе - это палиндром.

function palindromeChecker(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}

function palindromeChecker2(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const halfOfLength = Math.floor(str.length / 2);
    return str.substr(0, Math.floor(halfOfLength)) === str.substr(Math.floor(str.length % 2 ? halfOfLength + 1 : halfOfLength)).split('').reverse().join('')
}