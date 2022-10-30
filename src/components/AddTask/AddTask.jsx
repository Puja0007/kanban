import { useContext,useState} from "react";
import { ThemeContext } from "../../context/theme-context";
import "./AddTask.scss";
import { createTask_config } from "../../helper/config";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';



function AddTask(){
    const { id} = useParams();
    const themeContext = useContext(ThemeContext);
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    // useState for subtask
    const [enteredSubTask, setEnteredSubTask] = useState({});
    const [enteredSubTaskList, setEnteredSubTaskList] = useState([
        { status:"todo", title: "subtask1", description: "subtask1 description" },
    ]);
    const [status, setStatus] = useState("todo");

    const titlePlaceHolder = "e.g. Take coffee break";
    const subtaskPlaceHolder = "e.g. Make coffee";
    const descriptionPlaceholder = "e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.";

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        
        // distructure data
       // const { title, subtask, description, status } = data;
        let boardId =id;
        console.log("BoardId: ", boardId);
       createTask_config(boardId, enteredTitle, enteredDescription, status, enteredSubTaskList).then((response) => {
            console.log(response);
            
        }).catch((error) => {
            console.log(error);
        })
    };

    
    return (
        <>
        <form>
        <div className="form-item">
                <div className="label-container">
                   {themeContext.theme == "dark" && "Title dark" } 
                   {themeContext.theme != "dark" && "Light" } 
                </div>
                <div className="input-container">
                    <input id="title" type="text" placeholder={titlePlaceHolder} 
                    {...register("title", { required: true, maxLength: 80 })}
                    onChange={(event) => {
                        setEnteredTitle(event.target.value);
                    }}/>
                     
                    {errors.title && <span className="error-msg">Title is required</span>}
                </div>

            </div>

                            <div className="form-item">
                                <div className="label-container">
                                    Description
                                </div>
                                <div className="input-container">
                                    <textarea id="description" placeholder={descriptionPlaceholder} 
                                    {...register("description")} 
                                    onChange={(event) => {
                                        setEnteredDescription(event.target.value);
                                    }}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-item">
                                <div className="label-container">
                                    Subtask
                                </div>
                                <div className="subTasks">

                                </div>
                                <div className="input-container" >
                                    <input id="subtask" type="text" placeholder={subtaskPlaceHolder}
                                    {...register("subtask")}
                                    onChange={(event) => {
                                        setEnteredSubTask({
                                            title: event.target.value,
                                            status: "todo",
                                            description: event.target.value,
                                        });
                                       // setEnteredSubTaskList([...enteredSubTaskList, enteredSubTask]);
                                    }}
                                     /> <button className="add-subtask-button" onClick={()=>{
                                        setEnteredSubTaskList([...enteredSubTaskList, enteredSubTask]);
                                    
                                     }} > Add subtask </button>
                                </div>
                            </div>

                            <div className="form-item">
                                <div className="label-container">
                                    Status
                                </div>
                                <div className="input-container">
                                    <select id="status" type="text" placeholder={subtaskPlaceHolder} 
                                    {...register("status", { required: true })}
                                    onChange={(event) => {
                                        setStatus(event.target.value);
                                    }}
                                    > 
                                        <option name="taskStatus" value="todo"> Todo </option>
                                        <option name="taskStatus" value="doing"> Doing </option>
                                        <option name="taskStatus" value="done"> Done </option>
                                    </select>
                                    {/* error msg */}
                                    {errors.status && <span className="error-msg">Status is required</span>}
                                </div>
                            </div>
                            <div className="form-item">
                               <button type="button" onClick={onSubmit} > Create Task</button>
                            </div>
        
        </form>
            
        </>
    )
}

export default AddTask