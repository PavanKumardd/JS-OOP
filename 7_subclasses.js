class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getsummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}

//MAGAZINE SUBCLASS
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;

    }
}

//INSTANTIATE
const mag1 = new Magazine("Mag one","John Doe","2018", "aug");
console.log(mag1);
console.log(mag1.getsummary());

