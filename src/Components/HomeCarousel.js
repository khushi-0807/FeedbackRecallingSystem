import React from "react";

function HomeCarousel() {
  return (
    <>
      <div className="container" class="container my-5" height="100px">
        <h2 class="pb-2 border-dark border-bottom display-5 fw-bold text-center mb-4">
          A Glimpse of Our Website
        </h2>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner" height="100px">
            <div class="carousel-item active" height="100px">
              <img
                src="./assets/zidioimg.jpeg"
                class="d-block w-100"
                alt="Header1_image"
              />
              <div class="carousel-caption d-none d-md-block">
                {/* <h5 class="display-5 fw-bold ">MYK EXPORT COMPANY</h5>
                <p class="lead mb-4">Maxload Optimization</p>
                <a href="/Login" class="btn btn-primary btn-lg px-4 gap-3"> */}
                {/* <button
                    type="button"
                    class="btn btn-primary btn-lg px-4 gap-3"
                  > */}
                {/* Get Started */}
                {/* </button> */}
                {/* </a> */}
              </div>
            </div>
            <div class="carousel-item" height="100px">
              <img
                src="./assets/ProductFeedback.jpeg"
                class="d-block w-100"
                alt="Header1_image"
              />
              <div class="carousel-caption d-none d-md-block">
                {/* 
                <p>
                  Some representative placeholder content for the second slide.
                </p> */}
                {/* <h5 class="display-5 fw-bold"> A FEW WORDS ABOUT US</h5>
                <p class="lead mb-4">
                  Express provides professional trucking and transportation
                  services to enable our customers with the same day delivery of
                  any cargo.
                </p> */}
              </div>
            </div>
            <div class="carousel-item" height="100px">
              <img
                src="./assets/TrainingFeedback.webp"
                class="d-block w-100"
                alt="Header1_image"
              />
              <div class="carousel-caption d-none d-md-block">
                {/* <h5>Third slide label</h5> */}
                {/* <p class="lead mb-4">
                  Our numerous services include but are not limited to
                  transportation of oversized, rare and unusual commercial and
                  military cargo, as well as the planning, coordination and
                  implementation/transportation of any hazardous cargos. We even
                  provide storage services to our clients.
                </p> */}
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeCarousel;
