// lesson 9

var listItems = document.querySelectorAll('#book-list ul li');

Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {

    var li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behaviour

var link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});