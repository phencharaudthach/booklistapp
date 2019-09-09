// lesson 11

var list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        var li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

var forms = document.forms;
console.log(forms);
console.log(forms['add-book']);

Array.from(forms).forEach(function(form){
    console.log(form);
});

var addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    var value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});
