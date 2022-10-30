import Popup from "../../Popup/Popup";
import "./CreateNew.scss";


function CreateNew({showPopup , hidePopup}){

    function getHeader(){
        return null;
    }

    function getFooter(){
        return null;
    }

    function getContent(){
        return null;
    }

    return(
        <div className="create-newtask-container">
            <Popup header={getHeader} footer={getFooter} content={getContent} showPopup={true}/>
        </div>
    )
}

export default CreateNew