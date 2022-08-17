let myLibrary = [];

function Book(title, author, num_pages) {

    this.title = title
    this.author = author
    this.num_pages = num_pages

}

function addBookToLibrary() {
   title =  'Harry Potter and the Goblet of fire'
   author = 'J.K.Rowling'
   num_pages = 264

   title2 =  'Harry Potter and the prisoner of Azkaban'
   author2 = 'J.K.Rowling'
   num_pages2 = 366

   const book = new Book(title, author, num_pages)
   const newBook = new Book(title2, author2, num_pages2)
   myLibrary.push(book)
   myLibrary.push(newBook)

}

function displayBooks() {

    for (let i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i]);
    }
    
}

function createCard(book) {

    const shelf = document.getElementById('shelf');
    const newBookCard = document.createElement('div');
    let title = document.createElement("p");                  
    let author = document.createElement("p");
    let pageNum = document.createElement("p");
    let card_info = document.createElement("div");

    newBookCard.classList.add('card')

    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pageNum.innerHTML = book.num_pages;

    card_info.appendChild(title);
    card_info.appendChild(author);
    card_info.appendChild(pageNum);

    newBookCard.appendChild(card_info);

    shelf.appendChild(newBookCard)


}

document.addEventListener('DOMContentLoaded', () => {

    addBookToLibrary();
    console.log(myLibrary)
    displayBooks()
    
});