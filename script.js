"use strict";

const todoValue = document.getElementById('todoText');
const listItems = document.getElementById('list-items');
const addUpadteClick = document.getElementById('addUpdateClick');
let updateText = '';





// Function to create todo data::
function createTodoData() {

    if (todoValue.value.trim() === '') {
        alert("Please enter your todo text!");
        todoValue.focus();
        return;
    }

    let liEl = document.createElement('li');

    const todoItem = `
    <div ondblclick='completeTodoItem(this)'>
        ${todoValue.value}
    </div>
    <div>
        <img 
        src="images/edit.png" 
        alt="" 
        class='edit todo-controls'
        onclick='updateTodoItem(this)'>
        <img 
        src="images/delete.png"
        alt=""
        class='delete todo-controls'
        onclick='deleteTodoItem(this)''>
    </div>
    `

    liEl.innerHTML = todoItem;

    listItems.appendChild(liEl);

    todoValue.value = '';

    todoValue.blur();

}

function completeTodoItem(e){
    // console.log(e.parentElement);
    const todoTextDiv = e.parentElement.querySelector('div');
    if(todoTextDiv.style.textDecoration !== 'line-through'){
        todoTextDiv.style.textDecoration = 'line-through';
    }else{
        todoTextDiv.style.textDecoration = 'none';
    }
    
}

function updateTodoItem(e){

    const targetDiv = e.parentElement.previousElementSibling;
    
    if(targetDiv.style.textDecoration !== 'line-through'){
        todoValue.value = targetDiv.innerText.trim();
        addUpadteClick.setAttribute('onclick', 'updateOnSlectedItem()');
        addUpadteClick.setAttribute('src', 'images/edit.png');

        updateText = targetDiv;
        todoValue.focus();
        

    }

}
function updateOnSlectedItem(){
    
    updateText.innerHTML = todoValue.value;
    
    addUpadteClick.setAttribute('onclick', 'createTodoData()');
    addUpadteClick.setAttribute('src', 'images/plus.jpg');

    todoValue.value = '';
}

function deleteTodoItem(e){
    e.closest('li').remove();
}


// Events

// form submit on enter key
todoValue.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addUpadteClick.click();
    }
})

// form submit on Plus img click
// addUpadteClick.addEventListener('click', createTodoData);
