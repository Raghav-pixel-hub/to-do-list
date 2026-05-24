const Taskinput = document.getElementById("task")
const taskList = document.getElementById("tasklist")

document.getElementById("add").addEventListener("click",function(){
    if(Taskinput.value == ""){
        return
    }
    
    const task = document.createElement("li")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", function(){
        task.remove()
    })

    task.innerText = Taskinput.value
    taskList.appendChild(task)
    Taskinput.value = ""
    task.appendChild(deleteButton)
})