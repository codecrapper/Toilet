const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listeners 
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// loop through empties and call drag events
for(const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

// Drag functions
function dragStart() {
	fill.classList.add('hold');
	setTimeout(()=>this.className='invisible', 0)
	console.log("DRAG START");
}

function dragEnd() {
	console.log('DRAG END');
	fill.className='fill'
}

function dragOver(event) {
	event.preventDefault();
	console.log('over')
}

function dragEnter(event) {
	event.preventDefault();
	console.log('enter')
	this.className += " hovered";
}

function dragLeave() {
	console.log('leave')
}

function dragDrop() {
	console.log('drop')
}