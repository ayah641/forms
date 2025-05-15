import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfoForm from "./PersonalInfoForm";
import SelectPlan from "./SelectPlan";
import ADD-ONS from "./ADD-ONS";
import SUMMARY from "./SUMMARY";
import StepsSidebar from "./StepsSidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PersonalInfoForm" element={<PersonalInfoForm />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/ADD-ONS" element={<ADD-ONS />} />
        <Route path="/select-plan" element={<SUMMARY />} />
      </Routes>
    </Router>
  );
}

export default App;
