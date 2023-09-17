// Задача на работу с объектами: создайте объект, представляющий собой книгу. Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

const book = {
    title: 'Fifty Shades',
    author: 'E. L. James',
  
    setTitle: function(title) {
      if (title.length < 3) {
        alert('the title is too short');
        return
      };
      this.title = title;
    },
    setAuthor: function(author) {
      this.author = author;
    },
    set published(value) {
      if (typeof value !== "number") {
        alert('pass the number');
        return
      };
  
      this._published = value;
    },
    get published() {
      return this._published;
    },
  
    getAllData: function() {
      return `${this.title}, ${this.author}, ${this._published}`;
    },
  }
  
  console.log(book.getAllData());

  book.published = 2012
  console.log(book.published);
  
  book.setTitle('Fifty Shades of Grey');
  
  console.log(book.getAllData()); 