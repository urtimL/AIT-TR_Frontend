const library = [];
let inputData = prompt('Enter book data separate by ";"');

while (inputData) {
    let arr = inputData.split(";");
    if (arr.length != 4) {
        console.log("Не верное количество элементов!");
        break;
    }

    library.push(new Book(arr[0], arr[1], arr[2], arr[3]));

    inputData = prompt('Enter book data separate by ";"');
}

function printLibrary(library) {
    library.forEach((element) => {
        console.log(element);
    });
}

printLibrary(library);

function findBook(library, isbn) {
    for (let index = 0; index < library.length; index++) {
        if (library[index].isbn == isbn) {
            return library[index];
        }       
    }
    console.log('Книга не найдена!');
    return undefined;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    };
}
