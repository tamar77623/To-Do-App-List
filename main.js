let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let btn = document.getElementById('btn');
let h3 = document.getElementById("h3");
let DeleteAll = document.getElementById("DeleteAll")
let tasksContainer = document.getElementById("tasks-container");
function x(){
    setTimeout(() => {
        h3.innerText = "";
    }, 2000);
}
let tasksArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showTasks();
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = "Please enter the task name.";
        return;
    }
    if(inp2.value === ""){
        h3.innerText = "Please enter the task duration.";
        return;
    }
    if(inp3.value === ""){
        h3.innerText = "Please indicate the priority of the task.";
        return;
    }
    let currentTask = {
        name: inp1.value,
        duration: inp2.value,
        priority: inp3.value
    };
    tasksArray.push(currentTask);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    h3.innerText = "Task added successfully!";
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
    x();
    showTasks();
}
function showTasks() {
    tasksContainer.innerHTML = "";
    tasksArray.forEach((task) => {
        tasksContainer.innerHTML += `
            <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px; border-radius: 5px;">
                <h4>📌 Task: ${task.name}</h4>
                <p>⏳ Duration: ${task.duration}</p>
                <p>⚠️ Priority: ${task.priority}</p>
            </div>
        `
        DeleteAll.style.display = "block";
        ;
    });
}
DeleteAll.onclick = function(){
    localStorage.clear();
    tasksArray = [];
    showTasks();
    h3.innerText = "All tasks have been deleted.";
    x();
    DeleteAll.style.display = "none";
}