import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Icon from "components/Icon";

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="mt-0">Let&apos;s Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">
              Ready to start your next project with us? Give us a call or send us an email and we
              will get back to you as soon as possible!
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="ml-auto text-center">
            <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
            <a className="d-block" href="tel:0489150520">
              048-915-0520
            </a>
          </Col>
          <Col lg={4} className="mr-auto text-center">
            <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
            <a className="d-block" href="mailto:contact@yourwebsite.com">
              contact@yourwebsite.com
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
