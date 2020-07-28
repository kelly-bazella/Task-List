//Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event Listeners
function loadEventListeners() {
  form.addEventListener("submit", addTask);
  document.addEventListener('DOMContentLoaded', getTasks)
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener('click', clearTasks)
  filter.addEventListener('keyup', filterTasks)

}
// get tasks from local storage
function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task){
        const li = document.createElement("li");
        li.className = "collection-item";
        //create textnode and append to LI
        li.appendChild(document.createTextNode(task));
        //create new link
        const link = document.createElement("a");
        //add class
        link.className = "delete-item secondary-content";
        //add icon
        link.innerHTML = `<i class="fa fa-remove"></i>`;
        //append link to li
        li.appendChild(link);
        //append li to task list defined at top
        taskList.appendChild(li);
    })
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Please Add Task");
  }

  //create LI element
  const li = document.createElement("li");
  li.className = "collection-item";
  //create textnode and append to LI
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link
  const link = document.createElement("a");
  //add class
  link.className = "delete-item secondary-content";
  //add icon
  link.innerHTML = `<i class="fa fa-remove"></i>`;
  //append link to li
  li.appendChild(link);
  //append li to task list defined at top
  taskList.appendChild(li);

  storeTaskInLocalStorage(taskInput.value)

  //clear the input value
  taskInput.value = "";
  //make sure page doesn't auto refresh
  e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
      //remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks(){
    //option 1
   // taskList.innerHTM='';
   
   //option 2
   while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
   }

   //clear from local storage
   clearTasksFromLocalStorage();
}

//clear tasks from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

function filterTasks(e) {
    const text=e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) !=-1){
            text.style.display='block';
        }else{
            task.style.display='none';
        }
    });
}