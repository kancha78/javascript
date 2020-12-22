// Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Instatiate an Object

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book two', 'Miky Tyson', '2016');

console.log(book1.title);

console.log(book2.getSummary());
