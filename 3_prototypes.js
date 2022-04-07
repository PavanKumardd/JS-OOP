function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 
}
//PUTTING FUNCTION IN PROTOTYPE IS FOR USING THE GET SUMMARY
//FUNCTION NEEDED ONLY IN SOME BOOKS NOT IN EVERY BOOK
//IF WE PUT IN CONSTRUCTOR IT WILL TAKE FOR EVERY BOOK AND MIGHT LOAD MORE TIME
//GET SUMMARY
Book.prototype.getsummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//GET AGE OF BOOK
Book.prototype.getage = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}

//revise to change year
Book.prototype.revise = function(newyear) {
    this.year = newyear;
    this.revised = true;
}



//INSTANTIATE AN OBJECT
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Doe", "2016");

// console.log(book1.getsummary());
// console.log(book1.getage());
console.log(book1);
book1.revise(2019);
console.log(book1);