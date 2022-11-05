import { useEffect, useState,useContext } from "react";
import { dummyTask } from "../../constants/constants";
import TaskCard from "../Task/TaskCard/TaskCard";
import "./MainBoard.scss";
import { getAllTaskByBoardId_config } from "../../helper/config";


function MainBoard({currentBoard}){
   
//console.log("MainBoard: ", currentBoard);
    const [ taskList , setTaskList] = useState([]);
    const [ todoList , setTodoList ] = useState([])
    const [ doingList , setDoingList ] = useState([])
    const [ doneList , setDoneList ] = useState([])
    const [boards, setBoards] = useState(taskList);
    const [sourceTask, setSourcetask] = useState(
        {
            bid: "",
            tid: ""
        }
    )
    const [targettask, setTargettask] = useState({
        bid: "",
        tid: "",
      });

    useEffect(()=> {
        taskList.map((task)=>{
            if(task.title == "Todo"){
                setTodoList(task.tasks);
            }
            if(task.title == "Doing"){
                setDoingList(task.tasks);
            }
            if(task.title == "Done"){
                setDoneList(task.tasks);
            }
        })
    }, [taskList])
    
      const dragEnded = (e) => {
        let s_boardIndex, s_taskIndex, t_boardIndex, t_taskIndex;
        s_boardIndex = boards.findIndex((item) => item.id == sourceTask.bid);
        if (s_boardIndex < 0) return;
    
        s_taskIndex = boards[s_boardIndex]?.tasks?.findIndex(
          (item) => item.id == sourceTask.tid
        );
        if (s_taskIndex < 0) return;
    
        t_boardIndex = boards.findIndex((item) => item.id == targettask.bid);
        if (t_boardIndex < 0) return;
    
        t_taskIndex = boards[t_boardIndex]?.tasks?.findIndex(
          (item) => item.id == targettask.tid
        );
        // if (t_taskIndex < 0) return;
        console.log("start: ",s_boardIndex, s_taskIndex);
        console.log("end: ", t_boardIndex,t_taskIndex);
    
        const tempBoards = [...boards];
        const sourcetask = tempBoards[s_boardIndex].tasks[s_taskIndex];
        tempBoards[s_boardIndex].tasks.splice(s_taskIndex, 1);
        if(t_taskIndex == -1){
            console.log("t_taskIndex: ", t_taskIndex,t_boardIndex);
            console.log("tempBoards[t_boardIndex].tasks: ", tempBoards[t_boardIndex].tasks);
            tempBoards[t_boardIndex].tasks.push(sourcetask);
        }else{
        tempBoards[t_boardIndex].tasks.splice(t_taskIndex, 0, sourcetask);
        }
        setBoards(tempBoards);
        setTaskList(tempBoards);
         // updateTaskList(tempBoards);  
        setTargettask({
          bid: "",
          tid: "",
        });
        setSourcetask({
            bid: "",
            tid: "",
            });
      };  
     

        
const dragEntered = (e,bid,tid) => {
  //  e.preventDefault();
        if (targettask.tid == tid) return;
        setTargettask({
          bid,
          tid,
        });
      };
const dragStarted = (e,bid, tid) => {
    
        setSourcetask({
            bid,
            tid,
        });
    }



    useEffect(()=>{
        // getAllTaskByBoardId_config(currentBoard).then((response)=>{
        //     console.log(response);
         
        //     setTaskList(response);
        // }).catch((error)=>{
        //     console.log(error);
        // })
        localStorage.getItem("boardData") && setBoards(JSON.parse(localStorage.getItem("boardData")));
        localStorage.getItem("boardData") && setTaskList(JSON.parse(localStorage.getItem("boardData")));
    }, [currentBoard])
  //  console.log("Current board: ", todoList);

    return (
        <div className="main-board-container">
            <div className="task-status-container">
                <div className=""> <i className="fa-solid fa-circle todo-circle"></i> <span>TODO ({todoList.length})</span> </div>
                {todoList.map( task=> {
                    return (
                        <TaskCard taskId={task.id} task={task} taskList={taskList} 
                        boardId={0}
                        dragStart={dragStarted}
                        dragEnded={dragEnded}
                        dragEntered={dragEntered}

                        />
                    )
                }) }
            </div>
            <div className="task-status-container">
                <div> <i className="fa-solid fa-circle doing-circle"></i>  <span>DOING ({doingList.length})</span></div>
                {doingList.map( task=> {
                    return (
                        <TaskCard taskId={task.id} task={task} taskList={taskList}
                        boardId={1}
                        dragStart={dragStarted}
                        dragEnded={dragEnded}
                        dragEntered={dragEntered}/>
                    )
                }) }
            </div>
            <div className="task-status-container">
                <div> <i className="fa-solid fa-circle done-circle"></i> <span>DONE ({doneList.length})</span></div>
                {doneList.map( task=> {
                    return (
                        <TaskCard taskId={task.id} task={task} taskList={taskList}
                        boardId={2}
                        dragStart={dragStarted}
                        dragEnded={dragEnded}
                        dragEntered={dragEntered}/>
                    )
                }) }
            </div>
        </div>
    )
}


export default MainBoard