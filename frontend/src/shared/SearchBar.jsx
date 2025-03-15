import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import {  toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./../utils/config";
function SearchBar() {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();
  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      toast.warn("همه فیلدها باید پر شوند!", {
        position: "top-center",
      });
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok)
      toast.warn("مشکلی پیش امده", {
        position: "top-center",
      });
    const result = await res.json();
    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSiza=${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>مقصد</h6>
              <input
                type="text"
                placeholder="به کجا می‌خواهید بروید؟"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>مسافت</h6>
              <input
                type="number"
                placeholder="مسافت (کیلومتر)"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>حداکثر تعداد افراد</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
         <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
