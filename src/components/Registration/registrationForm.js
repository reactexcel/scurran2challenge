import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Spinner, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registrationForm.css";
import { RegistationRequest } from "../../redux/actions";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [option, setoptions] = useState("Admin");

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const regisstatus = state.Registrationstatus;

  const handlesubmit = (e) => {
    e.preventDefault();
    let formData = {
      email: email,
      username: userName,
      password: password.trim(),
      option: option,
    };
    console.log(formData, "============");
    dispatch(RegistationRequest(formData));
    setemail("");
    setpassword("");
  };
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Hotel App</Navbar.Brand>
        </Link>

        <Link to="/">
          <Button variant="outline-primary">Login</Button>
        </Link>
      </Navbar>
      <div className="Registration">
        <h2>Signup</h2>
      </div>
      {/* <div>
        <p style={{ color: "red" }}>** Select user Type</p>
      </div> */}
      <div className="Registration">
        <Form validated onSubmit={handlesubmit}>
          <Form.Group>
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              minLength="8"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={email && password ? false : true}
            // onClick={() => handlesubmit()}
          >
            {regisstatus?.isLoading === true ? (
              <Spinner
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null}
            {regisstatus?.isLoading === true ? null : <span>Submit</span>}
          </Button>
          <div className="message">
            {regisstatus?.error &&
            regisstatus?.error.error &&
            !regisstatus?.isRegistered ? (
              <h6 style={{ color: "Red" }}>{regisstatus?.error?.message}</h6>
            ) : null}
            {regisstatus?.isRegistered ? (
              <h6 style={{ color: "green" }}>
                You have Successfully Registered
              </h6>
            ) : null}
          </div>
        </Form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 220">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,64L34.3,53.3C68.6,43,137,21,206,53.3C274.3,85,343,171,411,224C480,277,549,299,617,256C685.7,213,754,107,823,101.3C891.4,96,960,192,1029,213.3C1097.1,235,1166,181,1234,160C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </React.Fragment>
  );
};

export default Registration;
