// const s1 = "Hello"
// console.log(typeof s1);

// const s2 = new String("Hello");
// console.log(typeof s2);

// console.log(window);
// // alert(1);

// console.log(navigator.appVersion);

//object literals
const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2013",
    getsummary: function() {
        return `${this.title} was Written By ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: "Book two",
    author: "Jane Doe",
    year: "2016",
    getsummary: function() {
        return `${this.title} was Written By ${this.author} in ${this.year}`;
};
// console.log(book1);
// console.log(book1.author);
// console.log(book2.getsummary);
console.log(Object.values.book2);
console.log(Object.keys.book1);
