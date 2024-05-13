import React, { useState } from "react";
import axios from "axios";

function SuggestionFeedback() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedOptions: [],
    businessName: "",
    details: "",
    improvementAction: "",
    receiveResponse: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (option) => {
    const selectedOptions = formData.selectedOptions.includes(option)
      ? formData.selectedOptions.filter((item) => item !== option)
      : [...formData.selectedOptions, option];

    setFormData((prevData) => ({
      ...prevData, 
      selectedOptions
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post("http://localhost:3000/auth/suggestion", {
        name:{
          firstName:formData.firstName,
          lastName:formData.lastName
        },
        email:formData.email,
        selectedOptions:formData.selectedOptions,
        businessName:formData.businessName,
        details:formData.details,
        improvementAction:formData.improvementAction,
        receiveResponse:formData.receiveResponse
      }).then((res)=>{
        console.log(res);
      });
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        selectedOptions: [],
        businessName: "",
        details: "",
        improvementAction: "",
        receiveResponse: ""
      });
      // Optionally, add any success message or redirect user
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      // Optionally, handle error messages or show a notification to the user
    }
  };

  return (
    <>
      <div className="px-4 text-center container">
        <div className="">
          <div className="px-5 mt-2">
            <img
              src="./assets/SuggestionFeedback.jpg"
              className="img-fluid border rounded-3 shadow-lg mb-4 border-black border-3"
              alt="Example image"
              width="1100"
              height="1000"
              loading="lazy"
            />
          </div>
        </div>
        <div className="border-bottom border-3">
          <h1 className="display-4 fw-bold my-4 text-body-emphasis">
            Suggestion Feedback
          </h1>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="col-lg-8 mx-auto">
            <div className="d-flex">
              <div className="mx-5">
                <label className="blockquote m-2 mx-3 fw-bold">Name</label>
                <div className="d-flex">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control border border-black border-1 mx-1 px-4 py-3"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control border border-black border-1 mx-2"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label className="blockquote m-2 fw-bold">Email</label>
                <div>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control border border-black border-1 mx-1 px-4 py-3"
                    placeholder="abc@gmail"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 m-5">
              <p className="blockquote mx-2 fw-bold">
                Please tick the boxes to show what this form is about
              </p>
              <div>
                <div className="form-check align-items-center my-2">
                  <input
                    type="checkbox"
                    className="form-check-input border-black border-2 p-2 mx-2"
                    id="complimentCheckbox"
                    name="compliment"
                    checked={formData.selectedOptions.includes("This is a Compliment")}
                    onChange={() => handleCheckboxChange("This is a Compliment")}
                  />
                  <label
                    className="form-check-label fs-5"
                    htmlFor="complimentCheckbox"
                  >
                    This is a Compliment
                  </label>
                </div>
                {/* Add checkboxes for other options */}
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input border-black border-2 p-2 mx-2"
                    id="suggestionCheckbox"
                    name="suggestion"
                    checked={formData.selectedOptions.includes("This is a Suggestion for improvement")}
                    onChange={() => handleCheckboxChange("This is a Suggestion for improvement")}
                  />
                  <label
                    className="form-check-label fs-5"
                    htmlFor="suggestionCheckbox"
                  >
                    This is a Suggestion for improvement
                  </label>
                </div>
                {/* Add remaining checkboxes similarly */}
              </div>
            </div>
            {/* Add remaining input fields and checkboxes */}
            <div className=" m-5">
              <p className="blockquote mx-2 fw-bold">Business Name</p>
              <div>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="form-control border-black"
                  id="businessName"
                  placeholder="Type your answer here..."
                />
              </div>
            </div>
            <div className=" m-5">
              <p className="blockquote mx-2 fw-bold">
                Details – Details of your compliment, suggested improvement or
                feedback
              </p>
              <div>
                <textarea
                  className="form-control border-black"
                  rows="5"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  id="details"
                  placeholder="Type your answer here..."
                />
              </div>
            </div>
            <div className=" m-5">
              <p className="blockquote mx-2 fw-bold">
                Suggested improvement action or solution
              </p>
              <div>
                <textarea
                  className="form-control border-black"
                  rows="5"
                  name="improvementAction"
                  value={formData.improvementAction}
                  onChange={handleChange}
                  id="improvementAction"
                  placeholder="Type your answer here..."
                />
              </div>
            </div>
            <div className=" col-lg-8 m-5">
              <p className="blockquote mx-2 fw-bold">
                Do you wish to receive a response on the progress?
              </p>
              <div className="form-check">
                <input
                  className="form-check-input border-black border-2 p-2 mx-2"
                  type="radio"
                  name="receiveResponse"
                  id="receiveResponseYes"
                  value="Yes"
                  checked={formData.receiveResponse === "Yes"}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="receiveResponseYes"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input border-black border-2 p-2 mx-2"
                  type="radio"
                  name="receiveResponse"
                  id="receiveResponseNo"
                  value="No"
                  checked={formData.receiveResponse === "No"}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label fs-5"
                  htmlFor="receiveResponseNo"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-center border-bottom border-3 mx-3">
            <h1 className="display-4 fw-bold text-body-emphasis">Thank You!</h1>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary btn-outline-secondary text-white border-black border-2 btn-lg px-4 my-4 me-sm-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SuggestionFeedback;