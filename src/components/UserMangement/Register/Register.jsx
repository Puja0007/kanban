//import "./Register.scss";
import "../../GlobalStyle/auth.scss";
import Card from "./../../Card/Card";
import { useForm } from "react-hook-form";
import AuthContext from "../../../context/auth-context";
import {useContext, useState, useRef,useEffect, React } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  registerFormValidation,
  confirmPasswordValidation,
} from "../../../helper/formValidationHelper";
import Input from "../../UI/Input";
import { REGISTER_CONFIG } from "../../../helper/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const ctx = useContext(AuthContext);
 const [enteredFname, setEnteredFname] = useState("");
  const [enteredLname, setEnteredLname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [isValid, setValid] = useState(false);
  const fnameRef = useRef(null);
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  
  const onSubmit = () => {
    // registerFormValidation();
    if(isValid){
      console.log("submit");
      REGISTER_CONFIG(enteredFname,enteredLname,enteredEmail,enteredPassword, enteredConfirmPassword).then((response)=>{
       // console.log(response);
        toast.success('Registered Successfully !', {
          position: toast.POSITION.TOP_CENTER
      });
       ctx.register();
      }).catch((error)=>{
        toast.error(`${error.response.data}`, {
          position: toast.POSITION.TOP_CENTER
      });
        console.log(error);
      })
    }
    else if(enteredFname.length==0 || error?.fnameError !=undefined){
      console.log("fname",error?.fnameError);
      // console.log("fname");
      // console.log("fname",fnameRef.current.value);
      fnameRef.current.focus();
    }
    else if(enteredLname.length==0 || error?.lnameError !=undefined){
      lnameRef.current.focus();
    }
    else if(enteredEmail.length==0 || error?.emailError !=undefined){
      emailRef.current.focus();
    }
    else if(enteredPassword.length== 0 || error?.passwordError !=undefined){
      passwordRef.current.focus();
    }
    else if(enteredConfirmPassword.length==0 || error?.confirmPasswordError !=undefined){
      confirmPasswordRef.current.focus();
    }
  };
  const inputHandler = (event) => {
    setError(registerFormValidation(event, error));
  };

  const validate = () => {
    return  enteredFname.length && enteredLname.length && enteredEmail.length && enteredPassword.length &&enteredConfirmPassword.length && !error?.fnameError && !error?.lnameError  && !error?.emailError && !error?.passwordError && !error?.confirmPasswordError;
  };
  useEffect(() => {
    const isValid = validate();
   // console.log("useEffect",isValid);
    setValid(isValid);
  }, [enteredFname,enteredLname,enteredEmail,enteredPassword, enteredConfirmPassword, error]);
  
  const fnameChangeHandler = (event)=>{
    setEnteredFname(event.target.value);
  }
  const lnameChangeHandler = (event)=>{
    setEnteredLname(event.target.value);
  }
  const emailChangeHandler = (event)=>{
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event)=>{
    setEnteredPassword(event.target.value);
  }
  const confirmPasswordChangeHandler = (event)=>{
    setEnteredConfirmPassword(event.target.value);
  }
 
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <h1>Game of Thrones</h1>
          <h3>Welcome to Dragonstone</h3>
        </div>
        <div className="right">
          <Card title={"REGISTER"}>
            <div className="form">
              <div className="form-field">
                <Input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name."
                  name="fname"
                  ref={fnameRef}
                  register={register("fname", { required: true })}
                  onChange={fnameChangeHandler}
                //  onFoucs={inputHandler}
                   onInput={inputHandler}
                  error={error?.fnameError}
                ></Input>
                {/* {error?.fnameError && (
                  <span className="error">{error?.fnameError}</span>
                )} */}
              </div>

              <div className="form-field">
                <Input
                  id="lname"
                  type="text"
                  placeholder="Enter your last name."
                  name="lname"
                  ref={lnameRef}
                  register={register("lname", { required: true })}
                  onChange={lnameChangeHandler}
                  onBlur={inputHandler}
                  error={error?.lnameError}
                ></Input>
              </div>
              <div className="form-field">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email."
                  name="email"
                  ref={emailRef}
                  register={register("email", { required: true })}
                  onChange={emailChangeHandler}
                  onBlur={inputHandler}
                  error={error?.emailError}
                ></Input>
              </div>
  
              <div className="form-field">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password."
                  name="password"
                  ref={passwordRef}
                  register={register("password", { required: true })}
                  onChange={passwordChangeHandler}
                  onBlur={inputHandler}
                  error={error?.passwordError}
                ></Input>
              </div>

              <div className="form-field">
                <Input
                  id="confirmPwd"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm-password"
                  ref={confirmPasswordRef}
                  register={register("confirmPwd", { required: true })}
                  onChange={confirmPasswordChangeHandler}
                  onBlur={inputHandler}
                  error={error?.confirmPwdError}
                ></Input>
              </div>
              <button type="submit" onClick={onSubmit}>Sign Up</button>
              <small>
                By Clicking on the button you are agreeing to our{" "}
                <a href="#" id="signup">
                  tearms and conditions.
                </a>
              </small>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Register;
