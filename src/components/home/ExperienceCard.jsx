import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.company && (<><strong>{data.company}</strong><br /></>)}
          {data.date}
        </p>
        {data.points && (
          <ul className="text-start mx-auto" style={{ maxWidth: "30rem" }}>
            {data.points.map((p, i) => (<li key={i}>{p}</li>))}
          </ul>
        )}

      </div>
    </Col>
  );
}

export default ExperienceCard;