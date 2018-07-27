let myLibrary = []

function Book(title, author, read) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.read = read
}

// Get info from user
document.getElementById("myForm").addEventListener("submit", addBookToLibrary);

function addBookToLibrary(event) {
	let bookTitle = document.getElementById("bookTitle");
	let bookAuthor = document.getElementById("bookAuthor");
	let checkRead = document.getElementById("checkRead");

	let book = new Book(bookTitle.value, bookAuthor.value, checkRead.checked)
	// if(checkRead.checked) {
	// 	book.read = checkRead.checked;
	// } else {
	// 	book.read = checkRead.checked;
	// }
	myLibrary.push(book);

event.preventDefault();
render();
document.getElementById("myForm").reset();
}

// function render() {
// 	let bookResults = document.getElementById("bookResults");
// 	bookResults.innerHTML = "";
// 	for(let i = 0; i < myLibrary.length; i++) {
// 		bookResults.innerHTML += '<div class = "breadcrumb">' + "Title: " + myLibrary[i].title  
// 										+ " Author: " + myLibrary[i].author +
// 								'</div>'; 
// 	}
// }

// Renders title and author of book on page aswell as a Read button
function render() {
	let bookResults = document.getElementById("bookResults");
	bookResults.textContent = "";

	for(let i = 0; i < myLibrary.length; i++) {
		let bookInfo = document.createElement("div");
		bookInfo.id = i;
		bookInfo.classList.add("breadcrumb");
		// Create (Have read - true or false) button
		let readButton = document.createElement("button");
		readButton.id = "readToggle" + i;
		readButton.setAttribute("type", "button");
		readButton.className = "readButton";
		readButton.classList.add("btn-sm");

		if(myLibrary[i].read) {
			readButton.classList.add("btn-success")
			readButton.innerText = "Read";
		} else {
			readButton.classList.add("btn-warning")
			readButton.innerText = "Not read";
		}

		// Create delete button
		let createButton = document.createElement("button");
		createButton.setAttribute("type", "button");
		createButton.className = "deleteButton";
		createButton.classList.add("btn-sm");
		createButton.classList.add("btn-danger");
		createButton.innerText = "Banish";

		bookInfo.textContent = "Title: " + myLibrary[i].title + " Author: " + myLibrary[i].author;
		bookInfo.appendChild(readButton);
		bookInfo.appendChild(createButton);
		bookResults.appendChild(bookInfo);

	}
}

function removeBook(position) {
	myLibrary.splice(position, 1);
}

function toggleRead (index) {
  let book = myLibrary[index]
  book.read = !book.read
  render()
  return myLibrary
}


let wholeResults = document.getElementById("wholeResults");
wholeResults.addEventListener("click", function(event) {
	//console.log(event);
	let elementClicked = event.target;
	let index = elementClicked.parentNode.id
	// Clear title & author if read
	if(elementClicked.className  === "deleteButton btn-sm btn-danger" ) {
		//console.log(elementClicked.parentNode.id);
		removeBook(elementClicked.parentNode.id);
		render();
	} else if(elementClicked.classList.contains("readButton")) {
		toggleRead(index);
	}
// render();
});

// Show add book form or not show
let bookForm = document.getElementById("bookForm");
//let bookFormDisplay = document.getElementById("bookForm").style.visibility;
const toggleForm = () => {
	if(bookForm.style.visibility === "hidden") {
		bookForm.style.visibility = "visible";
		document.getElementById("showFormButton").classList.add("active");
	} else {
		bookForm.style.visibility = "hidden";
		document.getElementById("showFormButton").classList.remove("active");
	}
}

bookForm.style.visibility = "hidden";
