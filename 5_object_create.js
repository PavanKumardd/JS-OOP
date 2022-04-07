//Object of protos
const bookprotos = {
    getsummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getage: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
};

// create object
// const book1 = Object.create(bookprots);
// book1.title = "Book one";
// book1.author = "John Doe";
// book1.year = "2013";

const book1 = Object.create(bookprotos, {
    title: {value: "Book one"},
    author: {value: "John Doe"},
    year: {value: "2013"}
});
console.log(book1);
    