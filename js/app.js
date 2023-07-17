const colors = document.querySelectorAll('.color-box');
const input = document.querySelector('.form-control');
const listedDiv = document.querySelector('#listed');
const plusButton = document.querySelector('#btn-save');
const deleteButton = document.querySelector('#btn-delete');


input.addEventListener('keyup', function(event){
    let newNote = event.target.value;
    if(event.keyCode === 13 ){
        if(event.target.value === ''){
           alert("please enter a note!!")
        }else{
            event.target.value = '';
            AddNote(newNote);
            input.style.backgroundColor = '#fff';
        }
       
    }
    if(event.keyCode === 27){
      event.target.value = '';
      input.style.backgroundColor = '#fff';
    }
})

colors.forEach(function(event){
    event.addEventListener('click', function(){
       input.style.backgroundColor = event.style.backgroundColor;
 
    })
});

plusButton.addEventListener('click', function(){
     let newNote = input.value;
     if(input.value === ''){
       alert("please enter a note!!")
    }else{
        input.value = '';
        AddNote(newNote);
        input.style.backgroundColor = '#fff';
    }
});

deleteButton.addEventListener('click', function(){
  input.value = '';
  input.style.backgroundColor = '#fff';
});

function AddNote(Note){
  const newDiv = document.createElement('div');
  newDiv.style.backgroundColor = input.style.backgroundColor;
  newDiv.className = 'card shadow-sm rounded';
  listedDiv.append(newDiv);
  newDiv.addEventListener('click', function(){
    newDiv.remove();
  })
  const newP = document.createElement('p');
  newP.className = 'card-text p-3';
  newP.innerHTML = Note;
  newDiv.append(newP);
  
}