import React from "react";
import PropTypes from "prop-types";

import { Container, Row } from "react-bootstrap";
import Icon from "components/Icon";
import "./Team.scss";

const Team = (props) => {
  return (
    <section className="bg-light page-section" id="team">
      <Container>
        <Row>
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </Row>
        <Row>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
              <h4>Kay Garland</h4>
              <p className="text-muted">Lead Designer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="TwitterIcon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="FacebookIcon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="LinkedinIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
              <h4>Larry Parker</h4>
              <p className="text-muted">Lead Marketer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="TwitterIcon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="FacebookIcon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="LinkedinIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
              <h4>Diana Pertersen</h4>
              <p className="text-muted">Lead Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="TwitterIcon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="FacebookIcon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <Icon iconName="LinkedinIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam
              veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

Team.propTypes = {};

export default Team;
