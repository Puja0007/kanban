import "./BoardMenu.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";

function BoardMenu({board, setActive}){
//console.log("Board: ", board);
    const navigate = useNavigate();
    
// useEffect(()=>{
//     console.log("BoardMenu: ", board);
    
// }, [board])
    function makeActive(event){

        let identifier = null;
        if(event.currentTarget.tagName === "span" || event.currentTarget.tagName === "i"){
            identifier = event.currentTarget.parentElement.getAttribute("data-identifier");
        }
        identifier = event.currentTarget.getAttribute("data-identifier");
        setActive(identifier);
        let boardId = event.currentTarget.getAttribute("data-identifier");
        if(boardId == board.id){
            navigate(`/board/${boardId}`);
        //     getAllTaskByBoardId_config(boardId).then((response)=>{
        //         console.log(response);
        //        // navigate(`/board/${boardId}`);
        //     }).catch((error)=>{
        //         console.log(error);
        //     })
        }
       
        //navigate("board/"+identifier);
    }

    return(
        <div className={ board.isActive? "board-item item-active fade-in": "board-item fade-in"} onClick={makeActive} data-identifier={board.id}>
            <i className="fa-solid fa-table-list"></i>
            <span> {board.name}</span>
        </div>
    )
}

export default BoardMenu