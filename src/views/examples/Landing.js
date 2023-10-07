/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// import classnames from "classnames";
// import promo1 from "assets/img/theme/promo-1.png";
// import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
// import ill2 from "assets/img/ill/ill-2.svg";
// import team1 from "assets/img/theme/team-1-800x800.jpg";
// import team2 from "assets/img/theme/team-2-800x800.jpg";
// import team3 from "assets/img/theme/team-3-800x800.jpg";
// import team4 from "assets/img/theme/team-4-800x800.jpg";
import happication from "assets/img/projects/happication.PNG";
import madaresona from "assets/img/projects/madaresona.png";
import newBeginning from "assets/img/projects/new-beginning.png";
import youApply from "assets/img/projects/youapply.png";
import mentaHealth from "assets/img/projects/menta-health.PNG";
import homeGym from "assets/img/projects/home-gym.PNG";
import kiddy from "assets/img/projects/kiddy.png";
// import canOfBook from "assets/img/projects/can-of-book.PNG";
// import horedBeasts from "assets/img/projects/hored-beasts.PNG";
import cityExplorer from "assets/img/projects/city-explorer.PNG";
// import salmon from "assets/img/projects/salmon.PNG";
// import busmall from "assets/img/projects/busmall.PNG";
// import CSSpic from "assets/img/projects/CSSpic.png";
import me from "assets/img/projects/me.PNG";
import tripleCAll from "assets/img/projects/tripleC-all.png";
// import aboutMe from "assets/img/theme/aboutMe.png";
import profile from "assets/img/theme/aseel.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        {/* <DemoNavbar /> */}
        <main ref="main">
          {/* <div className="position-relative"> */}
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250 pt-450">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image mt--100">
                        {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={profile}
                        />
                        {/* </a> */}
                      </div>
                    </Col>
                    {/* <Col
                        className="order-lg-3 text-lg-right align-self-lg-center"
                        lg="4"
                      >
                        <div className="card-profile-actions py-4 mt-lg-0">
                           <Button
                          className="mr-4"
                          color="info"
                          href="https://www.linkedin.com/in/aseel-dweedar/"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button> 
                           <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                        </div>
                      </Col> */}
                    {/* <Col className="order-lg-1" lg="4">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            <span className="heading"> +5 </span>
                            <span className="description"> Projects </span>
                          </div>
                          <div>
                            <span className="heading"> 4 </span>
                            <span className="description"> Courses </span>
                          </div>
                        </div>
                      </Col> */}
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Aseel Dweedar
                      {/* <span className="font-weight-light"> , 28 </span> */}
                    </h3>

                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Software Developer
                    </div>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Amman, Jordan
                    </div>
                    {/* <div className="h6 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        Software Developer
                      </div> */}
                    {/* <div>
                        <i className="ni education_hat mr-2" />
                        ASAC
                      </div> */}
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Download />
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
          {/* </div> */}
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            YouApply
                          </h6>
                          <p className="description mt-3">
                            Glad to be a part of "YouApply" team, which is a
                            leading platform that helps individuals find
                            educational opportunities and study abroad programs.
                          </p>
                          <img
                            style={{ width: "100%" }}
                            src={youApply}
                            alt=""
                          />
                          <Button
                            className="mt-4"
                            color="success"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open("https://youapply.com");
                            }}
                          >
                            Show Website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Madaresona
                          </h6>
                          <p className="description mt-3">
                            <b>Currently working on</b> "Madaresona", which is a
                            platform containing all of public and privet
                            schools, and all of these service and relations.
                          </p>
                          <img
                            style={{ width: "100%" }}
                            src={madaresona}
                            alt=""
                          />
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open("https://madaresona.netlify.app/");
                            }}
                          >
                            Show Website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            HomeGym
                          </h6>
                          <p className="description mt-3">
                            Glad to be a part of "HomeGym" team, which is a Web
                            application that allow users to browse gym
                            equipment, add it to cart, byu it now or save it for
                            later.
                          </p>
                          <img style={{ width: "100%" }} src={homeGym} alt="" />
                          <Button
                            className="mt-4"
                            color="warning"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open("https://home-gym.netlify.app");
                            }}
                          >
                            Show Website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <CardImg alt="..." src={tripleCAll} top />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h3>TRIPLE-C</h3>
                    <p className="lead">
                      Most people don't have enough time to go to the station
                      every time they want to wash their cars, or exposed all
                      the time to get a puncture, runs out of fuel. And they
                      don't have a good experience with cars.
                    </p>
                    <p>
                      Triple-C is A mobile application that introduces cars
                      services in place.
                    </p>
                    <p>
                      It is designed to be easy to use and with high accuracy.
                      Taking into account the consistency of colors, and various
                      designs. To make the user experience unique.
                    </p>
                    {/* <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://github.com/car-care-center-CCC/car-care-center-CCC"
                    >
                      Visit Mobile App - Android, AWS-Amplify (GraphQL) ,
                    </a>
                    <br></br> */}
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://github.com/Aseel-Dweedar/tripleC-native"
                      target="_blank"
                    >
                      Visit Mobile App - React-native, Node.js (Express),
                      MongoDB.
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">More wonderful projects</h2>
                  <p className="lead text-muted">
                    Here you can find some of the projects that I worked on.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div
                    onClick={() =>
                      window.open("https://aseel-dweedar.github.io/happication")
                    }
                    className="px-4"
                  >
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={happication}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">
                          Happication
                        </span>
                        {/* <a
                          className="text-warning mt-5"
                          href="https://aseel-dweedar.github.io/happication"
                          target="_blank"
                        >
                          Visit Web App
                        </a> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div
                    onClick={() =>
                      window.open("https://www.youtube.com/watch?v=LFXxHjWJ_mI")
                    }
                    className="px-4"
                  >
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={mentaHealth}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">
                          Light House
                        </span>
                        {/* <a
                          className="text-warning mt-5"
                          href="https://www.youtube.com/watch?v=LFXxHjWJ_mI"
                          target="_blank"
                        >
                          Visit Web App
                        </a> */}
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div
                    onClick={() =>
                      window.open("https://newwbeginning.netlify.app")
                    }
                    className="px-4"
                  >
                    <img
                      alt="..."
                      className="img-center img-fluid shadow shadow-lg--hover"
                      src={newBeginning}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">
                          ThreeJS - New Beginning
                        </span>
                        <span
                          className="text-warning mt-5"
                          // href="https://newwbeginning.netlify.app/"
                          // target="_blank"
                        >
                          (Click to start the scene)
                        </span>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div
                    onClick={() =>
                      window.open(
                        "https://github.com/Aseel-Dweedar/kiddy-react-native-cli"
                      )
                    }
                    className="px-4"
                  >
                    <img
                      alt="..."
                      className=" img-center img-fluid shadow shadow-lg--hover"
                      src={kiddy}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">
                          Kids Game
                        </span>
                        <span
                          className="text-warning mt-5"
                          // href="https://github.com/Aseel-Dweedar/kiddy-react-native-cli"
                          // target="_blank"
                        >
                          React Native App
                        </span>
                      </h5>
                    </div>
                  </div>
                </Col>
                {/* <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div className="px-4">
                    <img alt="..." className=" img-center img-fluid shadow shadow-lg--hover" src={salmon} />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">Cookie Stand</span>
                        <a className="text-warning mt-5" target="_blank" href="https://aseel-dweedar.github.io/cookie-stand">
                          Visit Website
                        </a>
                      </h5>
                    </div>
                  </div>
                </Col> */}
              </Row>
            </Container>
          </section>
          {/* <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img alt="..." className="img-fluid floating" src={CSSpic} />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      CSS
                    </div>
                    <h3>Awesome designs</h3>
                    <p>
                      CSS is a powerful tool to design a website. Here you can
                      find some of my works on CSS. Refactoring some templates.
                      visit the website to take a deeper look.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <a
                              href="https://aseel-dweedar.github.io/chocolate-pizza-301/"
                              className="mb-0"
                              target="_blank"
                            >
                              Chocolate Pizza
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <a
                              href="https://aseel-dweedar.github.io/mixed/ex2.html"
                              className="mb-0"
                              target="_blank"
                            >
                              Hotel Template / By W3School
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <a
                              href="https://aseel-dweedar.github.io/mixed/ex1.html"
                              className="mb-0"
                              target="_blank"
                            >
                              Travel Agency Template / By W3School
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <section className="section pb-10 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center col-reverse">
                <Col
                  className="order-lg-2 ml-lg-auto about-me-container"
                  md="6"
                >
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://aseel-dweedar.github.io/about-me/"
                            );
                          }}
                          className="pl-4 flex-col"
                        >
                          <a
                            href="https://aseel-dweedar.github.io/about-me/"
                            onClick={(e) => e.preventDefault()}
                            className="title text-success"
                            target="_blank"
                          >
                            You can also visit About-me website..
                          </a>
                          <img
                            style={{ height: "120px", marginTop: "5px" }}
                            src={me}
                            alt=""
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  {/* <div className="position-relative pl-md-5">
                    <img
                      style={{ boxShadow: "7px " }}
                      alt="..."
                      className="img-center img-fluid"
                      src={aboutMe}
                    />
                  </div> */}
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                        More about me ...
                      </h4>
                      <p className="text-white">
                        Hey there! There's always something new to discover
                        about me :)
                      </p>
                    </div>
                  </div>
                  {/* <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <a
                            href="https://aseel-dweedar.github.io/about-me/"
                            onClick={(e) => e.preventDefault()}
                            className="title text-success"
                          >
                            You can also visit About-me website..
                          </a>
                          <img
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(
                                "https://aseel-dweedar.github.io/about-me/"
                              );
                            }}
                            style={{ height: "120px", marginTop: "5px" }}
                            src={me}
                            alt=""
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card> */}
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
