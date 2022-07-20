import React from "react";
import "./ToggleButton.css";

export default function ToggleButton({ setIsAnnual, setPriceTag, isannual }) {
  return (
    <div className="centerer">
      <div className="switcher">
        <input
          onChange={() =>
            setIsAnnual(false) & setPriceTag(["€20", "€45", "€75"])
          }
          type="radio"
          name="balance"
          defaultValue="Monthly"
          id="month"
          className="switcher__input switcher__input--month"
          defaultChecked
        />
        <label htmlFor="month" className="switcher__label">
          Monthly
        </label>
        <input
          onChange={() =>
            setIsAnnual(true) & setPriceTag(["€80", "€120", "€180"])
          }
          type="radio"
          name="balance"
          defaultValue="Annualy"
          id="annual"
          className="switcher__input switcher__input--annual"
        />
        <label htmlFor="annual" className="switcher__label">
          Annualy
        </label>
        <span
          className="switcher__toggle"
          style={
            isannual
              ? { backgroundColor: "rgb(67, 24, 102)" }
              : { backgroundColor: "aqua" }
          }
        />
      </div>
    </div>
  );
}
