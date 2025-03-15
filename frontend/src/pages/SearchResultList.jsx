import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import NewsLetter from "../shared/NewsLetter";

function SearchResultList() {
  const location = useLocation();
  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"نتیجه جستوجوی تور "} />
      <section>
        <Container>
          <Row>
            {data?.length === 0 ? (
              <h4 className="text-center">توری پیدا نشد!</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
  );
}

export default SearchResultList;
