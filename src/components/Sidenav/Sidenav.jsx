import './Sidenav.scss';
import BoardWrapper from "./BoardWrapper/BoardWrapper";
import { useEffect, useState } from "react";
import { dummyBoards } from "../../constants/constants";
import { getAllBoards_config } from "../../helper/config";
// import { BoardContext } from '../../context/board-context';

function Sidenav({currentBoard}){

    const [boardList, setBoardList] = useState([]);

    const [sidenavOpen , setSidenavOpen] = useState(false);

    const [ enableEditField , setEnableEditField ] = useState(false)
  

    useEffect(() => {
        fetchBoardList();
    },[])
    
    function fetchBoardList(){
       // const token = localStorage.getItem('token');
        getAllBoards_config().then((response)=>{
           // console.log(response);
            setBoardList(response);

        }).catch((error)=>{
            console.log(error);
        })

    }
    useEffect(()=> {
        if(boardList.length > 0){
            const index = boardList.indexOf(boardList.filter(x => x.id == currentBoard)[0]);
           // console.log("Index: ", index);
   
            if(index != -1 ){
               setBoardList((prevVal) => {
                   let boards = [...prevVal];
                   boards.map( x=> {
                       if(x.id === parseInt(currentBoard)){ 
                           x.isActive = true;
                       } else {
                           x.isActive = false;
                       }
                       return x;
                   });
                   return boards;
               })
            } else {
               setBoardList((prevVal) => {
                   let boards = [...prevVal];
                   boards[0].isActive = true;
                   return boards;
               })
            }
        }
         

    }, [])

    function setActive(index){
        setBoardList((prevVal) => {
            let boards = [...prevVal];
            boards.map( x=> {
                if(x.id === parseInt(index)){ 
                    x.isActive = true;
                } else {
                    x.isActive = false;
                }
                return x;
            });
            return boards;
        })
    }

    function toggleEdit(flag){
        if(flag){
            setEnableEditField(true);
        } else {
            setEnableEditField(false);
        }
    }

    function toggleSideMenu(event){
        if(sidenavOpen){
            document.getElementById("sidenav").classList.add("side-nav-hidden");
            document.getElementById("menubtn").classList.add("menu-Button-open");
            document.getElementById("mainContainer").classList.add("remove-margin");
            setSidenavOpen(false);
        } else {
            document.getElementById("sidenav").classList.remove("side-nav-hidden");
            document.getElementById("menubtn").classList.remove("menu-Button-open");
            document.getElementById("mainContainer").classList.remove("remove-margin");
            setSidenavOpen(true);
        }
    }

    return(
        
        <div id="sidenav" className="sidenav-contianer">
            <div className="sidenav-contianer-header">
                <i className="fa-sharp fa-solid fa-bars"></i>
                <span>kanban</span>

                <div id="menubtn" className="menu-Button" onClick={toggleSideMenu}> <i className="fa-solid fa-arrow-right"></i> </div>
            </div>
            <div className="sidenav-contianer-menus">
                <span className="heading">
                    ALL BOARDS ({boardList.length})
                </span>
             
                    <BoardWrapper menu={boardList} setActive={setActive} enableEditField={enableEditField} toggleEdit={toggleEdit} fetchBoardList={fetchBoardList} />
            </div>
        </div>
    )
}


export default Sidenav