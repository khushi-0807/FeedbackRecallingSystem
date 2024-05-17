import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function QueryFeedback() {
  // State hooks to manage form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send data to backend using Axios POST request
      console.log(name, email, query);
      await axios.post("http://localhost:5000/auth/query", {
        name: name,
        email: email,
        query: query
      }).then((res)=>{
        navigate('/');
      });
      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setQuery("");
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Error submitting query. Please try again later.");
    }
  };

  return (
    <>
      <div className="px-4 py-3  text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-question-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
        </svg>
        <h1 className="display-5 fw-bold text-body-emphasis ">Query Feedback</h1>
      </div>
      <div className="container border border-black border-3 rounded-2">
        <div className="row flex-lg-row-reverse align-items-center  py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="./assets/QueryPhoto.jpeg"
              className="d-block border rounded-2 border-black "
              alt="Bootstrap Themes"
              width="590"
              height="450"
            />
          </div>
          <div className="col-lg-6">
            <div className="col-md-10 mx-auto">
              <form
                className="p-4 p-md-5 rounded-3 bg-body-tertiary border border-black border-2"
                onSubmit={handleSubmit}
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control border border-black border-1"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control border border-black border-1"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className=" mb-3">
                  <textarea
                    className="form-control border border-black border-1"
                    rows="5"
                    id="query"
                    placeholder="Write your query here..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QueryFeedback;