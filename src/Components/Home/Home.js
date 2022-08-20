import React from "react";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Services from "../Services/Services";
import Students from "../Students/Students";

const Home = () => {
  return (
    <main className="container">
      <Banner />
      <Services />
      <Students />
      <Faq/>
    </main>
  );
};

export default Home;
