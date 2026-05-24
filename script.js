// Get references to HTML elements
const taskInput = document.getElementById("task")
const taskList = document.getElementById("tasklist")

// Run this code when the Add button is clicked
document.getElementById("add").addEventListener("click", function(){

    // Stop if the input is empty
    if(taskInput.value == ""){
        return
    }

    // Create a new task item
    const task = document.createElement("li")

    // Create checkbox
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    // Create task text
    const taskText = document.createElement("span")
    taskText.innerText = taskInput.value

    // Create Delete button
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    // Mark task as completed
    checkbox.addEventListener("click", function(){

        if(checkbox.checked){
            taskText.style.textDecoration = "line-through"
        }
        else{
            taskText.style.textDecoration = ""
        }

    })

    // Delete the task when Delete is clicked
    deleteButton.addEventListener("click", function(){
        task.remove()
    })

    // Add elements to task in the correct order
    task.appendChild(checkbox)
    task.appendChild(taskText)
    task.appendChild(deleteButton)

    // Add task to the task list
    taskList.appendChild(task)

    // Clear input field
    taskInput.value = ""
})