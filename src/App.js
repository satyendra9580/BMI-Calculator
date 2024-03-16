import React, { useState } from "react";
import './index.css';

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const calcbmi = (e) => {
    e.preventDefault();
    if (!weight || !height || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Enter valid weight and height");
    } else {
      const bmiValue = (weight / (height * height)).toFixed(1);
      setBmi(bmiValue);
  
      if (bmiValue < 18.5) {
        setMessage("You are underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("You are healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  };
  

  const reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="container">
        <form onSubmit={calcbmi}>
          <h1 className="heading">BMI Calculator</h1>
          <div className="weight">
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter your Weight"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height (m)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="btn-section">
            <button className="btn" type="submit">Submit</button>
            <button className="btn-reload" type="button" onClick={reload}>
              Reload
            </button>
          </div>
        </form>
        {bmi && <div>
          <h3 className="center">Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>}
      </div>
    </div>
  );
}
