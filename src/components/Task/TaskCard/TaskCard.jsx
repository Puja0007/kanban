import "./TaskCard.scss";
import {useState, useEffect} from "react";

function TaskCard(props){
   
  //  console.log("TaskCard: ", boards);
    function getSubtaskDetails(){
        if(props.task.subtask?.length > 0){
            return(
                <div className="task-remaining"> {props.task.subtask.filter(x=> x.isActive === false).length} of {props.task.subtask.length} subtasks</div>
            )
        } else {
            return null;
        }
    }

    const taskDetails = getSubtaskDetails();
    return(
        <div className="task-card fade-in"
        >
            <div className="task-title" draggable
            onDragEnd={() => props.dragEnded(props.boardId, props.taskId)}
            onDragEnter={() => props.dragEntered(props.boardId, props.taskId)}
            > {props.task.title} </div>
            {/* {taskDetails} */}
        </div>
    )

}

export default TaskCard