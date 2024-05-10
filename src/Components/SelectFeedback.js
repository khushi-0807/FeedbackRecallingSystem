import React from "react";
import { useNavigate } from "react-router";

function SelectFeedback() {
  const navigate = useNavigate();
  const ProducthandleClick = () => {
    navigate("/ProductFeedbackQuiz");
  };
  const QueryhandleClick = () => {
    navigate("/QueryFeedback");
  };
  const TraininghandleClick = () => {
    navigate("/TrainingFeedback");
  };
  const SuggestionhandleClick = () => {
    navigate("/SuggestionFeedback");
  };
  const SessionhandleClick = () => {
    navigate("/SessionFeedback");
  };
  return (
    <div className="container">
      <h2 class="pb-2 border-dark border-bottom display-5 fw-bold text-center mb-4">
        Speak Up: Your Feedback Drives Our Progress!
      </h2>
      <div class="row ">
        <div class="col-lg-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            fill="currentColor"
            class="bi bi-person-circle bd-placeholder-img rounded-circle justify-content-center"
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>

          <h2 class="fw-normal ">Product Feedback</h2>
          <p></p>
          <p>
            <button class="btn btn-secondary" onClick={ProducthandleClick}>
              Feedback »
            </button>
          </p>
        </div>
        <div class="col-lg-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            fill="currentColor"
            class="bi bi-person-circle bd-placeholder-img rounded-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>

          <h2 class="fw-normal">User Feedback</h2>
          <p></p>
          <p>
            <button class="btn btn-secondary" onclick="  ">
              Feedback »
            </button>
          </p>
        </div>
        <div class="col-lg-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            fill="currentColor"
            class="bi bi-person-circle bd-placeholder-img rounded-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>

          <h2 class="fw-normal">Training Feedback</h2>
          <p></p>
          <p>
            <button class="btn btn-secondary" onClick={TraininghandleClick}>
              Feedback »
            </button>
          </p>
        </div>
        <div class="col-lg-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            fill="currentColor"
            class="bi bi-person-circle bd-placeholder-img rounded-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>

          <h2 class="fw-normal">Session Feedback</h2>
          <p></p>
          <p>
            <button class="btn btn-secondary" onClick={SessionhandleClick}>
              Feedback »
            </button>
          </p>
        </div>
        <div class="col-lg-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            fill="currentColor"
            class="bi bi-person-circle bd-placeholder-img rounded-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>

          <h2 class="fw-normal">Suggestion Feedback</h2>
          <p></p>
          <p>
            <button class="btn btn-secondary" onClick={SuggestionhandleClick}>
              Feedback »
            </button>
          </p>
        </div>
        <div class="col-lg-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            fill="currentColor"
            class="bi bi-person-circle bd-placeholder-img rounded-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>

          <h2 class="fw-normal">Query Feedback</h2>
          <p></p>
          <p>
            <button class="btn btn-secondary" onClick={QueryhandleClick}>
              Feedback »
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectFeedback;
