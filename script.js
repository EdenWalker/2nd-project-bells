
let todos = [];
todos.push(
  { Id: 1, Name: "Buy groceries", Urgency: 3 },
  { Id: 2, Name: "Call dad", Urgency: 2 },
  { Id: 3, Name: "Finish project report", Urgency: 5 }
);
const subject = document.getElementById('subject');
const urgency = document.getElementById('urgency');
const reg = document.getElementById("reg");
const addtd = document.getElementById('addtd');
const modifytd = document.getElementById('modifytd');
const paragraph = document.getElementById('textz')
document.getElementById("addtd").addEventListener("click", function() {
  addTodo(todos, subject.value, urgency.value); sortTdUr(todos);
});
document.getElementById("modifytd").addEventListener("click", function() {
  modifyToDo(todos, reg.value, subject.value, urgency.value); sortTdUr(todos);
});
document.getElementById("deletetd").addEventListener("click", function() {
  deleteToDo(todos, reg.value, ); sortTdUr(todos);
});
document.getElementById("sorttdid").addEventListener("click", function() {
  sortToId(todos); 
});
document.getElementById("sorttdur").addEventListener("click", function() {
  sortTdUr(todos); 
});

function addTodo(todos, name, urgency) {
  let newTodo = {
    Id: Math.floor(Math.random() * 1000 + 1),
    Name: name,
    Urgency: urgency
  };
  todos.push(newTodo);
  updateDisplay();
  console.log(todos)
}

function modifyToDo(todos, Id, newTaskName, newUrgency) {
  let task = null;
  for (let t of todos) {
    if (t.Id == Id) {
       task = t;
    }
  }
  if (task) {
     task.Name = newTaskName;
     task.Urgency = newUrgency;
     updateDisplay();
     alert("Task updated")
  } else {
     console.log("Task not found");
     alert("Task not found")
  }
}
function deleteToDo(todos, Id) {
  let indexToDelete = null;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].Id == Id) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    todos.splice(indexToDelete, 1);
    updateDisplay();
    alert("Task compleated and removed")
  } else {
    console.log("Task not found");
    alert("Task not found")
  }
}

function updateDisplay() {
  paragraph.innerText = JSON.stringify(todos, null, 2);
}

function sortToId(todos) {
  todos.sort((a, b) => a.Id - b.Id);
  updateDisplay();
}
function sortTdUr(todos) {
  todos.sort((a, b) => b.Urgency - a.Urgency);
  updateDisplay();
}
console.log(todos);
