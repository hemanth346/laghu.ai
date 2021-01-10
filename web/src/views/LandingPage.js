/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import NavbarFn from "components/Navbars/Navbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterFn from "components/Footers/Footer.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <NavbarFn />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Machine learning made easy</h2>
                <h5 className="description">
                This webapp helps you bring your machine learning ideas to life. 
                Just show it examples of what you want it to learn, 
                and it automatically trains a custom machine learning model 
                that can be shipped in your app
                </h5>
                <br />
                {/* <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
            <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Rapid prototyping</h4>
                    <p>
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
                    <p>
                    Designed to be easy enough for anyone to use. 
                    No code or experience required
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Ship Anywhere</h4>
                    <p>
                    Download your model and ship it to any platform using ONNX ecosystem. Work in progress...
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">More ...</h4>
                    <p className="description">
                    One webapp, multiple possibilities. Share how you have used it and get featured.. :)
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>

            </Row>

          </Container>
        </div>


        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's train your model</h2>
            <Row>

              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/icons/classification.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Image Classifier</CardTitle>
                        {/* <h6 className="card-category">Image Classifier</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Classify an image based on its content. 
                    App currently support upto 5 classes with a limit of 
                    upto 10 images per class in free version. For more please contact me  
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      href="/classify/image" 
                      // Upload url
                      className="btn-round mr-1"
                      color="neutral"
                      // target="_blank"
                      outline
                    >
                      Train image classifer
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-profile card-plain" >
                  <div className="card-avatar">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/icons/text_classifier1.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Text Classifier</CardTitle>
                        {/* <h6 className="card-category">Image Classifier</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Train a classifier based on given tabular data. 
                    Currently app supports only csv files with 2 columns in free version.
                    For more please contact me.
                    <br></br>
                    <br></br>
                    <b>
                      Note : Please make sure class_names/catergories 
                      is in the first column
                    </b>
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      href="/classify/text" 
                      // Upload url
                      className="btn-round mr-1"
                      color="neutral"
                      // target="_blank"
                      outline
                    >
                      Train text classifer
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/icons/obj_detection.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Many more</CardTitle>
                        {/* <h6 className="card-category">Image Classifier</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Next in pipeline: 
                      Tabular data - profiling and training, 
                      Choosing model architecture, 
                      Fine tuning hyperparams, 
                      Training Object detection model...
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      href="#" 
                      className="btn-round mr-1"
                      color="neutral"
                      outline
                    >
                      Coming soon
                    </Button>
                  </CardFooter>
                </Card>
              </Col>



              {/* <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col> */}

            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Share your thoughts and feedback..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:hemanth346@gmail.com`}
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterFn />
    </>
  );
}

export default LandingPage;
