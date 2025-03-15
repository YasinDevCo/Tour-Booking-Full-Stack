import React, { useContext, useEffect, useState } from "react";
import "../styles/tour-details.css";
import { Col, Container, Row, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculatedAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import { useRef } from "react";
import Booking from "../components/booking/Booking";
import NewsLetter from "../shared/NewsLetter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "./../context/AuthContext";
import { toast } from "react-toastify";
import Loder from "../shared/Loder";
import Error from "../shared/Error";
function TourDetails() {
  const { id } = useParams();
  const reviewMsRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    address,
    city,
    distance,
    maxGroupSize,
  } = tour;
  const options = { day: "numeric", month: "long", year: "numeric" };
  const { totalRating, avgRating } = calculatedAvgRating(reviews);

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        toast.warning("لطفا ثبت نام کنید !");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();
      if (!res.ok) {
        return toast.warning(result.message);
      }
      toast.success(result.message);
    } catch (err) {
      toast.success(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section className="">
        <Container>
          {loading && <Loder />}
          {error && <Error error={error} />}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt={title} />

                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="f-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-fill"
                          style={{ color: "var(--star-color)" }}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "امتیاز دهی نشده"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i className="ri-map-pin-fill"></i>
                        {address}
                      </span>
                    </div>
                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line"></i>{price}{" "}تومان
                        /نفر
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line"></i>
                        {distance}
                        k/m
                      </span>
                      <span>
                        <i className="ri-group-line"></i>
                        {maxGroupSize}
                      </span>
                    </div>
                    <h5>توضیحات :</h5>
                    <p>{desc}</p>
                  </div>

                  <div className="tour__reviews mt-4">
                    <h4>کامنت ها : ({reviews?.length} کامنت)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="rating__group d-flex align-items-center gap-3 mb-4 ">
                        <span onClick={() => setTourRating(1)}>
                          1 <i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5 <i className="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="review__input">
                        <input
                          type="text"
                          placeholder="نظر خود را ارسال کنید"
                          // className="tour__input"
                          ref={reviewMsRef}
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          ارسال
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <>
                          <div className="review__item">
                            <img src={avatar} alt="avatar" />
                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-center-items-center">
                                  {review.rating}{" "}
                                  <i className="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        </>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
}

export default TourDetails;
