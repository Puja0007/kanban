import "./../BoardMenu/BoardMenu.scss";
import BoardMenu from "./../BoardMenu/BoardMenu";
import { CREATEBOARD_CONFIG } from "../../../helper/config";
import { useRef } from 'react';
function BoardWrapper(props){
    
    const { enableEditField, menu, toggleEdit } = props;
    const boardNameRef = useRef();
  //  console.log("Menu: ", menu);
    function createNewBoard(){
   //  console.log("Create new Board");
      

        
    }

    function saveBoardName(){
       // console.log("Save Board Name");
        let boardName = boardNameRef.current.value;
      //  console.log(boardName);
        const token = localStorage.getItem('token');
        CREATEBOARD_CONFIG(boardName, token).then((response)=>{
            console.log(response);
        }
        ).catch((error)=>{
            console.log(error);
        })
    }


    let newBoardAdd = () =>{
        return(
            <>
            { enableEditField &&  <div className="board-item new-board-item fade-in" >
                <i className="fa-solid fa-table-list"></i>
                <input type="text" ref={boardNameRef}/> 
                <i className="fa-solid fa-floppy-disk" onClick={saveBoardName}></i>
                <i className="fa-solid fa-xmark" onClick={()=>{ toggleEdit(false) }}></i>
            </div>
            }
            </>
        )
    }

    const menuitems = props.menu.map( x=> {
        return(
            <BoardMenu board={x} key={x.id} setActive={props.setActive}/>
        )
    })

    return(
        <div className="boardmenu-container">
           
            {menuitems}
            {newBoardAdd()}
            <div className="board-item create-new-board fade-in" onClick={createNewBoard}>
                <i className="fa-solid fa-table-list"></i>
                <span onClick={()=>{ toggleEdit(true) }}> + Create New Board</span>
            </div>
        </div>
    )
}

export default BoardWrapper