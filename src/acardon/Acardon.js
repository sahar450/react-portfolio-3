import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './acardon.css';

export default class Acardon extends Component {
    constructor(props){
        super(props);
        this.state={
            activeIndex: null, // مقدار اولیه که هیچ آیتمی باز نیست
        };
    }

    acardonmenu(index){
        this.setState((prevState) => ({
            activeIndex: prevState.activeIndex === index ? null : index, // اگر روی همان کلیک شود، بسته شود
        }));
    }

    render() {
        return (
            <Container>
                <div className="back">
                    <Row>
                        <Col md={6}>
                            <div className="accardon">
                                <h5>FAQ's</h5>
                                <h1>Any Questions</h1>
                                <Row>
                                    <Col md={12}>
                                        <button onClick={() => this.acardonmenu(1)}>What are the benefits of managed IT services?</button>
                                        <div className="anser" style={{
                                            display: this.state.activeIndex === 1 ? "block" : "none",
                                        }}>
                                            <p>
                                                Managed IT services provide businesses with proactive support, improved security, and cost savings.
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <button onClick={() => this.acardonmenu(2)}>How can cloud computing improve my business?</button>
                                        <div className="anser" style={{
                                            display: this.state.activeIndex === 2 ? "block" : "none",
                                        }}>
                                            <p>
                                                Cloud computing offers scalability, cost efficiency, and enhanced collaboration.
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <button onClick={() => this.acardonmenu(3)}>What security measures should my company take?</button>
                                        <div className="anser" style={{
                                            display: this.state.activeIndex === 3 ? "block" : "none",
                                        }}>
                                            <p>
                                                Companies should implement firewalls, encryption, and regular security audits.
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <button onClick={() => this.acardonmenu(4)}>How do I choose the right IT provider?</button>
                                        <div className="anser" style={{
                                            display: this.state.activeIndex === 4 ? "block" : "none",
                                        }}>
                                            <p>
                                                Look for experience, customer reviews, and tailored solutions that fit your business needs.
                                            </p>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
