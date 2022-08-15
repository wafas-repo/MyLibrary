let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

document.addEventListener('DOMContentLoaded', () => {

    let dummy_book = {
        'title': 'Harry Potter and the Goblet of Fire',
        'author': 'J.K.Rowling',
        'number_of_pages': 264,
    }

    myLibrary.push(dummy_book)
    console.log(myLibrary)
    
});