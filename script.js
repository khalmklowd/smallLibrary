

class book {
    constructor(title, author, pages, pagesRead, notes){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
    this.notes = notes;
    this.info = `${title} by ${author}, has ${pages} pages and you have ${pages-pagesRead} pages left to read. ${notes}`;
  } 
}

const theHobbit =  new book("The Hobbit", "Tolkien", 295, 250, "Not finished.");
 
var myLibrary = [theHobbit];

function addBook() {
  tit = prompt("Title?");
  auth = prompt("Author?");
  pages = prompt("Pages?");
  readIt = prompt("How many pages have you read?")
  notes = prompt("Any notes to add?")
  myLibrary = new book(tit, auth, pages, readIt, notes);
  putToScreen(myLibrary);
}

function putToScreen(books) {
    var th = document.createElement("TH");
    var tr = document.createElement("TR");
    book.prototype.toString = function() { 
      return ''+this.title;
    }
    th.innerHTML = myLibrary.toString();

    book.prototype.toString = function() { 
      return ''+this.info;
    }
    tr.innerHTML = myLibrary.toString();
    
    document.getElementById("tbody").appendChild(th);
    document.getElementById("tbody").appendChild(tr);
  }


console.log(this.name);