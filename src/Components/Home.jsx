import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar navbar-default probootstrap-navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              aria-controls="navbar"
              aria-expanded="false"
              className="navbar-toggle collapsed"
              data-target="#navbar-collapse"
              data-toggle="collapse"
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>

          <div className="navbar-collapse collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <Link data-nav-section="home" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  // onClick={() => {
                  //   window.open("http://accvrdiploma.com/alumni/");
                  // }}
                >
                  Alumni
                </Link>
              </li>
              <li>
                <a data-nav-section="about" href="#about">
                  About
                </a>
              </li>
              <li>
                <a data-nav-section="faq" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a data-nav-section="apply" href="#apply">
                  Apply
                </a>
              </li>
              <li>
                <a data-nav-section="contact" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="probootstrap-hero prohttp://localhost/probootstrap/frame/#featuresbootstrap-slant"
        data-section="home"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(img/post1.jpg)" }}
      >
        <div className="container">
          <div className="row intro-text">
            <div className="col-md-8 col-md-offset-2 text-center">
              &nbsp;
              <h1 className="probootstrap-heading probootstrap-animate wow fadeInUp">
                Become a professional <em>VR</em> developer and join the leading
                industry worldwide!
              </h1>
              <h2>
                NEW! Free Home Kit including Meta Quest 2 during the diploma
              </h2>
              <div className="probootstrap-subheading center">
                <p className="probootstrap-animate">
                  <a
                    className="btn btn-primary wow fadeInUp"
                    href="#about"
                    role="button"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="probootstrap-section probootstrap-bg-light"
        data-section="about"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 probootstrap-section-heading">
              <h2 className="mb30 text-black probootstrap-heading text-center">
                About the program
              </h2>
            </div>
          </div>

          <div className="row text-center mb100">
            <div className="col-md-8 col-md-offset-2 probootstrap-section-heading">
              <p>
                Virtual&nbsp;Reality &amp; Augmented Reality (VR &amp;
                AR)&nbsp;is&nbsp;the hot new technology that is taking the world
                by storm. Google, Facebook, Samsung, Microsoft are all investing
                heavily in it, and it is expected to grow exponentially the next
                couple of years.
              </p>

              <p>
                Virtual reality job openings are up 1200%. Demand for skilled VR
                developers and designers who can create high-quality content is
                growing at an unprecedented rate. Join the&nbsp;new&nbsp;group
                of VR developers in Egypt.
              </p>

              <p>
                Apply&nbsp;for an 8&nbsp;week VR
                developer&nbsp;course&nbsp;offered by the&nbsp;American Center
                Cairo, U. S. Embassy Cairo in collabration with 412labs.com.
              </p>

              <h2>
                <p>
                  <b>
                    Next cycle will start July 4th, 2022 for 8 weeks. <b> </b>
                  </b>
                </p>

                <p>
                  <b>
                    <b>Deadline to apply is June 20th, 2022. Apply NOW! </b>
                  </b>
                </p>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <p>
        <b>
          <b></b>
        </b>
      </p>

      <section className="probootstrap-section">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 probootstrap-section-heading">
            <h2 className="mb30 text-black probootstrap-heading text-center">
              <b>
                <b>Provided By:</b>
              </b>
            </h2>
          </div>

          <div className="row text-center" style={{ marginBottom: "0px" }}>
            <div className="col-md-6">
              <div className="probootstrap-service-item">
                <b>
                  <b>
                    <span>
                      <center>
                        <img
                          src="img/US-Flag1.png"
                          style={{ height: "100px" }}
                          alt=""
                        />
                      </center>
                      <img
                        src="img/ACC-1_200.png"
                        style={{ height: "100px" }}
                        alt=""
                      />
                    </span>
                  </b>
                </b>
                <br />
                &nbsp;
                <p>
                  <b>
                    <b>
                      The American Center Cairo (ACC, formerly IRC), located at
                      the U.S. Embassy Cairo, is the U.S. Embassy&rsquo;s
                      primary outreach center offering daily programs and
                      information to Egyptian audiences, It is also your Gateway
                      to American Policy, Culture, Society and Values.
                    </b>
                  </b>
                </p>
                <b>
                  <b> </b>
                </b>
              </div>
            </div>

            <div className="col-md-6">
              <div className="probootstrap-service-item">
                <b>
                  <b>
                    <span>
                      <img
                        src="img/412labs-logo-RGB-1000.png"
                        style={{ height: "100px" }}
                        alt=""
                      />
                    </span>
                  </b>
                </b>
                <br />
                <br />
                <br />
                &nbsp;
                <p>
                  <b>
                    <b>
                      412labs was launched to fulfill the skyrocketing demand
                      for VR/AR services. It also has a product arm, working on
                      our own products, serving clients locally and regionally
                      including Nivea, Cerelac, Nestle, Sanofi, Asus, HERE maps,
                      and gsk among others. 412labs also has a training arm
                      developing and conducting highly focused training in areas
                      related to VR.
                    </b>
                  </b>
                </p>
                <b>
                  <b> </b>
                </b>
              </div>
            </div>
          </div>

          <div className="row text-center" style={{ marginTop: "0px" }}>
            <div className="col-md-6">
              <p>
                <b>
                  <b>
                    <a
                      className="probootstrap-link"
                      href="https://eg.usembassy.gov/education-culture/acc/"
                    >
                      Learn More
                    </a>
                  </b>
                </b>
              </p>
            </div>

            <div className="col-md-6">
              <p>
                <b>
                  <b>
                    <a
                      className="probootstrap-link"
                      href="http://www.412labs.com/"
                    >
                      Learn More
                    </a>
                  </b>
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <p>
        <b>
          <b></b>
        </b>
      </p>

      <section className="probootstrap-section probootstrap-bg-light">
        <div className="container">
          <div className="row mb100">
            <div className="col-md-8 col-md-offset-2 probootstrap-section-heading">
              <h3 className="mb30 text-black probootstrap-heading text-center">
                <b>
                  <b>What will you study?</b>
                </b>
              </h3>

              <p>
                <b>
                  <b>
                    <strong>
                      8 weeks can pass by so quickly, and there are a lot of
                      topics to cover in VR.
                    </strong>
                  </b>
                </b>
              </p>

              <ul className="probootstrap-list">
                <li className="probootstrap-check">
                  <b>
                    <b>
                      Week 1: Introduction to Unity framework, and the tools
                      used in the course
                    </b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Week 2: Introduction to Augment Reality</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Week 3: Physics Engine and User Interface design</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>
                      Week 4: Lighting / Materials / Shaders and Particle System
                    </b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>
                      Week 5: Advanced Physics / Input Systems in VR / Animation
                    </b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Week 6: Spatial Audio / Networking</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>
                      Week 7: Final Project + (Workflow of designing a Virtual
                      Reality Experience)
                    </b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>
                      Week 8: Final Project part II + (Optimizing applications)
                    </b>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <p>
        <b>
          <b></b>
        </b>
      </p>

      <section className="probootstrap-section" id="homekit">
        <div className="container">
          <div className="row mb100">
            <div className="col-md-8 col-md-pull-2 probootstrap-animate">
              <p>
                <b>
                  <b>
                    <img
                      alt="Free Template by ProBootstrap.com"
                      className="img-responsive probootstrap  wow fadeInUp"
                      src="img/quest3.png"
                    />
                  </b>
                </b>
              </p>
            </div>
            <div className="col-md-4 col-md-pull-1 probootstrap-section-heading">
              <h3 className="mb30 text-black probootstrap-heading text-center">
                <b>
                  <b>NEW: Free Home Kit!</b>
                </b>
              </h3>
              <p>
                <b>
                  <b>
                    We believe that in order to create world class VR
                    applications, participants need to be well experienced with
                    VR. Starting Spring 2022, we are providing a homekit to be
                    loaned for free to participants during the course. The kit
                    includes the best selling VR headset (Meta Quest 2), along
                    with a link cable to be able to fully experience the best
                    and latest of what VR has to offer from the comfort of your
                    home!
                  </b>
                </b>
              </p>
              <ul className="probootstrap-list">
                <li className="probootstrap-check">
                  <b>
                    <b>Meta Oculus Quest 2 VR Headset</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Elite strap w/extended battery</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Link Cable</b>
                  </b>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb100">
            <div className="col-md-8 col-md-push-5 probootstrap-animate">
              <p>
                <b>
                  <b>
                    <img
                      alt="Free Template by ProBootstrap.com"
                      className="img-responsive probootstrap wow fadeInUp"
                      src="img/software.png"
                    />
                  </b>
                </b>
              </p>
            </div>
            <div className="col-md-4 col-md-pull-8 probootstrap-section-heading">
              <h3 className="mb30 text-black probootstrap-heading text-center">
                <b>
                  <b>Software</b>
                </b>
              </h3>
              <p></p>
              <p>
                <b>
                  <b>
                    There are a variety of software tools to develop Virtual
                    Reality applications. We focus on teaching students the
                    &quot;concepts&quot; of VR, so they can develop using any
                    tools in the future. However, during the course, we strictly
                    use the Unity engine for development, using C# as the
                    programming languge. For AR, we use the Vuforia SDK, and for
                    mobile AR/VR we use the Android SDK.
                  </b>
                </b>
              </p>
              <p></p>
              <ul className="probootstrap-list">
                <li className="probootstrap-check">
                  <b>
                    <b>Unity</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>C#</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Vuforia SDK</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>AR Foundation ( AR Core + AR Kit )</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Spark AR</b>
                  </b>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb100">
            <div className="col-md-8 col-md-pull-2 probootstrap-animate">
              <p>
                <b>
                  <b>
                    <img
                      alt="Free Template by ProBootstrap.com"
                      className="img-responsive probootstrap wow fadeInUp"
                      src="img/vrgoggles.png"
                    />
                  </b>
                </b>
              </p>
            </div>
            <div className="col-md-4 col-md-pull-1 probootstrap-section-heading">
              <h3 className="mb30 text-black probootstrap-heading text-center">
                <b>
                  <b>Hardware</b>
                </b>
              </h3>
              <p>
                <b>
                  <b>
                    The&nbsp;course is designed as an introduction to the world
                    of VR and AR programming.&nbsp;It&nbsp; assumes no prior VR
                    programming. Along with the Quest 2 which will be the
                    primary device to use, a number of different VR and AR
                    setups will be studied, and you will build experiences for,
                    and get the chance to play with:
                  </b>
                </b>
              </p>
              <ul className="probootstrap-list">
                <li className="probootstrap-check">
                  <b>
                    <b>GearVR w/controllers</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Gear360</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>Windows Mixed Media headset</b>
                  </b>
                </li>
                <li className="probootstrap-check">
                  <b>
                    <b>HTC Vive</b>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <p>
        <b>
          <b></b>
        </b>
      </p>

      <section
        className="probootstrap-section last probootstrap-bg-light"
        data-section="faq"
        id="faq"
      >
        <section className="probootstrap-section">
          <div className="container">
            <div className="row text-center mb100">
              <div className="col-md-8 col-md-offset-2 probootstrap-section-heading">
                <h2 className="mb30 text-black probootstrap-heading">
                  <b>
                    <b>Sounds exciting?</b>
                  </b>
                </h2>

                <p>
                  <b>
                    <b>
                      <strong>
                        We think so too! But we&#39;re sure you have some
                        questions for us?
                      </strong>
                    </b>
                  </b>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="row"></div>

                <div className="row">
                  <div className="col-md-6">
                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>Is this really free?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          YES! The costs of the diploma is 100% covered by the
                          US Embassy, Cairo. There is however a small deposit of
                          500EGP to guarentee active participation in the
                          program. If you don&#39;t miss sessions, and complete
                          the required assignments, you will get your refund
                          back on graduation day.
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>What&#39;s the time commitment needed?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          The class meets twice a week for 8 weeks. Every week,
                          there will be 2 sessions. The first is on Mondays, and
                          is held at the US Embassy (10:30 - 3:00) and the
                          second is on Saturdays, and is held at 412labs in
                          Maadi.
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>Are you close to public transportation?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          Yes! Both the US Embassy and 412labs are close to
                          public transportation. 412Labs is few minutes walking
                          from Hadayeq El-Maadi Metro Station. The US Embassy is
                          few minutes walking from Sadat Metro Station.
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>Who are the instructors?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          We assembled a team of instructors from our company,
                          as well as leading VR developers in the country from a
                          number of companies. Our utmost commitment is for the
                          highest quality education possible in VR today!
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>I applied. Now what?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          We usually have few hundred applications, and only 10
                          seats availble. Within couple of weeks, we shortlist,
                          and call the shortlisted candidates to finalize the
                          selection. Please make sure your accurate phone number
                          is listed in the application. Once we finlized this,
                          we usually send an email to unsuccessful candidates.
                        </b>
                      </b>
                    </p>
                  </div>

                  <div className="col-md-6">
                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>Do I need to have VR experience?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          No! This course is for set for a beginner level in
                          VR/AR, it helps if you&#39;re familiar with some
                          concepts Yes. Experience in any Object Oriented
                          languge would help you greatly in this course. Since
                          the time is focused on learning VR concepts, and we
                          start coding from week 1, we ask that you kindly
                          refresh your programming knowledge. In the course, we
                          promarly use &quot;Unity&quot; as the IDE and
                          &quot;C#&quot; as the programming language.
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>How serious is the attendance?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          Since we only have limited (10) seats in every cycle,
                          the attendance policy is strictly enforced. Absence
                          for even one session without legitimate explanation,
                          will show lack of commitment and will result in the
                          forfeiture of the deposit.
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>
                          I don&#39;t have an ACC membership. Can I still apply?
                        </b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          Yes. Just please enter (NA) instead of a membership #
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>Will you offer this diploma again in the future?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          Yes. We usually offer this diploma 4 times a year.
                          Make sure you like our page, and watch out for
                          notices, and also to be on the ACC mailing list.
                          Annoucements usually happen a month ahead of each
                          diploma.
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>I am a 3D Designer / Modeler. Can I apply?</b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          3D design is an integral part in VR design, so while
                          it helps to have 3D knowledge, this is a course about
                          development. You NEED to have the programming skills
                          needed. We hope that in the future, we can offer a
                          specialized course for 3D design for VR (environment
                          artist).
                        </b>
                      </b>
                    </p>

                    <h3 className="text-black probootstrap-check-2">
                      <b>
                        <b>
                          How proficient in VR development can I expect to be
                          after graduating this diploma?
                        </b>
                      </b>
                    </h3>

                    <p>
                      <b>
                        <b>
                          Please check the graduation projects of students from
                          previous cycles
                          <a href="https://www.youtube.com/watch?v=xzbrezuUSz4&amp;list=PLuoPlelWWKSx6atz_Q3yP-afIoqjRiEWq">
                            <b>
                              <i>here</i>
                            </b>
                          </a>
                        </b>
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <b>
          <b></b>
        </b>

        <section
          className="probootstrap-section probootstrap-cta"
          data-section="apply"
          id="apply"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <h2 className="probootstrap-heading">
                  <b>
                    <b>Ready to apply?</b>
                  </b>
                </h2>

                <p className="probootstrap-sub-heading">
                  <b>
                    <b>
                      Space is very limted for this program, so please make sure
                      you read all the information on this page in detail, and
                      apply when you&#39;re ready!
                    </b>
                  </b>
                </p>

                <p>
                  <b>
                    <b>
                      <a
                        className="btn btn-black"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc4GdnyP8n8bYyQW09FbQU87rgYDesPTS1yQPt2Orp6zVERsQ/viewform?usp=sf_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Apply
                      </a>
                    </b>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </section>
        <b>
          <b></b>
        </b>

        <section
          className="probootstrap-section"
          data-section="contact"
          id="contact"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <b>
                  <b>
                    <img
                      src="img/US-Flag1.png"
                      style={{ height: "50px" }}
                      alt=""
                    />
                    <br />
                    <br />
                    <img
                      src="img/ACC-1_100.png"
                      style={{ height: "50px" }}
                      alt=""
                    />
                  </b>
                </b>
                <br />
                &nbsp;
                <ul className="probootstrap-contact-details">
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">
                          <a href="https://eg.usembassy.gov/">
                            US Embassy, Cairo's website
                          </a>
                        </span>
                      </b>
                    </b>
                  </li>
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">
                          <a href="https://eg.usembassy.gov/education-culture/acc/">
                            ACC Website
                          </a>
                        </span>
                      </b>
                    </b>
                  </li>
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">Email: </span>
                        ACCairo@state.gov
                      </b>
                    </b>
                  </li>
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">Phone:</span> +20 2
                        2797 3300
                      </b>
                    </b>
                  </li>
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">Address:</span> 5
                        Tawfik Diab Street
                        <br />
                        Garden City
                        <br />
                        Cairo, Egypt
                      </b>
                    </b>
                  </li>
                </ul>
                <b>
                  <b> </b>
                </b>
                <div className="col-md-12 social-icons">
                  <p className="probootstrap-social"></p>
                </div>
                <b>
                  <b> </b>
                </b>
              </div>

              <div className="col-md-3 col-md-push-1">
                <b>
                  <b>
                    <img
                      src="img/412labs-logo-RGB-1000.png"
                      style={{ height: "50px" }}
                      alt=""
                    />
                  </b>
                </b>
                <br />
                &nbsp;
                <ul className="probootstrap-contact-details">
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">Email: </span>
                        accvrdiploma@412labs.com
                      </b>
                    </b>
                  </li>
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">Phone:</span> Please
                        contact us via the
                        <a href="https://www.facebook.com/412labs">FB page </a>
                      </b>
                    </b>
                  </li>
                  <li>
                    <b>
                      <b>
                        <span className="text-uppercase">Address:</span> 119
                        Misr-Helwan Agricultural Rd.
                        <br />
                        14th Floor. Unit 6<br />
                        Cairo, Egypt
                      </b>
                    </b>
                  </li>
                </ul>
                <b>
                  <b> </b>
                </b>
                <div className="col-md-12 social-icons">
                  <p className="probootstrap-social"></p>
                </div>
                <b>
                  <b> </b>
                </b>
              </div>
            </div>
          </div>
        </section>
        <b>
          <b></b>
        </b>

        <footer className="probootstrap-footer">
          <div className="container text-center">
            <div className="row">
              “This program was funded by the United States Department of State,
              US Embassy, Cairo, American Center Cairo. The opinions, findings
              and conclusions stated herein are those of the author[s] and do
              not necessarily reflect those of the United States Department of
              State.”
              <p></p>
              <div className="col-md-12">
                <b>
                  <b>
                    &copy; 2021 -<a href="https://412labs.com/">412labs.com</a>.
                    <br />
                    All Rights Reserved.
                  </b>
                </b>
              </div>
            </div>
          </div>
        </footer>
        <b>
          <b></b>
        </b>
      </section>
    </div>
  );
};

export default Home;
