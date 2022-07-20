import React, { Component } from "react";
import "./App.css";
import SinglePricing from "./Components/SinglePricing/SinglePricing";
import ToggleButton from "./Components/ToogleButton/ToggleButton";
import { FcAndroidOs } from "react-icons/fc";
import { FcElectricity } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";

class App extends Component {
  render() {
    return (
        <div className="price-container">
          <h1>React Pricing Table</h1>
          
          <SinglePricing
          icon={<FcAndroidOs />} 
          price={"€20"}
          title={"Basic"} 
          lesson={"Free Lessons"}
          code={"Basic IDE"}
          career={"Career Paths"}
          interview={"Mock Interviews"}
          />

          <SinglePricing
          icon={<FcElectricity />}
          price={"€45"}
          title={"Pro"}
          lesson={"Pro Lessons"}
          code={"Pro IDE"}
          career={"Career Paths"}
          interview={"Mock Interviews"}
          />

          <SinglePricing
          icon={<FcGraduationCap />}
          price={"€85"} 
          title={"Exclusive"}
          lesson={"Face to Face"}
          code={"Pro IDE"}
          career={"Career Guidance"}
          interview={"Mock Interviews"}
          />
          <ToggleButton />
        </div>
    );
  }
}

export default App;
