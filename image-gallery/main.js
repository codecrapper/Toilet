const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// es6 destructuring
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

//const imgClick = (event) => current.src = event.target.src;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(event) {
	// reset the opacity of all images
	imgs.forEach(img => (img.style.opacity = 1));

	// change current image to src of clicked image
	current.src = event.target.src;

	// add fade-in class to current image
	current.classList.add("fade-in");

	// remove fade-in class
	setTimeout(()=>current.classList.remove("fade-in"), 500)

	// change opacity of clicked image
	event.target.style.opacity = opacity;
}