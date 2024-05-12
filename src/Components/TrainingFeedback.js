import React from "react";

function TrainingFeedback() {
  return (
    <>
      <div>
        <img src="./assets/TrainingFeedback..png" class="w-100"></img>
      </div>
      <div class="container">
        <div class="px-4 py-3  text-center border-bottom border-3 mx-3">
          <h1 class="display-4 fw-bold text-body-emphasis ">
            Training Feedback
          </h1>
        </div>

        <div class="col-lg-8 mx-auto">
          <div class="d-flex     ">
            <div class="mx-5">
              <label class="blockquote m-2 mx-4">Name</label>
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
              <label class="blockquote m-2 ">Email</label>
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
            <p class="blockquote mx-3">Please rate training content</p>
            <div class="d-flex mx-3 my-4">
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-1-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                  </svg>
                </a>
                <p class="mx-2">Worst</p>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-2-circle mx-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-3-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-4-circle mx-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-5-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z" />
                  </svg>
                </a>
                <p class="mx-3">Best</p>
              </div>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-3">
              What did you enjoy most about the training?
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
            <p class="blockquote mx-3">
              Please list 2-3 key learnings from today's curriculum, and how you
              anticipate applying them to your work in the future.
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
            <p class="blockquote mx-3">
              Was there any subject matter that you found confusing? If so,
              please provide specific examples.
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
            <p class="blockquote mx-3">
              What is the most valuable thing you learned today (knowledge or
              skills)?
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
            <p class="blockquote mx-3">Please rate your trainer.</p>
            <div class="d-flex mx-3 my-4">
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-1-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                  </svg>
                </a>
                <p class="mx-2">Worst</p>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-2-circle mx-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-3-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-4-circle mx-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-5-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z" />
                  </svg>
                </a>
                <p class="mx-3">Best</p>
              </div>
            </div>
          </div>

          <div class=" col-lg-8 m-5  ">
            <p class="blockquote mx-3">Please rate the overall training.</p>
            <div class="d-flex mx-3 my-4">
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-1-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                  </svg>
                </a>
                <p class="mx-2">Worst</p>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-2-circle mx-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-3-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-4-circle mx-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-5-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z" />
                  </svg>
                </a>
                <p class="mx-3">Best</p>
              </div>
            </div>
          </div>

          <div class=" m-5  ">
            <p class="blockquote mx-3">
              Any additional comments you wish to share?
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

export default TrainingFeedback;
