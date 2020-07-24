//Define UI variables
const form= document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn= document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task')

// Load all event listeners
loadEventListeners();

// Load all event Listeners
function loadEventListeners(){
    form.addEventListener('submit', addTask)
};

function addTask(e){
    if(taskInput.value === ''){
        alert("Please Add Task")
        console.log("task please")
    }
    e.preventDefault();
}