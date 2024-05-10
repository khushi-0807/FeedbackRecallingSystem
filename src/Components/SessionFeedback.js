import React from "react";

function SessionFeedback() {
  return (
    <>
      <div>
        <img src="./assets/SessionFeedback.jpg" class="w-100"></img>
      </div>
      <div class="container">
        <div class="px-4 py-3  text-center border-bottom border-3 mx-3">
          <h1 class="display-4 fw-bold text-body-emphasis ">
            Session Feedback
          </h1>
        </div>
        <div class="col-lg-8 mx-auto">
          <div class="d-flex     ">
            <div class="mx-5">
              <label class="blockquote m-2 mx-2 fw-bold">Name</label>
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
              <label class="blockquote m-2 mx-2 fw-bold">Email</label>
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
          <div class=" m-5  ">
            <p class="blockquote mx-1 fw-bold">Course Title</p>
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
              Presenter/Instructor name of course title
            </p>
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
            <p class="blockquote mx-2 fw-bold">Presentation</p>
            <div>
              <div>
                <ul class=" d-flex">
                  <li class="list-group-item w-50  mx-5 fw-bold">Aspects</li>
                  <li class="list-group-item mx-4 fw-bold">Strongly Agree</li>
                  <li class="list-group-item mx-5 fw-bold">Agree</li>
                  <li class="list-group-item mx-4 fw-bold">Neutral</li>
                  <li class="list-group-item mx-5 fw-bold">Disagree</li>
                  <li class="list-group-item mx-1 fw-bold">
                    Strongly Disagree
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Well Organized and flowed smoothly</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Just the right length and time</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>The format was good</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Clear and understandable</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Handouts were useful and clear</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>After attending the session, I feel</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>confident to be able to use the library resources</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class=" col-lg-8 m-5  ">
            <p class="blockquote mx-3 fw-bold">
              Overall rating of the presentation
            </p>
            <div class="d-flex my-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-1 fw-bold">
              What subject / part of the presentation was clear and you found
              most relevant and helpful
            </p>
            <div>
              <textarea
                class="form-control border-black "
                rows="3"
                id="comment"
                placeholder="Type your answer here...
              "
              ></textarea>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-1 fw-bold">
              What subject / part of the presentation was not clear and needed
              more explanation
            </p>
            <div>
              <textarea
                class="form-control border-black "
                rows="3"
                id="comment"
                placeholder="Type your answer here...
              "
              ></textarea>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-1 fw-bold">
              Did the session meet your expectations?
            </p>
            <div>
              <textarea
                class="form-control border-black "
                rows="3"
                id="comment"
                placeholder="Type your answer here...
              "
              ></textarea>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-1 fw-bold">
              What do you suggest to improve the session?
            </p>
            <div>
              <textarea
                class="form-control border-black "
                rows="3"
                id="comment"
                placeholder="Type your answer here...
              "
              ></textarea>
            </div>
          </div>
          <div class=" m-5  ">
            <p class="blockquote mx-2 fw-bold">Presenter / Instructor</p>
            <div>
              <div>
                <ul class=" d-flex">
                  <li class="list-group-item w-50  mx-5 fw-bold">Aspects</li>
                  <li class="list-group-item mx-4 fw-bold">Strongly Agree</li>
                  <li class="list-group-item mx-5 fw-bold">Agree</li>
                  <li class="list-group-item mx-4 fw-bold">Neutral</li>
                  <li class="list-group-item mx-5 fw-bold">Disagree</li>
                  <li class="list-group-item mx-1 fw-bold">
                    Strongly Disagree
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Well prepared , well organized</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Presented in clear and understandable manner</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Knowledgeable</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Class examples were helpful and clarifying issues</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>
                      Encourage the students to ask, and answered properly
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="my-5">
                <ul class=" d-flex ">
                  <li class="list-group-item  w-25 ">
                    <div>Has an effective and strong communication skills</div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4  border border-bottom border-black border-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-5 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-4 border border-bottom border-black border-2  mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="form-check">
                      <input
                        class="form-check-input mx-2 border border-bottom border-black border-2 mx-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class=" col-lg-8 m-5  ">
            <p class="blockquote mx-3 fw-bold">
              Overall Rating of the presenter
            </p>
            <div class="d-flex my-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-star mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3  text-center border-bottom border-3 mx-3">
          <button
            type="button"
            class="btn btn-primary  btn-outline-secondary text-white border-black border-2 btn-lg px-4 my-4 me-sm-3"
          >
            Submit
          </button>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 mt-4">
          <h1 class="display-4 fw-bold text-body-emphasis ">Thank You!</h1>
        </div>
      </div>
    </>
  );
}

export default SessionFeedback;
