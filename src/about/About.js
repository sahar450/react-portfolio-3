import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import './about.css';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6} className="right">
            <img
              src={process.env.PUBLIC_URL + "/images/photo-1726137569914-ae2ad1c634f6.jpeg"}
              height="100%"
              width="100%"
              alt="Team 1"
            />
            <div className="right-sub">
              <img
                src={process.env.PUBLIC_URL + "/images/copy3.jpg"}
                width="60%"
                alt="Team 2"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/copy2.jpg"}
                width="60%"
                alt="Team 3"
              />
            </div>
          </Col>

          <Col md={6}>
            <h6>_ About Company _</h6>
            <h1 >Make Your Life Easier With Help From KVIEERA</h1>
            <p>This variant focuses on the role of technology in driving progress and empowering individuals and organizations to achieve their goals.</p>
            <div></div>
            <Row>
              <Col md={6}>
                <div className='icon-left'>
                  <i className="fa fa-users fa-2x"></i>
                  <div className='left_sub'>
                    <h5>Adaptability</h5>
                    <p>Donec aliquam urna in dictum mattis proin faucibus.</p>

                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='icon-left'>
                  <i className="fa fa-users fa-2x"></i>
                  <div className='left_sub'>
                    <h5>Adaptability</h5>
                    <p>Donec aliquam urna in dictum mattis proin faucibus.</p>

                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='icon-left'>
                  <i className="fa fa-users fa-2x"></i>
                  <div className='left_sub'>
                    <h5>Adaptability</h5>
                    <p>Donec aliquam urna in dictum mattis proin faucibus.</p>

                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='icon-left'>
                  <i className="fa fa-users fa-2x"></i>
                  <div className='left_sub'>
                    <h5>Adaptability</h5>
                    <p>Donec aliquam urna in dictum mattis proin faucibus.</p>

                  </div>
                </div>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    )
  }
}
