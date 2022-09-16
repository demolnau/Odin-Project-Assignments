let myLibrary = [];
var colors=[ "#f9d5e5", "#eeac99", "#e06377", "#c83349","#5b9aa0","#d6d4e0","#b8a9c9","#622569"]
var modal = document.getElementById("addBookModal");
const container = document.querySelector('#container'); 
const card = document.querySelector("#card")
var shelves = document.querySelector("#shelves");
var book_title = document.getElementById("title").value;
var book_author= document.getElementById("author").value;
var book_publication_year = document.getElementById("publication_year").value;
var book_read= document.getElementById("read").checked;


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
    
    this.info = function() { 
      console.log(title + " by " + author + ", published in " + publication_year+". Read: "+ read) ;
    } 
}

function create_book_card(book_title,book_author,book_publication_year,book_read){
  //create bookcard 
  str = book_title.replace(/\s+/g, '')+"_card";
  const item = document.createElement('div');
  item.setAttribute('id', str );
  //console.log(str)
  const bookCard = document.createElement('div'); 
  bookCard.classList.add('card')
  //bookCard.setAttribute('id', str );

  //create a read button
  const read_button = document.createElement('button');
  read_button.setAttribute('id','readbtn');
  if (book_read){
    read_button.textContent = "Read";
    read_button.style.backgroundColor='#98BF64';
    read_button.style.border="2px solid #98BF64";
    
  }
  else{
    read_button.textContent = "Not read";
    read_button.style.backgroundColor="#900D09";
    read_button.style.border="2px solid #900D09";
    read_button.textContent="Not read";
  }
  
  
  //create a span X button
  var remove_book_x = document.createElement("a");
  remove_book_x.classList.add("boxclose");
  bookCard.appendChild(remove_book_x); // add remove button to bookcard
  
  // create title, author, and publication elements for bookCard element
  const bookTitle = document.createElement('p')
  const bookAuthor = document.createElement('p')
  const bookPublicationYear= document.createElement('p')

  //call the function to get random colors for the books
  const random_color = colors[Math.floor(Math.random() * colors.length)];
  bookCard.style.background = random_color;
  bookCard.style.backgroundImage = "linear-gradient(to right," + colorShade(random_color, -40)+" 48px, " +colorShade(random_color,-80)+" 50px, transparent 50px)";
  //Add background color to button
  

  //assign the text to each book
  bookTitle.textContent=book_title;
  bookAuthor.textContent=book_author;
  bookPublicationYear.textContent=book_publication_year;

  //add background color to title
  bookTitle.style.backgroundColor= random_color;
  bookTitle.style.backgroundImage="linear-gradient(transparent 60%, "+ colorShade(random_color, -40);  

  //add background color to bookAuthor
  bookAuthor.style.backgroundColor=random_color;
  bookAuthor.style.backgroundImage = "linear-gradient(transparent 60%, "+ colorShade(random_color, -40); 

  //add background color to bookPublicationYear
  bookPublicationYear.style.backgroundColor=random_color;
  bookPublicationYear.style.backgroundImage = "linear-gradient(transparent 60%, "+ colorShade(random_color, -40); 

  //append the title to the bookCard
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPublicationYear); 
  bookCard.appendChild(read_button)

  //append each bookCard to shelves container
  item.appendChild(bookCard);
  shelves.append(item);
  //shelves.appendChild(bookCard);

  //creates listener even for the read_button
  read_button.addEventListener("click", ()=>{
    read_button.style.backgroundColor=random_color;
      if(read_button.innerText == "Read"){
        read_button.style.backgroundColor="#900D09";
        read_button.style.border="2px solid #900D09";
        read_button.textContent="Not read";
        console.log("not read")
      }else{
        read_button.style.backgroundColor='#98BF64';
        read_button.style.border="2px solid #98BF64";
        read_button.textContent="Read"
        console.log("Read") 
      }
  });
  //creates listener event for clicking X button
  remove_book_x.addEventListener("click", ()=>{
    removeBookFromLibrary(book_title);
    remove_bookcard(book_title);
  });

}


function display_books_in_library(){
    for (var i = 0; i < myLibrary.length; i++) {
        myLibrary[i].info();
    }
}

function addBookToLibrary(book_title,book_author,book_publication_year,book_read) {
  book_title = document.getElementById("title").value;
  book_author= document.getElementById("author").value;
  book_publication_year = document.getElementById("publication_year").value;
  book_read= document.getElementById("read").checked;
  //console.log(book_title, book_author, book_publication_year, book_read);
  //console.log(new Book(book_title,book_author,book_publication_year,book_read))
  myLibrary.push(new Book(book_title,book_author,book_publication_year,book_read));
  display_books_in_library();
  create_book_card(book_title,book_author,book_publication_year, book_read);
}

function removeBookFromLibrary(book_title) {
  for (var i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title == book_title){
      myLibrary.splice(i,1);
      console.log(myLibrary);
    }
  }
  
}

function remove_bookcard(book_title){
  str = "#"+book_title.replace(/\s+/g, '')+"_card";
  const element=document.querySelector(str);
  element.remove();

}

/*
let theHobbit = new Book("The Hobbit", "J.R.R.Tolkien", 1937)
let theCountofMonteCristo = new Book("The Count of Monte Cristo", "Alexander Dumas", 1844)
let Dune = new Book("Dune", "Frank Herbert", 1965)
myLibrary.push(theHobbit)
myLibrary.push(theCountofMonteCristo)
myLibrary.push(Dune)
*/

//addBookToLibrary("Dune", "Frank Herbert", 1965, false)
//addBookToLibrary("The Count of Monte Cristo", "Alexander Dumas", 1844, false)
//addBookToLibrary("The Hobbit", "J.R.R.Tolkien", 1937, true)
//addBookToLibrary("Twilight", "Stephanie Meyers", 2005, true)
//addBookToLibrary("New Moon", "Stephanie Meyers", 2007, true)
