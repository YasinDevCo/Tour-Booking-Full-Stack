import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "reactstrap";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/config";
import "./dashboard.css";

function FormDashboard({ user, credentials, setCredentials }) {
  const { username, email, password, _id } = user?.data;
  const id = _id;
  const [updatedCredentials, setUpdatedCredentials] = useState(credentials);
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        return toast.warning(result.message);
      }
      toast.success(result.message);
    } catch (err) {
      toast.warning(err.message);
    }
  };
  // همگام‌سازی وضعیت updatedCredentials با credentials
  useEffect(() => {
    setUpdatedCredentials(credentials);
  }, [credentials]);

  return (
    <Container className="formDashboard">
      <div className="add">
        <h4> مشخصات : {username} </h4>
        <Form className="form" onSubmit={handleClick}>
          <input
            type="text"
            placeholder={username}
            required
            id="username"
            onChange={handleChange}
            value={updatedCredentials?.username}
          />
          <input
            type="email"
            placeholder={email}
            required
            id="email"
            onChange={handleChange}
            value={updatedCredentials?.email}
          />
          <input
            type="password"
            placeholder={password}
            id="password"
            onChange={handleChange}
            value={updatedCredentials?.password}
          />
          <Button className="btn" type="submit">
            ذخیره تغییرات
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default FormDashboard;
