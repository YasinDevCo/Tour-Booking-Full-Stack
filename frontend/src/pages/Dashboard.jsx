import React, { useContext, useState } from "react";
import HeaderDashboard from "../components/dashboard/HeaderDashboard";
import FormDashboard from "../components/dashboard/FormDashboard";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { TiUserAdd } from "react-icons/ti";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { Button, Container } from "reactstrap";
import UsersDashboard from "../components/dashboard/UsersDashboard";
import PostDashboard from "../components/dashboard/PostDashboard";
import BookingDashboard from "../components/dashboard/BookingDashboard";
import SettingDashboard from "../components/dashboard/SettingDashboard";
import "../styles/dashboard.css"
function Dashboard() {
  const { user, dispatch } = useContext(AuthContext);
  const { username, email, password } = user?.data;

  const [itemNavbar, setItemNavbar] = useState(1);
  const [credentials, setCredentials] = useState({
    username: username,
    email: email,
    password: password || undefined,
  });
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setTimeout(() => {
      navigate("/");
    }, 100);
  };
  return (
    <>
      <HeaderDashboard user={user} logout={logout} />
      <Container className="sectionDashboard">
        {user?.role === "admin" ? (
          <menu className="menuDashboard">
            <ul>
              <li className="active" onClick={() => setItemNavbar(1)}>
                <ImProfile size={25} color="var( --primary-color)" />
                <span>پروفایل</span>
              </li>
              <li onClick={() => setItemNavbar(2)}>
                <TiUserAdd size={25} color="var(--heading-color)" />
                <span>کاربران</span>
              </li>
              <li onClick={() => setItemNavbar(3)}>
                <MdOutlinePostAdd size={25} color="var(--heading-color)" />
                <span>پست ها</span>
              </li>
              <li onClick={() => setItemNavbar(4)}>
                <FaTicketAlt size={25} color="var(--heading-color)" />
                <span>رزرو ها</span>
              </li>
              <li onClick={() => setItemNavbar(5)}>
                <IoSettingsSharp size={25} color="var(--heading-color)" />
                <span>تنظیمات سایت</span>
              </li>
              <li>
                <IoLogOut size={25} color="red" onClick={logout} />
                <Button className="logout" onClick={logout}>
                  خروج از حساب
                </Button>
              </li>
            </ul>
          </menu>
        ) : (
          <menu className="menuDashboard">
            <ul>
              <li className="active" onClick={() => setItemNavbar(1)}>
                <ImProfile size={25} color="var( --primary-color)" />
                <span>پروفایل</span>
              </li>

              <li onClick={() => setItemNavbar(4)}>
                <FaTicketAlt size={25} color="var(--heading-color)" />
                <span>رزرو ها</span>
              </li>
              <li onClick={() => setItemNavbar(5)}>
                <IoSettingsSharp size={25} color="var(--heading-color)" />
                <span>تنظیمات سایت</span>
              </li>
              <li>
                <IoLogOut size={25} color="var(--heading-color)" />
                <Button className="logout" onClick={logout}>
                  خروج از حساب
                </Button>
              </li>
            </ul>
          </menu>
        )}

        <main className="mainDashboard">
          {itemNavbar === 1 && (
            <>
              {/* پروفایل  */}
              <FormDashboard
                user={user}
                credentials={credentials}
                setCredentials={setCredentials}
              />
            </>
          )}
          {itemNavbar === 2 && (
            <>
              {" "}
              {/* کاربران */}
              <UsersDashboard />
            </>
          )}
          {itemNavbar === 3 && (
            <>
              {" "}
              {/* پست */}
              <PostDashboard />
            </>
          )}
          {itemNavbar === 4 && (
            <>
              {" "}
              {/* رزرو */}
              <BookingDashboard user={user} />
            </>
          )}
          {itemNavbar === 5 && (
            <>
              {" "}
              {/* تنظیمات */}
              <SettingDashboard user={user} />
            </>
          )}
        </main>
      </Container>
    </>
  );
}

export default Dashboard;
