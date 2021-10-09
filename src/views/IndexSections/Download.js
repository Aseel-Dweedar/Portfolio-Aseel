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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">Languages And Technologies</h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <img
                        id="tooltip255035741"
                        alt="..."
                        className="img-fluid"
                        src="https://brandslogo.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg"
                      />
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front - end component library
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <img
                        id="tooltip265846671"
                        alt="..."
                        className="img-fluid"
                        src="https://www.blockachain.gr/wp-content/uploads/2018/03/java-coffee-cup-logo.png"
                      />
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Java
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <img
                        id="tooltip233150499"
                        alt="..."
                        className="img-fluid"
                        src="https://e1.pngegg.com/pngimages/736/783/png-clipart-macos-app-icons-android-studio.png"
                      />
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Android studio
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <img
                        id="tooltip308866163"
                        alt="..."
                        className="img-fluid"
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      />
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        React - A JavaScript library for building user interfaces
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <img
                        id="tooltip76119384"
                        alt="..."
                        className="img-fluid"
                        src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lNWJjNzliM2I4ZTU4NzQ3MmNkZTcwYThiY2U5OGRlYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.cE7EkyO4LOtupC1zGvF8spYlRImQ05TWNlsfhz_5InE"
                      />
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        AWS Amplify
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <img
                        id="tooltip646643508"
                        alt="..."
                        className="img-fluid"
                        src="https://ih1.redbubble.net/image.195575713.9130/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
                      />
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        Spring boot framework
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
