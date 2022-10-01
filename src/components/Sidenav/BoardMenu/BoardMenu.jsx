import "./BoardMenu.scss";
import { useNavigate } from 'react-router-dom';

function BoardMenu({board, setActive}){

    const navigate = useNavigate();

    function makeActive(event){
        let identifier = null;
        if(event.currentTarget.tagName === "span" || event.currentTarget.tagName === "i"){
            identifier = event.currentTarget.parentElement.getAttribute("data-identifier");
        }
        identifier = event.currentTarget.getAttribute("data-identifier");
        setActive(identifier);
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