import React from "react";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import "./SinglePricing.css";

const SinglePricing = ({ isannual, title, price, lesson, code, career, interview, icon }) => {
  return (
    <div className="price-block">
      <p>{icon}</p>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <hr/>
      <p>{lesson}</p>
      <p>{code}</p>
      <p>{career}</p>
      <p>{interview}</p>
      <SubscribeButton isannual={isannual}/>
    </div>
  );
};

export default SinglePricing;
