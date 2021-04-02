import {TaskListView} from "./view/taskList";
import {NewTaskView} from "./view/newTask";

window.addEventListener("load", ()=>{
    
    const taskListView = new TaskListView({
        el: "#taskListView",
    });
    const newTaskView = new NewTaskView({
        el: "#newTaskView"
    });

    newTaskView.$on("updateTaskList", ()=>{
        taskListView.loadTasks();
    });

    taskListView.loadTasks();
});