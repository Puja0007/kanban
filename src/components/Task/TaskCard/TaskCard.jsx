import "./TaskCard.scss";

function TaskCard({task}){
    
    function getSubtaskDetails(){
        if(task.subtask?.length > 0){
            return(
                <div className="task-remaining"> {task.subtask.filter(x=> x.isActive === false).length} of {task.subtask.length} subtasks</div>
            )
        } else {
            return null;
        }
    }

    const taskDetails = getSubtaskDetails();
    return(
        <div className="task-card fade-in" draggable>
            <div className="task-title"> {task.title} </div>
            {taskDetails}
        </div>
    )

}

export default TaskCard