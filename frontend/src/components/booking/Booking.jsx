import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./booking.css";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

import { Form, ListGroup, FormGroup, ListGroupItem } from "reactstrap";
import { toast } from "react-toastify";

function Booking({ tour, avgRating }) {
  const navigate = useNavigate();
  const { price, reviews, title } = tour;
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user.data._id,
    userEmail: user && user.data.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
  });

  const changeHandler = (e) => {
    const id = e.target.id;
    let value = e.target.value;

    if (id === "bookAt") {
      value = new Date(value).getTime();
    }

    setBooking((prev) => ({ ...prev, [id]: value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const clickHandler = async (e) => {
    e.preventDefault();

    if (!user) {
      return toast.warning("لطفا ثبت نام کنید !");
    }

    try {
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      if (!res.ok) {
        return toast.warning(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex justify-content-between align-items-center">
        <h3>
          {price} تومان <span>/هر نفر</span>
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length} نظر)
        </span>
      </div>

      <div className="booking__form">
        <h5>اطلاعات</h5>
        <Form className="booking__info-form" onSubmit={clickHandler}>
          <FormGroup>
            <input
              type="text"
              placeholder="نام کامل"
              id="fullName"
              required
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="شماره تلفن"
              id="phone"
              required
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" id="bookAt" required onChange={changeHandler} />
            <input
              type="number"
              placeholder="تعداد مهمان"
              id="guestSize"
              required
              onChange={changeHandler}
            />
          </FormGroup>
          <button
            type="submit"
            className="btn primary__btn w-100 mt-4"
            style={{ color: "white" }}
          >
            رزرو اکنون
          </button>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              {price} تومان <i className="ri-close-line"></i> 1 نفر
            </h5>
            <span>{price} تومان</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>هزینه خدمات</h5>
            <span>{serviceFee} تومان</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>مجموع</h5>
            <span>{totalAmount} تومان</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}

export default Booking;
