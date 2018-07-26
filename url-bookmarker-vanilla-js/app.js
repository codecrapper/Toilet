// const saveBookmark = () => {
// 	console.log("hey");
// };

// Listen for form subit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

// Save bookmark
function saveBookmark(event) {
	let siteName = document.getElementById("siteName").value
	let siteUrl = document.getElementById("siteUrl").value

	let bookmark = {
		name: siteName,
		url: siteUrl
	};

	// Test if bookmarks is null
	if(localStorage.getItem("bookmarks") === null) {
		// Init array
		var bookmarks = [];
		// Add to array
		bookmarks.push(bookmark);
		// Set to localStorage
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
	} else {
		// Get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
		// Add bookmark to array
		bookmarks.push(bookmark);
		// Re-set back to localStorage
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
	}
	
	// Prevent form from submitting
	event.preventDefault();
}

// Delete bookmarks
function deleteBookmark(url) {
	//get bookarmsk from localStorage
	var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
	//loop through bookmarks
	for(var i = 0; i < bookmarks.length; i++) {
		if(bookmarks[i].url == url) {
			// remove from array
			bookmarks.splice(i, 1);
		}
	}
	//re-set back to localStorage
	localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
	//re-fetch bookmarks
	fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
	// Get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
	// Get output id
	var bookmarksResults = document.getElementById("bookmarksResults");
	
	// Build output
	bookmarksResults.innerHTML = "";
	for(let i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;
		bookmarksResults.innerHTML += '<div class="breadcrumb col-md-6 offset-md-3">'+
								  '<h3>'+name+
								  ' <a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> '+
								  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '+
								  '</h3>'+
								  '</div>';
	}
}