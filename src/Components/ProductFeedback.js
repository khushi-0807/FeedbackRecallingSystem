import React from "react";
import HomeNav from "./HomeNav";
import { useNavigate } from "react-router";

function ProductFeedback() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ProductFeedbackQuiz");
  };

  return (
    <>
      <div class="container ">
        <HomeNav />
        <div
          style={{
            backgroundImage: "url('./assets/ProductFeedbak.png')",
            height: "640px",
            width: "1250px",
          }}
          class="mx-4 border border-black border-3"
        >
          {/* <img
            src="./assets/ProductFeedbak.png"
            class="mx-3 border border-2 border-black"
          ></img> */}
          <button
            type="button"
            class="btn btn-outline-primary btn-dark btn-lg mx-5 px-5 py-3 fw-bold"
            style={{ marginTop: "23%" }}
            onClick={handleClick}
          >
            Tell us what you think »
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductFeedback;
