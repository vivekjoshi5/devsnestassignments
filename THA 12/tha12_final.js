

let todoItems = [];


function printTodo(todo){
    const list = document.querySelector('.js-todo-list');
    const item = document.querySelector(`[data-key= '${todo.id}']`);
    
    if(todo.deleted){
        item.remove();
        if (todoItems.length === 0) list.innerHTML = '';
        return  
    }

    const isChecked = todo.checked ? 'done': ''; 
    const listNode = document.createElement("li");
    listNode.setAttribute('class', `todo-item ${isChecked}`);
    listNode.setAttribute('data-key', todo.id ) 

    listNode.innerHTML = `
        <input id ="${todo.id}" class = "tick js-tick" type= "checkbox"/>
        <label for = "${todo.id}" class = "tick js-tick"></label>
        <span class = "item" >${todo.text}</span>
        <button class= "delete-todo js-delete-todo"> CANCEL
        </button>
        `;
    

    if(item)
    {
        list.replaceChild(listNode, item);
    }
    else
    {
        list.append(listNode);
    }
}





function addTodo(text){
    const todo ={
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);
    printTodo(todo);
}


function toggleDone(key){
    const index = todoItems.findIndex(item => item.id === Number(key)); 
    todoItems[index].checked = !todoItems[index].checked;
    // printTodo(todoItems[index]);
}

function deleteTodo(key){
    const index = todoItems.findIndex(item => item.id === Number(key))
    const todo ={
        deleted: true,
        ...todoItems[index] 
    }
    todoItems = todoItems.filter(item => item.id !== Number(key)) 
    printTodo(todo); 
}


const form = document.querySelector(".js-form");

form.addEventListener('submit', event=>{
    event.preventDefault();

    const input = document.querySelector('.js-todo-input');

    const text = input.value.trim();
    if(text!=='')
    {
    addTodo(text);
    input.value ='';
    input.focus();
    }
});



const list = document.querySelector('.js-todo-list');
 

list.addEventListener('click', event => {
    if(event.target.classList.contains('js-tick'))
    {   
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
    
    if(event.target.classList.contains('js-delete-todo'))
    {
        const itemKey =event.target.parentElement.dataset.key;
        deleteTodo(itemKey)
    }
});



























