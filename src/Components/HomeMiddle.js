import React from "react";

function HomeMiddle() {
  // const bgStyle = {
  //   backgroundImage: "url('https://i.postimg.cc/cLqcTybj/feedback2.jpg')",
  //   width: "100%",
  // };
  return (
    <>
      <div class="px-4 pt-3  text-center ">
        <h1 class="display-3 fw-bold text-body-emphasis  ">
          <img
            src="./assets/feddback3.jpeg"
            class="img-fluid border rounded-5 shadow-lg m-4"
            alt="Example image"
            width="60"
            height="60"
            loading="lazy"
          />
          Zidio Development
        </h1>

        <div class="" style={{}}>
          <div class="container px-5">
            <img
              src="./assets/feedback1.png"
              class="img-fluid border rounded-3 shadow-lg mb-4 border border-black border-3"
              alt="Example image"
              width="100%"
              height="1200"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMiddle;
