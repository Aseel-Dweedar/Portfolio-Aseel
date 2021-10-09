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
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";
import happication from "assets/img/projects/happication.PNG";
import mentaHealth from "assets/img/projects/menta-health.PNG";
import homeGym from "assets/img/projects/home-gym.PNG";
import canOfBook from "assets/img/projects/can-of-book.PNG";
import horedBeasts from "assets/img/projects/hored-beasts.PNG";
import salmon from "assets/img/projects/salmon.PNG";
import busmall from "assets/img/projects/busmall.PNG";
import CSSpic from "assets/img/projects/CSSpic.png";
import me from "assets/img/projects/me.PNG";
import tripleCAll from "assets/img/projects/tripleC-all.png";
import aboutMe from "assets/img/theme/aboutMe.png";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
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
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Full-Stack Developer ..
                        <span>Aseel Dweedar</span>
                      </h1>
                      <p className="lead text-white">
                        software development, the right place for searching, self-development, and Problem-solving. Aim
                        to be a professional software developer.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://www.linkedin.com/in/aseel-dweedar/"
                        >
                          <span className="btn-inner--text">My LinkedIn</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://github.com/Aseel-Dweedar?tab=repositories"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">GitHub Projects</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
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
                  <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">HAPPICATION</h6>
                          <p className="description mt-3">
                            Website where customers can find cottage to rent, see their prices, and make a reservation.
                          </p>
                          <img style={{ width: "100%" }} src={happication} alt="" />
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open("https://aseel-dweedar.github.io/happication/");
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
                          <h6 className="text-success text-uppercase">LightHouse</h6>
                          <p className="description mt-3">
                            Web application support Mental-health Care issues, and help people by let them ask for help
                            when they need it.
                          </p>
                          <img style={{ width: "100%" }} src={mentaHealth} alt="" />
                          <Button
                            className="mt-4"
                            color="success"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open("https://github.com/Mental-HealthCare/Mental-HealthCare");
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
                          <h6 className="text-warning text-uppercase">HomeGym</h6>
                          <p className="description mt-3">
                            Web application that allow users to browse gym equipment, add it to cart, byu it now or save
                            it for later.
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
                <Col className="order-md-2" md="6">
                  <img alt="..." className="img-fluid floating" src={CSSpic} />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">CSS</div>
                    <h3>Awesome designs</h3>
                    <p>
                      CSS is a powerful tool to design a website. Here you can find some of my works on CSS. Refactoring
                      some templates. visit the website to take a deeper look.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <a href="https://aseel-dweedar.github.io/chocolate-pizza-301/" className="mb-0">
                              Chocolate Pizza
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <a href="https://aseel-dweedar.github.io/mixed/ex2.html" className="mb-0">
                              Hotel Template / By W3School
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <a href="https://aseel-dweedar.github.io/mixed/ex1.html" className="mb-0">
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
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <CardImg alt="..." src={tripleCAll} top />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h3>TRIPLE-C</h3>
                    <p className="lead">
                      Most people don't have enough time to go to the station every time they want to wash their cars,
                      or exposed all the time to get a puncture, runs out of fuel. And they don't have a good experience
                      with cars.
                    </p>
                    <p>Triple-C is A mobile application that introduces cars services in place.</p>
                    <p>
                      It is designed to be easy to use and with high accuracy. Taking into account the consistency of
                      colors, and various designs. To make the user experience unique.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://github.com/car-care-center-CCC/car-care-center-CCC"
                    >
                      Visit Mobile App
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">More wonderful projects</h2>
                  <p className="lead text-muted">
                    Here you can find some of the projects that I worked on during the ASAC intensive course.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div className="px-4">
                    <img alt="..." className="img-center img-fluid shadow shadow-lg--hover" src={canOfBook} />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">Can of books</span>
                        <a className="text-warning mt-5" href="https://books-can.netlify.app">
                          Visit Web App
                        </a>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div className="px-4">
                    <img alt="..." className="img-center img-fluid shadow shadow-lg--hover" src={horedBeasts} />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">Hored Beasts</span>
                        <a className="text-warning mt-5" href="https://beast-hornd.netlify.app">
                          Visit Web App
                        </a>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div className="px-4">
                    <img alt="..." className="img-center img-fluid shadow shadow-lg--hover" src={busmall} />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">Buss Mall</span>
                        <a className="text-warning mt-5" href="https://aseel-dweedar.github.io/bus-mall">
                          Visit Website
                        </a>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <div className="px-4">
                    <img alt="..." className=" img-center img-fluid shadow shadow-lg--hover" src={salmon} />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1  display-4">Cookie Stand</span>
                        <a className="text-warning mt-5" href="https://aseel-dweedar.github.io/cookie-stand">
                          Visit Website
                        </a>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img style={{ boxShadow: "7px " }} alt="..." className="img-center img-fluid" src={aboutMe} />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">More about me ...</h4>
                      <p className="text-white">
                        Hey, this is me Aseel Dweedar,I graduated from the Faculty of Architecture in 2015, and I tried
                        many jobs within five years, these experiences changed me a lot, so I became more powerful. Now
                        I aim to be a professional software developer.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
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
                              window.open("https://aseel-dweedar.github.io/about-me/");
                            }}
                            style={{ height: "120px", marginTop: "5px" }}
                            src={me}
                            alt=""
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
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
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
