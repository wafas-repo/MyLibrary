let myLibrary = [];

function Book(title, author, num_pages, read) {

    this.title = title
    this.author = author
    this.num_pages = num_pages
    this.read = read

}

function addBookToLibrary() {
   
    let form= document.querySelector("form");                        
    form.addEventListener('submit',function (e){                     
        let title = document.getElementById("title").value;     
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read =  document.getElementById("readStatus").checked;
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook)              
        e.preventDefault();
        form.reset();  
        createCard(newBook);                                 
    });

}

function createCard(book) {

    const shelf = document.getElementById('shelf');
    const newBookCard = document.createElement('div');
    let title = document.createElement("p");                  
    let author = document.createElement("p");
    let pageNum = document.createElement("p");
    let card_info = document.createElement("div");
    let buttons = document.createElement("div");
    let readBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    newBookCard.classList.add('card')

    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pageNum.innerHTML = book.num_pages;
    removeBtn.textContent = 'Remove'
    
    if (book.read) {
        readBtn.textContent = 'Read'
    } else {
        readBtn.textContent = 'Not Read'
    }

    card_info.appendChild(title);
    card_info.appendChild(author);
    card_info.appendChild(pageNum);
    buttons.appendChild(readBtn);
    buttons.appendChild(removeBtn);

    newBookCard.appendChild(card_info);
    newBookCard.appendChild(buttons);

    shelf.appendChild(newBookCard)


}

document.addEventListener('DOMContentLoaded', () => {

    addBookToLibrary();
    console.log(myLibrary)
    
});