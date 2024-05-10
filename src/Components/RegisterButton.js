import React from "react";
import { useNavigate } from "react-router";

function RegisterButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/LoginAsUser");
  };
  const handleClik = () => {
    navigate("/LoginAsAdmin");
  };
  return (
    <>
      <div class=" mx-auto">
        <p class=" mx-5 my-4 text-black  justify-content-center blockquote">
          At our core, we believe in the power of feedback to drive meaningful
          change and improvement. Your insights are the lifeblood of our
          platform, shaping every aspect of what we do. We welcome your
          thoughts, suggestions, and critiques with open arms, knowing that they
          are invaluable in helping us refine and enhance the user experience.
          Together, let's collaborate to build a community that thrives on open
          communication and continuous evolution.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            class="btn btn-primary btn-outline-secondary text-white btn-lg px-5  py-3 me-sm-3"
            onClick={handleClick}
          >
            For User
          </button>
          <button
            type="button"
            class="btn btn-primary text-white btn-outline-secondary btn-lg px-5 py-3"
            onClick={handleClik}
          >
            For Admin
          </button>
        </div>
      </div>
    </>
  );
}

export default RegisterButton;
