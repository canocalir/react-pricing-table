import React from "react";
import "./ToggleButton.css";

export default function ToggleButton() {
  return (
    <div className="centerer">
      <div className="switcher">
        <input
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
          type="radio"
          name="balance"
          defaultValue="Annualy"
          id="annual"
          className="switcher__input switcher__input--annual"
        />
        <label htmlFor="annual" className="switcher__label">
          Annualy
        </label>
        <span className="switcher__toggle" />
      </div>
    </div>
  );
}
