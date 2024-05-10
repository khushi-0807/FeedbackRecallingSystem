import React from "react";

function SuggestionFeedback() {
  return (
    <>
      <div class="px-4  text-center container ">
        {/* <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div> */}
        <div class=" ">
          <div class=" px-5 mt-2 ">
            <img
              src="./assets/SuggestionFeedback.jpg"
              class="img-fluid border rounded-3 shadow-lg mb-4 border-black border-3"
              alt="Example image"
              width="1100"
              height="1000"
              loading="lazy"
            />
          </div>
        </div>
        {/* <h1 class="blockquote  my-3  fw-bold text-body-emphasis">
          Share your thoughts!!
        </h1> */}
        <div class=" border-bottom  border-3">
          <h1 class="display-4 fw-bold my-4 text-body-emphasis ">
            Suggestion Feedback
          </h1>
        </div>
      </div>
      <div class="container">
        <div class="col-lg-8 mx-auto">
          <div class="d-flex     ">
            <div class="mx-5">
              <label class="blockquote m-2 mx-3 fw-bold">Name</label>
              <div class="d-flex ">
                <input
                  type="text"
                  class="form-control border border-black border-1 mx-1 px-4 py-3"
                  id="floatingInput"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  class="form-control border border-black border-1 mx-2"
                  id="floatingInput"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label class="blockquote m-2 fw-bold ">Email</label>
              <div>
                <input
                  type="text"
                  class="form-control border border-black border-1 mx-1 px-4 py-3"
                  id="floatingInput"
                  placeholder="abc@gmail"
                />
              </div>
            </div>
          </div>
          <div class=" col-lg-8 m-5  ">
            <p class="blockquote mx-2 fw-bold">
              Please tick the boxes to show what this form is about
            </p>
            <div>
              <div class="form-check align-items-center my-2">
                <input
                  class="form-check-input border-black border-2 p-2 mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label fs-5" for="flexCheckDefault">
                  This is a Compliment
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input border-black border-2 p-2 mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label fs-5" for="flexCheckChecked">
                  This is a Suggestion for improvement
                </label>
              </div>
              <div class="form-check my-2">
                <input
                  class="form-check-input border-black border-2 p-2 mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label fs-5" for="flexCheckDefault">
                  This is Feedback
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input border-black border-2 p-2 mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label  fs-5" for="flexCheckChecked">
                  This is Confidential
                </label>
              </div>
              <div class="form-check my-2">
                <input
                  class="form-check-input border-black border-2 p-2 mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label fs-5" for="flexCheckDefault">
                  This is an Enquiry
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input border-black border-2 p-2 mx-2"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label fs-5" for="flexCheckChecked">
                  This has been raised before
                </label>
              </div>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-2 fw-bold">Business Name</p>
            <div>
              <input
                type="text"
                class="form-control border-black "
                id="comment"
                placeholder="Type your answer here...
              "
              ></input>{" "}
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-2 fw-bold">
              Details – Details of your compliment, suggested improvement or
              feedback
            </p>
            <div>
              <textarea
                class="form-control border-black "
                rows="5"
                id="comment"
                placeholder="Type your answer here...
              "
              ></textarea>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-2 fw-bold">
              Suggested improvement action or solution
            </p>
            <div>
              <textarea
                class="form-control border-black "
                rows="5"
                id="comment"
                placeholder="Type your answer here...
              "
              ></textarea>
            </div>
          </div>
          <div class=" col-lg-8 m-5  ">
            <p class="blockquote mx-2 fw-bold">
              Do you wish to receive a response on the progress?
            </p>
            <div class="form-check">
              <input
                class="form-check-input border-black border-2 p-2 mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label fs-5" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input border-black border-2 p-2 mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label fs-5" for="flexRadioDefault2">
                No
              </label>
            </div>
          </div>
        </div>
        <div class="px-4 py-3  text-center border-bottom border-3 mx-3">
          <h1 class="display-4 fw-bold text-body-emphasis ">Thank You!</h1>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            class="btn btn-primary  btn-outline-secondary text-white border-black border-2 btn-lg px-4 my-4 me-sm-3"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default SuggestionFeedback;
