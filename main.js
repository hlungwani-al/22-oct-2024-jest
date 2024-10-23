

// export function sum (a, b) {
//     return a + b;
// }

// export function subtract (c, d) {
//     return c - d;
// }

// export function multiply (e, f) {
//     return e * f;
// }

// export function divide (g, h){
//     if (h==0)
//         throw new Error("Division by zero is not allowed");
//     return g / h;
// }

// to do starts here

const taskValue = document.getElementById('todoInput');
const todoMessage = document.getElementById('message'); 
const taskList = document.getElementById('list-of-tasks'); 
const buttonImage = document.getElementById('todoInput'); 

const todo = JSON.parse(localStorage.getItem('list-of-tasks'));
if (!todo){
    todo = [];
}

export function createTodoItems (){
    if(taskValue.value === ""){
        todoMessage.innerText = "Please enter a task!";
        taskValue.focus();
    } else {
        isAlreadyThere = false;
        todo.foreach((element) => {
            if(element.list == taskValue.value){
                isAlreadyThere = true;
            }
        });
        if(isAlreadyThere){
            alertMessage = ("The task is already in the list, please enter a new one");
            return;
        }
        const listItem = document.createElement('li');
        const todoItems = `<div>
        <img
            class="edit todo-manipulators"
            onclick="editTodoItem()"
            src="./pics/icons8-edit-64.png"
          />
          <img
            class="done todo-manipulators"
            onclick="completedTodoItems()"
            src="./pics/icons8-unchecked-checkbox-64.png"
          />
          <img
            class="delete todo-manipulators"
            onclick="deleteTodoItem()"
            src="./pics/icons8-delete-64.png"
          />
        </div>`;
    
        li.innerHTML = todoItems;
        taskList.appendChild(li);
        
        if(!todo){
            todo = [];
        }
        const listOfTasks = {item: todoInput.value, status: false};
        todo.push(taskList);
        setLocalStorage();
    }
    
    todoValue.value = "";
    alertMessage("Todo item Created Successfully!");
}

export function readToDoItems(){
    todo.forEach(element => {
        const li = document.createElement('li');
        const style = "";
        if(element.status){
            style = "style='text-decoration: line-through'";
        }
        const todoItems = `<div ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${
            element.item
          }
          ${
            style === ""
              ? ""
              : '<img class="todo-controls" src="/images/check-mark.png" />'
          }</div><div>
          ${
            style === ""
              ? '<img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" />'
              : ""
          }
          <img
            class="delete todo-manipulators"
            onclick="deleteTodoItem()"
            src="./pics/icons8-delete-64.png"
          />`;
          li.innerHTML = todoItems;
          listItems.appendChild(li);
    });
    ReadToDoItems();
}


// export function readList (){
    
// }
// export function updateList (){

// }
// export function deleteList(){

// }
