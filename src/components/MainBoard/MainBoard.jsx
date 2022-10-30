import { useEffect, useState,useContext } from "react";
import { dummyTask } from "../../constants/constants";
import TaskCard from "../Task/TaskCard/TaskCard";
import "./MainBoard.scss";
import { getAllTaskByBoardId_config } from "../../helper/config";


function MainBoard({currentBoard}){
   
console.log("MainBoard: ", currentBoard);
    const [ taskList , setTaskList] = useState([]);
    const [ todoList , setTodoList ] = useState([])
    const [ doingList , setDoingList ] = useState([])
    const [ doneList , setDoneList ] = useState([])
    

    useEffect(()=> {
        setTodoList( taskList.filter(x => x.status === "todo") );
        setDoingList( taskList.filter(x => x.status === "doing") );
        setDoneList(taskList.filter(x => x.status === "done")) ;
    }, [taskList])

    useEffect(()=>{
        getAllTaskByBoardId_config(currentBoard).then((response)=>{
            console.log(response);
         
            setTaskList(response);
        }).catch((error)=>{
            console.log(error);
        })
    }, [currentBoard])
  //  console.log("Current board: ", currentBoard);

    return (
        <div className="main-board-container">
            <div className="task-status-container">
                <div className=""> <i className="fa-solid fa-circle todo-circle"></i> <span>TODO ({todoList.length})</span> </div>
                {todoList.map( task=> {
                    return (
                        <TaskCard key={task._id} task={task}/>
                    )
                }) }
            </div>
            <div className="task-status-container">
                <div> <i className="fa-solid fa-circle doing-circle"></i>  <span>DOING ({doingList.length})</span></div>
                {doingList.map( task=> {
                    return (
                        <TaskCard key={task._id} task={task} />
                    )
                }) }
            </div>
            <div className="task-status-container">
                <div> <i className="fa-solid fa-circle done-circle"></i> <span>DONE ({doneList.length})</span></div>
                {doneList.map( task=> {
                    return (
                        <TaskCard key={task._id} task={task} />
                    )
                }) }
            </div>
        </div>
    )
}

export default MainBoard