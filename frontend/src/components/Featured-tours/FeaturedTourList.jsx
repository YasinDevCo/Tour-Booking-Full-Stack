import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col, CardBody } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import Loder from "../../shared/Loder";
import Error from "../../shared/Error";

function FeaturedTourList() {
  const {
    data: featuredTour,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <Loder />}
      {error && (
        <h4>
          <Error error={error} />
        </h4>
      )}
      {!loading &&
        !error &&
        featuredTour?.map((tour) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
}

export default FeaturedTourList;
