// lesson 12

var list = document.querySelector('#book-list ul');
var forms = document.forms;

//delete books
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        var li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

// add books
const addForm = Forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();

//create elements
const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content
bookName.textContent = value;
deleteBtn.textContent = 'delete'

//append to DOM
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
//list.insertBefore(li, list.querySelector('li:first-child'));
});