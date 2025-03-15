import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

import registerImg from "../assets/images/register.jpg";
import userIcone from "../assets/images/user.png";
import "../styles/login.css";
import { toast } from "react-toastify";

function Register() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    role:"user"
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
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok)
        return toast.warning(result.message, { position: "top-center" });
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
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
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcone} alt="" />
                </div>
                <h2>ثبت‌نام</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="نام کاربری"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
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
                    ایجاد حساب کاربری
                  </Button>
                  <p>
                    قبلاً حساب کاربری دارید؟{" "}
                    <Link to={"/login"}>وارد شوید</Link>
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

export default Register;
