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
    taskList.addEventListener('click', removeTask)
};

function addTask(e){
    if(taskInput.value === ''){
        alert("Please Add Task")
    }

    //create LI element
    const li=document.createElement('li');
    li.className='collection-item';
    //create textnode and append to LI
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link
    const link=document.createElement('a');
    //add class
    link.className='delete-item secondary-content'
    //add icon
    link.innerHTML=(`<i class="fa fa-remove"></i>`)
    //append link to li
    li.appendChild(link);
    //append li to task list defined at top
    taskList.appendChild(li);
    //clear the input value
    taskInput.value="";
    //make sure page doesn't auto refresh
    e.preventDefault();
};

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure')){
            e.target.parentElement.parentElement.remove()
        }
    
    }
        
}