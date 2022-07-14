import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import contect
import { Data } from "../App";

// import components
import Navbar from "../Sections/Navbar";
import Apply from "./../Sections/Apply";
import Contact from "./../Sections/Contact";
import Footer from "./../Sections/Footer";

const Details = () => {
  const students = useContext(Data);

  const { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {
    setStudent(students.filter((student) => +student.id === +id)[0]);
  }, [id, students]);

  const {
    name,
    img,
    address,
    github,
    linkedin,
    video,
    Bio,
    project,
    speciality,
  } = student;

  return (
    <div className="details">
      {/* __________________Navbar Section__________________________  */}
      <Navbar></Navbar>

      {/* __________________Info Section__________________________  */}
      <div className="info">
        <div className="container">
          {/* start details */}
          <div className="row">
            <div className="col-md-4">
              <div className="left">
                <div className="image">
                  <img src="img/Profile pic back ground.png" alt="..." />
                  <img src={img !== "" ? img : "img/avatar.png"} alt="..." />
                </div>
                <div className="content">
                  <div className="address">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>{address}</span>
                  </div>
                  <div className="separator"></div>
                  <div className="social-media">
                    <div>More About {name ? name.split(" ")[0] : ""} at:</div>
                    <a href={github}>
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href={linkedin}>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="right">
                <div className="name">
                  <h2>{name}</h2>
                  <p className="about">{Bio}</p>
                </div>
                <div className="specialisation">
                  <h3>{speciality}</h3>
                  <p className="description">{project}</p>
                </div>
              </div>
            </div>
          </div>

          {/* start video */}
          <div className="video">
            <iframe
              title={id}
              width="100%"
              height="600"
              src={video}
              frameBorder="0"
              allow="autoplay; encrypted-media;"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* __________________Apply Section__________________________  */}
      <Apply></Apply>

      {/* __________________Contact Section__________________________  */}
      <Contact></Contact>

      {/* __________________Final Footer__________________________  */}
      <Footer></Footer>
    </div>
  );
};

export default Details;
