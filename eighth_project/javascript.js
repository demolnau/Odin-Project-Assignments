let myLibrary = [];
var colors=[ "#f9d5e5", "#eeac99", "#e06377", "#c83349","#5b9aa0","#d6d4e0","#b8a9c9","#622569"]
var modal = document.getElementById("addBookModal");
const container = document.querySelector('#container'); 
const card = document.querySelector("#card")
var shelves = document.querySelector("#shelves");
var book_title = document.getElementById("book_title");
var book_author= document.getElementById("author");
var book_publication_year = document.getElementById("publication_year")
var book_read= document.getElementById("read");

/*
// Get the button that opens the modal
var add_book_btn = document.querySelector('#add_book');
var submit_btn = document.querySelector('#submit');
// Get the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
add_book_btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

submit.onclick = addBookToLibrary;

*/
const colorShade = (col, amt) => {
  col = col.replace(/^#/, '')
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

  let [r, g, b] = col.match(/.{2}/g);
  ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])

  r = Math.max(Math.min(255, r), 0).toString(16)
  g = Math.max(Math.min(255, g), 0).toString(16)
  b = Math.max(Math.min(255, b), 0).toString(16)

  const rr = (r.length < 2 ? '0' : '') + r
  const gg = (g.length < 2 ? '0' : '') + g
  const bb = (b.length < 2 ? '0' : '') + b

  return `#${rr}${gg}${bb}`
}


function Book(title, author, publication_year, read) {
    this.title = title
    this.author = author
    this.publication_year = publication_year
    this.read = read;
    /*
    this.info = function() { 
      console.log(title.value + " by " + author.value + ", published in " + publication_year.value + " read: " + read.checked) 
    } 
    */
    this.info = function() { 
      console.log(title + " by " + author + ", published in " + publication_year) 
    } 
}

function create_book_card(book_title,book_author,book_publication_year){
  const bookCard = document.createElement('div'); 
  bookCard.classList.add('card')

  const bookTitle = document.createElement('p')
  const bookAuthor = document.createElement('p')
  const bookPublicationYear= document.createElement('p')
  const random_color = colors[Math.floor(Math.random() * colors.length)];
  bookCard.style.background = random_color;
  bookCard.style.backgroundImage = "linear-gradient(to right," + colorShade(random_color, -40)+" 48px, " +colorShade(random_color,-80)+" 50px, transparent 50px)";

  bookTitle.textContent=book_title;
  bookAuthor.textContent=book_author;
  bookPublicationYear.textContent=book_publication_year;

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPublicationYear);

  shelves.appendChild(bookCard);
}


function display_books_in_library(){
    for (var i = 0; i < myLibrary.length; i++) {
        myLibrary[i].info();
    }
}

function addBookToLibrary(book_title,book_author,book_publication_year) {
  myLibrary.push(new Book(book_title,book_author,book_publication_year));
  create_book_card(book_title,book_author,book_publication_year);
  //myLibrary.push(new Book(book_title, book_author, book_publication_year, book_read));
  //display_books_in_library();
}

/*
let theHobbit = new Book("The Hobbit", "J.R.R.Tolkien", 1937)
let theCountofMonteCristo = new Book("The Count of Monte Cristo", "Alexander Dumas", 1844)
let Dune = new Book("Dune", "Frank Herbert", 1965)
myLibrary.push(theHobbit)
myLibrary.push(theCountofMonteCristo)
myLibrary.push(Dune)
*/

addBookToLibrary("Dune", "Frank Herbert", 1965)
addBookToLibrary("The Count of Monte Cristo", "Alexander Dumas", 1844)
addBookToLibrary("The Hobbit", "J.R.R.Tolkien", 1937)
addBookToLibrary("Twilight", "Stephanie Meyers", 2005)
addBookToLibrary("New Moon", "Stephanie Meyers", 2007)
display_books_in_library()






