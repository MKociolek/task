window.onload = function(){

const MainContainer = document.querySelector(".container");
const textArea = document.querySelector(".task-text");
const sidePanel = document.querySelector(".side-nav");
const sidePanelBtn = document.querySelector(".side-nav-show-icon");
const taskText = document.querySelector(".task-text");
const btn = document.querySelector(".btn");
const taskListContainer = document.querySelector(".task-list-container");
const taskCloseBtn = document.querySelector(".task-card-close-btn");
const title = document.querySelector(".title");
const rbFive = document.getElementById("five");
const rbTen = document.getElementById("ten");
let newTaskList;
let positionX;
let positionY;
let newTask;
let closeBtn;
let newTaskClose;
let newTaskTitle;
let newTaskText;
let clickBtn = 0;
let i = 0;
let date = new Date().toLocaleDateString();
const objects_array = [];
let j=0;
let timeToRemind;
rbFive.onclick = () =>{
    timeToRemind = 30;
}
rbTen.onclick = () =>{
    timeToRemind = 60;
}
window.addEventListener('mousemove',(e)=>{
    positionX = (e.clientX - 100) + "px";
    positionY = (e.clientY) + "px";
});



btn.addEventListener('click',(e)=>{
clickBtn = 0;
newTask = document.createElement("div");
newTask.classList.add("task-card");
newTask.setAttribute("id", "id"+j);
MainContainer.appendChild(newTask);
newTaskClose = document.createElement("div");
newTask.appendChild(newTaskClose);
closeBtn = document.createElement("img");
closeBtn.src = "./icon/highlight_off-white-24dp.svg";
closeBtn.classList.add("task-card-close-btn");
newTaskClose.appendChild(closeBtn);
closeBtn.setAttribute("id", "id"+j);
document.querySelectorAll(".task-card-close-btn").forEach(function(elem){
elem.addEventListener('click',function(event){
    var elementID;
    if (event.target.matches('.task-card-close-btn')) {
        event.target.closest('.task-card').remove();
        elementID = (event.target.getAttribute("id")).substring(2);
        console.log(elementID);
        objects_array[elementID].task_active = 0;
        document.querySelectorAll(".new-task-list").forEach(function(element){
            if(element.getAttribute("id") == event.target.getAttribute("id")){
            element.innerHTML = "- DONE -" + date ;
            element.style.color = "#f48806";
        }
        })
        
	}
})
});

newTaskTitle = document.createElement("div");
newTaskTitle.classList.add("task-card-title");
newTask.appendChild(newTaskTitle);
newTaskText = document.createElement("div");
newTaskText.classList.add("task-card-text");
newTask.appendChild(newTaskText);
newTaskList = document.createElement("div");
newTaskList.classList.add("new-task-list");
newTaskList.setAttribute("id", "id"+j);
taskListContainer.appendChild(newTaskList);

});

MainContainer.addEventListener('click',(e)=>{
    //console.log(clickBtn);
    const currDiv = MainContainer.lastChild;
    if(clickBtn < 1){
    currDiv.style.left = positionX; 
    currDiv.style.top = positionY;
    currDiv.innerhtml = i;
    i++;
    currDiv.style.visibility = "Visible";
    //create object to array and fill with data
    objects_array[j] = {};
    objects_array[j].task_text = taskText.value;
    objects_array[j].task_title = taskText.value.split("\n",1).toString();
    objects_array[j].task_time = 0;
    objects_array[j].task_active = 1;
    j++;
    newTaskTitle.innerText = (objects_array[j-1].task_title).toString().toUpperCase();
    newTaskList.innerText = objects_array[j-1].task_title;
    newTaskText.innerText = objects_array[j-1].task_text;
    //task= new Task(taskText.value);
    clickBtn ++;
    taskText.value = "";
    
    let timeleft ;
    timeleft = timeToRemind;
    console.log(timeleft);
    if(timeleft != NaN){
    var downloadTimer = setInterval(function(){
    timeleft--;
    console.log(timeleft);
    if(timeleft < 1){
        clearInterval(downloadTimer);
        console.log("boom");
        document.querySelectorAll(".task-card").forEach(function(elem){
        let elementID = (elem.getAttribute("id")).substring(2);
        console.log(elementID);
     
        elem.style.backgroundColor = "green";
        
        }
    );
    }
    },1000);
    }
    }
    console.log(objects_array);
});

const sidePanelShow = () =>{
sidePanel.classList.toggle("side-panel-active");
sidePanelBtn.classList.toggle("side-nav-show-icon-active");
title.classList.toggle("title-active");
};


sidePanelBtn.addEventListener('click', sidePanelShow);

function closebutton(e){
    console.log("czxcxc");
}

}




