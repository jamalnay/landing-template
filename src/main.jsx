import React from "react";
import ReactDOM from "react-dom/client";
import CompaniesList from "./components/CompaniesList";
import "./index.css";
import FeaturesList from "./components/FeaturesList";
import TestimonialsList from "./components/TestimonialsList";

ReactDOM.createRoot(document.getElementById("companies-list")).render(
  <React.StrictMode>
    <CompaniesList />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("features-section")).render(
  <React.StrictMode>
    <FeaturesList />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("testimonials-cards")).render(
  <React.StrictMode>
    <TestimonialsList />
  </React.StrictMode>
);
