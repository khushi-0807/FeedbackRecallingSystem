import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import LoginAsUser from "./Components/LoginAsUser";
// import ProductFeedback from "./Components/ProductFeedback";
import UserFeedback from "./Components/UserFeedback";
import ProductFeedbackQuiz from "./Components/ProductFeedbackQuiz";
import QueryFeedback from "./Components/QueryFeedback";
import TrainingFeedback from "./Components/TrainingFeedback";
import SuggestionFeedback from "./Components/SuggestionFeedback";
import SessionFeedback from "./Components/SessionFeedback";
import AdminLAndingPage from "./Components/AdminLAndingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginAsUser" element={<LoginAsUser />} />
        <Route path="/LoginAsAdmin" element={<LoginAsUser />} />

        <Route path="/ProductFeedbackQuiz" element={<ProductFeedbackQuiz />} />
        <Route path="/UserFeedback" element={<UserFeedback />} />
        <Route path="/QueryFeedback" element={<QueryFeedback />} />
        <Route path="/TrainingFeedback" element={<TrainingFeedback />} />
        <Route path="/SuggestionFeedback" element={<SuggestionFeedback />} />
        <Route path="/SessionFeedback" element={<SessionFeedback />} />
      </Routes>
    </Router>
    // <AdminLAndingPage />
  );
}

export default App;
