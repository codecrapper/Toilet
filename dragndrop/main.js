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
}

function dragEnd() {
	console.log('DRAG END');
	fill.className='fill';
}

function dragOver(event) {
	event.preventDefault();
}

function dragEnter(event) {
	event.preventDefault();
	this.className += " hovered";
}

function dragLeave() {
	this.className = 'empty';
}

function dragDrop() {
	this.className = 'empty';
	this.append(fill);
}