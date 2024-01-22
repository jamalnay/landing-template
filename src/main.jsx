import React from "react";
import ReactDOM from "react-dom/client";
import CompaniesList from "./components/CompaniesList";
import "./index.css";
import FeaturesList from "./components/FeaturesList";
import TestimonialsList from "./components/TestimonialsList";
import Accordion from "./components/Accordion";
import PlansList from "./components/PlansList";

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
ReactDOM.createRoot(document.getElementById("faq-accordion")).render(
  <React.StrictMode>
    <Accordion />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("plans-cards")).render(
  <React.StrictMode>
    <PlansList />
  </React.StrictMode>
);
