import React, { useState, useRef, useEffect, useCallback } from "react";
import "./login.css";
import logo from "../assets/back.png";
// import { useNavigate } from "react-router-dom";
import Swiper from "../Components/Swiper/Swiper"
import  Col  from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card,Container} from "react-bootstrap";



const LoginForm = () => {
  const [content, setContent] = useState("");
  const [width, setWidth] = useState(372);
  const span = useRef();
  const [emailtrue, setEmailtrue] = useState(true);
  const [show, setShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   setWidth(span.current.offsetWidth);
  // }, [content]);
  const submitHandler = (e) => {
    console.log("handleSubmit ran");
    e.preventDefault();
    setWidth(`${content.length + 5}ch`);
    console.log(width);
    setShow(!show);
    setIsDisabled(true);
    if (inputtext.email == "") {
      setwarnemail(true);
      setWidth(372);
    }
  };
  const [inputtext, setinputtext] = useState({
    email: "",
    password: "",
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpassword, setwarnpassword] = useState(false);

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);

  const inputEvent = (event) => {
    setContent(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpassword(false);
    if (inputtext.email == "") {
      setwarnemail(true);
      setWidth(372);
    } else if (inputtext.password == "") {
      setwarnpassword(true);
    } else {
      alert("form submitted");
      // navigate("/home", { replace: true });
    }
  };

  const Eye = () => {
    if (password == "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };
  // const submitHandler = useCallback((callback) => async (e) => {
  //   console.log("handleSubmit ran");
  //   if (e && e.preventDefault) {
  //     // add?
  //     e.preventDefault();
  //     e.persist();
  //   }
  // });
  const submitHandler2 = (evt) => {
    setIsDisabled(false);
    setShow(!show);
  };

  return (
    <div className="login_in_container">
      <div className="signin_box">
        <div className="techie_logo">
          <img src={logo} alt="techie logo" />
        </div>
        <div className="signin_div">
          <form >
            <div className="sign_in_head">
              <span className="px-2 fs-2">Sign in</span>
              <div className="service_name fs-4 px-2 fw-normal">
                Welcome to
                <span className="fs-3 ms-1 fw-normal">JobHub</span>
              </div>
            </div>
            <div className="container">
              <div className="textbox_div">
                <div className="form-outline mb-4">
                  <span id="hide" ref={span}>
                    {content}
                  </span>
                  {/* <i className="fa fa-envelope"></i> */}
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      id="form2Example1"
                      className={`form-control textbox ${
                        warnemail ? "warning" : ""
                      }`}
                      placeholder="Enter your email address"
                      style={{ width: width }}
                      disabled={isDisabled}
                      value={inputtext.email}
                      onChange={inputEvent} 
                      name="email"
                    />
                    {!show && (
                      <span
                        type="submit"
                        className=" input-group-text"
                        onClick={submitHandler2}
                      >
                        change
                      </span>
                    )}
                  </div>
                </div>
                {show && (
                  <div
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    onClick={submitHandler}
                  >
                    Next
                  </div>
                )}
                {!show && (
                  // <Row className="input-group">
                  //   <Col sm={11}>
                  //   <div className="input-text">
                  //   <input
                  //     type={password}
                  //     id="form2Example1"
                  //     className={` textbox form-control ${
                  //       warnpassword ? "warning" : ""
                  //     } ${type ? "type_password" : ""}`}
                  //     placeholder="Enter your password"
                  //     value={inputtext.password}
                  //     onChange={inputEvent}
                  //     name="password"
                  //   />
                  // </div>
                  // <i
                  //   onClick={Eye}
                  //   className={`fa ${eye ? "fa-eye-slash" : "fa-eye"} input-group-text`}
                  // ></i>
                  //   </Col>
                  // </Row>
                  <div className="input-group mb-3">
                  <input
                    type={password}
                        id="form2Example1"
                        className={` textbox form-control ${
                          warnpassword ? "warning" : ""
                        } ${type ? "type_password" : ""}`}
                        placeholder="Enter your password"
                        value={inputtext.password}
                        onChange={inputEvent}
                        name="password"
                  />
                  {!show && (
                     <i
                       onClick={Eye}
                       className={`fa ${eye ? "fa-eye-slash" : "fa-eye"} input-group-text`}
                     ></i>
                  )}
                </div>
                )}
              </div>
            </div>
            {!show && (
              <div class="d-grid  col-11 mx-auto">
                <button className="btn btn-primary" type="button" onClick={submitForm}>
                  Sign In
                </button>
              </div>
            )}
            {!show && (
              <div className="forgot">
                <p>
                  Forgot your password? <a href="#">Reset Password</a>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="right_container">
           <Swiper/>
      </div>
    </div>
  );
};

export default LoginForm;
