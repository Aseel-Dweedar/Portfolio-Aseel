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
import busmall from "assets/img/projects/busmall.PNG";
import salmon from "assets/img/projects/salmon.PNG";
import CSSpic from "assets/img/projects/CSSpic.png";
import me from "assets/img/projects/me.PNG";
import happicationFull from "assets/img/projects/happicationFull.png";
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
                        Full stack Developer to be ..
                        <span>Aseel Dweedar</span>
                      </h1>
                      <p className="lead text-white">
                        software development is an interesting and wonderful
                        field, and I hope to become a professional software
                        developer.
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
                          <span className="btn-inner--text">
                            GitHub Projects
                          </span>
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
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
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
                          <h6 className="text-primary text-uppercase">
                            HAPPICATION
                          </h6>
                          <p className="description mt-3">
                            Website where customers can find cottage to rent,
                            see their prices, and make a reservation.
                          </p>
                          <img
                            style={{ width: "100%" }}
                            src={happication}
                            alt=""
                          />
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(
                                "https://aseel-dweedar.github.io/happication/"
                              );
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
                          <h6 className="text-success text-uppercase">
                            Salmon Cookies
                          </h6>
                          <p className="description mt-3">
                            Website where customers can Buy healthy and
                            delicious cookies, and allow the owner to track all
                            of sales data for his shops.
                          </p>
                          <img style={{ width: "100%" }} src={salmon} alt="" />
                          <Button
                            className="mt-4"
                            color="success"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(
                                "https://aseel-dweedar.github.io/cookie-stand/"
                              );
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
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            A website where the user can view the gallery of
                            products, vote on the products, and view the results
                            at the end.
                          </p>
                          <img style={{ width: "100%" }} src={busmall} alt="" />
                          <Button
                            className="mt-4"
                            color="warning"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(
                                "https://aseel-dweedar.github.io/bus-mall/"
                              );
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
                              href="https://aseel-dweedar.github.io/fashion/ex2.html"
                              className="mb-0"
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
                              href="https://aseel-dweedar.github.io/fashion/ex1.html"
                              className="mb-0"
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
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <CardImg alt="..." src={happicationFull} top />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h3>HAPPICATION</h3>
                    <p className="lead">
                      People who want to rent a private cottage for their
                      vacation, have a hard time asking and searching for one on
                      social media.
                    </p>
                    <p>
                      HAPPICATION is a Website where customers can find cottage
                      to rent, see their prices, and make a reservation. .
                    </p>
                    <p>
                      It is designed to be easy to use and with high accuracy.
                      Taking into account the consistency of colors, and various
                      designs. To make the user experience unique.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://aseel-dweedar.github.io/happication/index.html"
                    >
                      Visit the websites
                    </a>
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
                    <img
                      style={{ boxShadow: "7px " }}
                      alt="..."
                      className="img-center img-fluid"
                      src={aboutMe}
                    />
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
                      <h4 className="display-3 text-white">
                        More about me ...
                      </h4>
                      <p className="text-white">
                        Hey, this is me Aseel Dweedar,I graduated from the
                        Faculty of Architecture in 2015, and I tried many jobs
                        within five years, these experiences changed me a lot,
                        so I became more powerful and I like new challenges.
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
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
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
