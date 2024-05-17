import React from "react";
import { useNavigate } from "react-router";

function AdminMiddleHeading() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(" ");
  };
  return (
    <>
      {" "}
      <div class="container">
        <div class="px-4 py-3 border-bottom border-3 mx-3 my-3 d-flex justify-content-center">
          <center><h1 class="display-5 fw-bold text-body-emphasis ">User Response's</h1></center>
          {/* <button
            type="submit"
            className="btn btn-primary rounded-3 text-bold"
            onClick={handleClick}
          >
            Export to Spreadsheet
          </button> */}
        </div>
      </div>
    </>
  );
}

export default AdminMiddleHeading;
