
let todos = [];
todos.push(
  { id: 1, name: "Buy groceries", urgency: 3 },
  { id: 2, name: "Call dad", urgency: 2 },
  { id: 3, name: "Finish project report", urgency: 5 }
);
const subject = document.getElementById('subject');
const urgency = document.getElementById('urgency');
const reg = document.getElementById("reg");
const addtd = document.getElementById('addtd');
const modifytd = document.getElementById('modifytd');
const paragraph = document.getElementById('textz')

function addTodo(todos, name, urgency) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    urgency: urgency
  };
  todos.push(newTodo);
  updateDisplay();
  console.log(todos)
}


document.getElementById("addtd").addEventListener("click", function() {
  addTodo(todos, subject.value, urgency.value); 
});
document.getElementById("modifytd").addEventListener("click", function() {
  modifyToDo(todos, reg.value, subject.value, urgency.value); 
});
document.getElementById("deletetd").addEventListener("click", function() {
  deleteToDo(todos, reg.value, ); 
});

function modifyToDo(todos, id, newTaskName, newUrgency) {
  let task = null;
  for (let t of todos) {
    if (t.id == id) {
       task = t;
    }
  }
  if (task) {
     task.name = newTaskName;
     task.urgency = newUrgency;
     updateDisplay();
  } else {
     console.log("Task not found");
  }
}function deleteToDo(todos, id) {
  let indexToDelete = null;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    todos.splice(indexToDelete, 1);
    updateDisplay();
  } else {
    console.log("Task not found");
  }
}

function updateDisplay() {
  paragraph.innerText = JSON.stringify(todos, null, 2);
}
console.log(todos);
