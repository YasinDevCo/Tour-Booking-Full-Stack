import React, { useContext, useEffect, useRef } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { TbLogin } from "react-icons/tb";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuUserRoundCog } from "react-icons/lu";

import "./header.css";
import { AuthContext } from "./../../context/AuthContext";
const nav__links = [
  {
    path: "/home",
    display: "خانه",
  },
  {
    path: "/about",
    display: "درباره",
  },
  {
    path: "/tours",
    display: "تورها",
  },
];

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user } = useContext(AuthContext);
  const role = user?.role;

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav_right d-flex align-items-center gap-4">
                <div className="nav_btns d-flex align-items-center gap-4">
                  {user?.data ? (
                    <>
                      <h5 className="mb-0">{user?.data.username}</h5>
                      <Link to={"/dashboard"} className="btn btn-dark">
                        {role === "admin" ? " پنل ادمین" : " پنل کاربر"}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Button className="btn secondary__btn">
                        <Link to="/login">ورود</Link>
                      </Button>
                      <Button className="btn primary__btn">
                        <Link to="/register">ثبت نام</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
      <div className="logo__mobile">
        <img src={logo} alt="logo" />
      </div>
      <div className="mobile__header">
        <ul>
          <li>
            <Link to="/home">
              <GrHomeRounded size={40} />
              خانه
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineExclamationCircle size={40} />
              درباره ما
            </Link>
          </li>
          <li>
            <Link to="/tours">
              <IoLocationOutline size={40} />
              تورها
            </Link>
          </li>
          {user?.data ? (
            <>
              {role === "admin" && (
                <li>
                  <Link to={"/dashboard"}>
                    {/* admin */}
                    <LuUserRoundCog size={40} />
                    پنل ادمین
                  </Link>
                </li>
              )}
              {role === "user" && (
                <li>
                  <Link to={"/dashboard"}>
                    {/* user */}
                    <LuUserRound size={40} />
                    پنل کاربری
                  </Link>
                </li>
              )}
            </>
          ) : (
            <li>
              {" "}
              <Link to={"/register"}>
                {/* goust */}
                <TbLogin size={40} />
                ورود یا ثبت نام
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
