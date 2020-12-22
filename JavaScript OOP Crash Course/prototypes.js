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

// getAge of Book
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// revise / change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instatiate an Object

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book two', 'Miky Tyson', '2016');

console.log(book1.title);

console.log(book2.getSummary());
console.log(book1.getAge());

//revise - change year
console.log(book1);
book1.revise('2019');
console.log(book1); // now revised year 2019
