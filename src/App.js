import React, { useState } from "react";
import "./App.css";
import SinglePricing from "./Components/SinglePricing/SinglePricing";
import ToggleButton from "./Components/ToogleButton/ToggleButton";
import { FcAndroidOs } from "react-icons/fc";
import { FcElectricity } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";

export default function App() {
  const [pricetag, setPriceTag] = useState(["€20", "€45", "€75"]);
  const [isannual, setIsAnnual] = useState(false);

  return (
    <div
      className="price-container"
      style={
        isannual
          ? { backgroundColor: "rgb(67, 24, 102)" }
          : { backgroundColor: "aqua" }
      }
    >
      <h1>React Pricing Table</h1>

      <SinglePricing
        icon={<FcAndroidOs />}
        price={pricetag[0]}
        title={"Basic"}
        lesson={"Free Lessons"}
        code={"Basic IDE"}
        career={"Career Paths"}
        interview={"Mock Interviews"}
      />

      <SinglePricing
        icon={<FcElectricity />}
        price={pricetag[1]}
        title={"Pro"}
        lesson={"Pro Lessons"}
        code={"Pro IDE"}
        career={"Career Paths"}
        interview={"Mock Interviews"}
      />

      <SinglePricing
        icon={<FcGraduationCap />}
        price={pricetag[2]}
        title={"Exclusive"}
        lesson={"Face to Face"}
        code={"Pro IDE"}
        career={"Career Guidance"}
        interview={"Mock Interviews"}
      />
      <ToggleButton 
      setIsAnnual={setIsAnnual} 
      setPriceTag={setPriceTag}
      isannual={isannual} />
    </div>
  );
}
