import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import { Button, Container } from "reactstrap";
import "./dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function HeaderDashboard({ user }) {
  const { username } = user?.data;
  const { role } = user;
  const router = useNavigate()
  return (
    <Container className="headerDashboard">
      <h3>
        <img width={80} src={avatar} alt="User Avatar" />
        {role === "admin" && "ادمین "}
        {role === "user" && "کاربر "}:{username}
      </h3>

      <Link to={'/'} style={{color:"#fff"}} className="primary__btn btn__home"><FaHome size={20}/>{" "}برگشت به خانه</Link>
    </Container>
  );
}

export default HeaderDashboard;
