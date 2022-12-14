let myLibrary = [];

function Book(title, author, num_pages, read) {

    this.title = title
    this.author = author
    this.num_pages = num_pages
    this.read = read

}

Book.prototype.toggleReadStatus = function(e) {

    this.read = !this.read
    
    if(e.innerText === "Read"){
        e.innerText = "Not Read";
    }else{
        e.innerText= "Read";
    }
   
}

function deleteCard(e) {

    myLibrary.splice(e.getAttribute('data-remove'), 1)
    delete_card = e.parentElement.parentElement;
    delete_card.parentNode.removeChild(delete_card)

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
    readBtn.setAttribute("id","readBtn");
    let removeBtn = document.createElement("button");

    newBookCard.classList.add('card')

    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pageNum.innerHTML = book.num_pages;
    removeBtn.textContent = 'Remove'
    
    readBtn.innerHTML = book.read === true ? 'Read' : 'Not Read';
    removeBtn.setAttribute('data-remove', myLibrary.indexOf(book))

    readBtn.addEventListener('click', function(){
        book.toggleReadStatus(this);
    });
    
    removeBtn.addEventListener('click', function(){
        deleteCard(this);
    });

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
    
});