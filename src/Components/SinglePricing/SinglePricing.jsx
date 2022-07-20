import React from "react";
import "./SinglePricing.css";

const SinglePricing = ({ title, price, lesson, code, career, interview, icon }) => {
  return (
    <div className="price-block">
      <p>{icon}</p>
      <h2>{price}</h2>
      <hr/>
      <h2>{title}</h2>
      <p>{lesson}</p>
      <p>{code}</p>
      <p>{career}</p>
      <p>{interview}</p>
    </div>
  );
};

export default SinglePricing;
