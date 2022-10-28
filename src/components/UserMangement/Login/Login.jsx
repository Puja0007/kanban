//import "./Login.scss";
import "../../GlobalStyle/auth.scss";
import Card from "../../Card/Card";
import AuthContext from "../../../context/auth-context";
import { useContext, useEffect,useState, useRef,useReducer } from "react";
import Input from "../../UI/Input";
import { useForm } from "react-hook-form";
import { registerFormValidation } from "../../../helper/formValidationHelper";
import { useNavigate   } from 'react-router-dom';
import { LOGIN_CONFIG } from '../../../helper/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValid, setValid] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [enteredEmail, setEnteredEmail] = useState('');
  const onSubmit = () => {
    // registerFormValidation();
  
    if(isValid){
      console.log("submit");
      LOGIN_CONFIG(enteredEmail,enteredPassword).then((response)=>{
       // console.log(response);
        toast.success('logged In Successfully !', {
          position: toast.POSITION.TOP_CENTER
      });
        localStorage.setItem('token', response.token);
        ctx.login();

        // if(response.status === 200){
          
         
        // }
      }).catch((error)=>{
        toast.error(`${error.response.data}`, {
          position: toast.POSITION.TOP_CENTER
      });
        console.log(error);
      })
    }
   
    else if(enteredEmail.length==0 || error?.emailError !=undefined){
      emailInputRef.current.focus();
    }
    else if(enteredPassword.length== 0 || error?.passwordError !=undefined){
      passwordInputRef.current.focus();
    }
   
  };
  const inputHandler = (event) => {
    setError(registerFormValidation(event, error));
  };

  const validate = () => {
    return  enteredEmail.length && enteredPassword.length && !error?.emailError && !error?.passwordError;
  };
  useEffect(() => {
    const isValid = validate();
   // console.log("useEffect",isValid);
    setValid(isValid);
  }, [enteredEmail,enteredPassword,error]);
  
  
  const emailChangeHandler = (event)=>{
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event)=>{
    setEnteredPassword(event.target.value);
  }
  
  function navigateToSignUp(){
    console.log("this will navigate to register page. ");
    navigate("register");
  }
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <span className="header-left">Learn to code by watching others</span>
          <span className="info-left">See how experienced developer solve problems in real-time. Watching scripted tutorial is great but understanding how developer think is invaluable.</span>
        </div>
        <div className="right">
          <Card title={"LOGIN"} className="login-card">
            <form className="form">
              <div className="form-field">
              <Input
                id="user-email"
                type="email"
                placeholder="Enter your email."
                name="email"
                 ref={emailInputRef}
                 register={register("email", { required: true })}
                error = {error?.emailError}
                onChange={emailChangeHandler}
                onInput={inputHandler}
              ></Input>
                </div>
             
              <div className="form-field">
              <Input
                id="user-password"
                type="password"
                placeholder="Enter your password."
                name="password"
                ref={passwordInputRef}
                 register={register("password", { required: true })}
                
                onChange={passwordChangeHandler}
                onBlur={inputHandler}
              ></Input>
              </div>
              
              <div className="form-border"></div>
              <a href="#">Forgot password?</a>
              <br></br>
              <button type="button" onClick={onSubmit}>LOGIN</button>
              <a href="/register" id="signup">
                Don't have account yet?
              </a>


            </form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
