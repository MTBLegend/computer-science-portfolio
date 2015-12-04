var todo = document.getElementById('todolist');
var form = document.getElementById('myform');
var field = document.getElementById('newitem');
var removeAll = document.getElementById('removeAll')



    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div class="list">' + text + '</div>';
  evt.preventDefault();
}, false);
//text box




todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  if(tar.style.color === 'red'){
    tar.parentNode.removeChild(tar);
  }
  //removes thing if red
  else{
    tar.style.color = 'red'
  //makes red if not allready
    
  }
  evt.preventDefault();
}, false);






removeAll.addEventListener( 'click', function(evt) {
  todo.innerHTML = '';
  evt.preventDefault();
}, false);
//removes everything



