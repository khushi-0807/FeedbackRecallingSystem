import React from "react";
import HomeNav from "./HomeNav";
import HomeMiddle from "./HomeMiddle";
import SelectFeedback from "./SelectFeedback";
import RegisterButton from "./RegisterButton";
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel";

function Home() {
  return (
    <>
      <HomeNav />
      <HomeMiddle />
      <RegisterButton />
      <SelectFeedback />
      <HomeCarousel />
      <Footer />
    </>
  );
}

export default Home;
