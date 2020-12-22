// // OBJECT LITERAL

const book1 = {
  title: 'Book One',
  author: 'Kamran Muhammad',
  year: 2019,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());

const book2 = {
  tittle: 'Book two',
  author: 'Mike tyson',
  year: '2018',
  getSummary: function () {
    return `${this.tittle} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2.getSummary());
console.log(Object.values(book2)); // return: Values of the Object Literal
console.log(Object.keys(book2)); //return: keys of the Object Literal
