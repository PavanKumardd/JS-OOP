function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 
}
//GET SUMMARY
Book.prototype.getsummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//MAGAZINE CONSTRUCTOR
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;

}

//inheriate prototype
Magazine.prototype = Object.create(Book.prototype);

//INSTANTIATE MAGAZINE OBJECT
const mag1 = new Magazine("Mag one", "john doe", "2018","Jan");


//use magazine constructor
Magazine.prototype.constuctor = Magazine;

console.log(mag1.getsummary());
console.log(mag1);

