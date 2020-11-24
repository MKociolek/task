

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
let cancelTime;
window.addEventListener('mousemove',(e)=>{
    positionX = (e.clientX - 100) + "px";
    positionY = (e.clientY) + "px";
});



btn.addEventListener('click',(e)=>{
clickBtn = 0;
newTask = document.createElement("div");
newTask.classList.add("task-card");
newTask.setAttribute("id", "cardId"+j);
MainContainer.appendChild(newTask);
newTaskClose = document.createElement("div");
newTask.appendChild(newTaskClose);
closeBtn = document.createElement("img");
closeBtn.src = "./icon/highlight_off-white-24dp.svg";
closeBtn.classList.add("task-card-close-btn");
newTaskClose.appendChild(closeBtn);
closeBtn.setAttribute("id", "closeBtnId"+j);
document.querySelectorAll(".task-card-close-btn").forEach(function(elem){
elem.addEventListener('click',function(event){
    if (event.target.matches('.task-card-close-btn')) {
        event.target.closest('.task-card').classList.add("task-card-deactive");
        let elementID = (event.target.getAttribute("id")).substring(10);
        console.log(elementID);
        objects_array[elementID].task_active = 0;
        //objects_array[elementID].task_time = 0;
        document.querySelectorAll(".new-task-list").forEach(function(element){
          //  console.log(element.getAttribute("id").substring(6));
         //   console.log(event.target.getAttribute("id").substring(10));
            if(element.getAttribute("id").substring(10) == event.target.getAttribute("id").substring(10)){
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
newTaskList.setAttribute("id", "taskListId"+j);
taskListContainer.appendChild(newTaskList);

});

MainContainer.addEventListener('click',(e)=>{
    //console.log(clickBtn);
    let currDiv = MainContainer.lastChild;
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
      if(rbFive.checked == true ){
        timeToRemind = 10;
    }
    else if(rbTen.checked == true){
        timeToRemind = 600;
    }   
    else timeToRemind = NaN;
    objects_array[j].task_time = timeToRemind;
    objects_array[j].task_active = 1;
    timer(objects_array[j].task_time,j);
    j++;
    newTaskTitle.innerText = (objects_array[j-1].task_title).toString().toUpperCase();
    newTaskList.innerText = objects_array[j-1].task_title;
    newTaskText.innerText = objects_array[j-1].task_text;
    //task= new Task(taskText.value);
    clickBtn ++;
    taskText.value = "";
    }
    console.log(objects_array);
    
});

const sidePanelShow = () =>{
sidePanel.classList.toggle("side-panel-active");
sidePanelBtn.classList.toggle("side-nav-show-icon-active");
title.classList.toggle("title-active");
};

const timer = (setTime,i) =>{
    setInterval(() => {
        setTime --;
        if(setTime >=0){
            console.log(setTime);   
        }
        if(setTime === 0)
        {
        cardId = "cardId"+i;
        console.log(cardId);

        document.getElementById(cardId).classList.add("blink-text");
        
        clearInterval(setTime);  
        }
    }, 1000);
};

sidePanelBtn.addEventListener('click', sidePanelShow);







