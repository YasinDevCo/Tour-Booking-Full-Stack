import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../assets/images/login.jpg";
import userIcone from "../assets/images/user.png";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

import "../styles/login.css";
import { toast } from "react-toastify";

function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      // const role =result
    
      
      if (!res.ok) {
        return toast.warning(result.message, { position: "top-center" });
      }
      toast.success(result.message, { position: "top-center" });
      dispatch({ type: "LOGIN_SUCCESS", payload: result });
      
      navigate("/dashboard");
      
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      toast.error(error.message, { position: "top-center" });
    }
  };
  return (
    <section dir="ltr">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcone} alt="" />
                </div>
                <h2>ورود</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="ایمیل"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="رمز عبور"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    ورود
                  </Button>
                  <p>
                    حساب کاربری ندارید؟ <Link to={"/register"}>ایجاد کنید</Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
