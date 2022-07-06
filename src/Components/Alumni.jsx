import React from "react";

// import components
import Apply from "../Sections/Apply";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import Students from "./Students";

const Alumni = () => {
  return (
    <div className="alumni">
      {/* __________________Navbar Section__________________________  */}
      <Navbar></Navbar>

      {/* __________________Landing Section__________________________  */}
      <section className="landing text-center">
        <div className="container">
          <h2>Diploma Alumni</h2>
          <div className="image">
            <img src="img/Graduation Photo.png" alt="..." />
          </div>
        </div>
      </section>

      {/* __________________Student Section__________________________  */}
      <Students></Students>

      {/* __________________Apply Section__________________________  */}
      <Apply></Apply>

      {/* __________________Contact Section__________________________  */}
      <Contact></Contact>

      {/* __________________Final Footer__________________________  */}
      <Footer></Footer>
    </div>
  );
};

export default Alumni;
