import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { BASE_URL } from "../../utils/config";
import { toast } from "react-toastify";
import { FaUserEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

function UsersDashboard() {
  const [addUser, setAddUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [users, setUsers] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users`);
        const result = await response.json();
        if (response.ok) {
          setUsers(result.data);
        } else {
          console.error(result.message);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleChangeAddUser = (e) => {
    const { id, value } = e.target;
    setAddUser((prevState) => ({ ...prevState, [id]: value }));
  };

  const addUserHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addUser),
      });
      const result = await res.json();
      if (!res.ok) return toast.warning(result.message);

      setUsers((prevUsers) => [...prevUsers, result.data]);
      toast.success("کاربر جدید با موفقیت اضافه شد");
      setAddUser({ username: "", email: "", password: "", role: "" });
      setAddModal(false);
    } catch (err) {
      toast.error("خطا در افزودن کاربر");
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟"))
      return;

    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        toast.success("کاربر با موفقیت حذف شد!");
      } else {
        toast.error("خطا در حذف کاربر");
      }
    } catch (error) {
      toast.error("خطای شبکه در حذف کاربر");
    }
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user._id === userId);
    setSelectedUser(userToEdit);
    setEditModal(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [id]: value }));
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/users/${selectedUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedUser),
      });
      const result = await res.json();
      if (!res.ok) return toast.warning(result.message);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === selectedUser._id ? result.data : user
        )
      );
      toast.success("کاربر با موفقیت به‌روزرسانی شد");
      setEditModal(false);
    } catch (err) {
      toast.warning("خطا در به‌روزرسانی کاربر");
    }
  };

  return (
    <div className="usersDashboard">
      <h3>لیست کاربران</h3>
      <Button color="primary" onClick={() => setAddModal(true)}>
        <FaPlus /> افزودن کاربر
      </Button>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user._id} className="user-item">
            <div className="user-info">
              <h4>{user.username}</h4>
              <span style={{ color: user.role === "admin" ? "red" : "black" }}>
                {user.role}
              </span>
            </div>
            <div className="user-actions">
              <button className="edit-btn" onClick={() => handleEdit(user._id)}>
                <FaUserEdit /> ویرایش
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(user._id)}
              >
                <FaTrashAlt /> حذف
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* مدال افزودن کاربر */}
      <Modal isOpen={addModal} toggle={() => setAddModal(false)}>
        <ModalHeader
          toggle={() => setAddModal(false)}
          className="modal__header"
        >
          <span> افزودن کاربر</span>
        </ModalHeader>
        <ModalBody>
          <Form className="modal__form" onSubmit={addUserHandler}>
            <input
              type="text"
              placeholder="نام کاربری"
              required
              id="username"
              onChange={handleChangeAddUser}
              value={addUser.username}
            />
            <input
              type="email"
              placeholder="ایمیل"
              required
              id="email"
              onChange={handleChangeAddUser}
              value={addUser.email}
            />
            <input
              type="password"
              placeholder="رمز عبور"
              required
              id="password"
              onChange={handleChangeAddUser}
              value={addUser.password}
            />
            <input
              type="text"
              placeholder="نقش کاربر (admin/user)"
              required
              id="role"
              onChange={handleChangeAddUser}
              value={addUser.role}
            />
            <ModalFooter>
              <Button color="primary" type="submit">
                افزودن
              </Button>
              <Button color="secondary" onClick={() => setAddModal(false)}>
                بستن
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>

      {/* مدال ویرایش کاربر */}
      <Modal isOpen={editModal} toggle={() => setEditModal(false)}>
        <ModalHeader
          toggle={() => setEditModal(false)}
          className="modal__header"
        >
          <span> ویرایش کاربر</span>{" "}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={updateUserHandler} className="modal__form">
            <input
              type="text"
              id="username"
              value={selectedUser?.username || ""}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              value={selectedUser?.email || ""}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="role"
              value={selectedUser?.role || ""}
              onChange={handleChange}
              required
            />
            <ModalFooter>
              <Button color="primary" type="submit">
                به‌روزرسانی
              </Button>
              <Button color="secondary" onClick={() => setEditModal(false)}>
                بستن
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default UsersDashboard;
