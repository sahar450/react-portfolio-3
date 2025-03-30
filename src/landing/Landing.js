import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './landing.css';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: [
                { 
                    txttitle: "Nothing But The Best IT Experience", 
                    txtpra: "The partner of choice for many of the world's leading enterprises and technology challenges. We are a leader in business and technology", 
                    srcc: process.env.PUBLIC_URL + "/images/photo-1726137569914-ae2ad1c634f6.jpeg"
                },
                { 
                    txttitle: "Technology, Bridging Dreams and Reality", 
                    txtpra: "The partner of choice for many of the world's leading enterprises and technology challenges. We are a leader in business and technology", 
                    srcc: process.env.PUBLIC_URL + "/images/max-bohme-BNnwFmplLLM-unsplash.jpg" 
                },
            ],
            count: 0
        };
    }

    componentDidMount() {
        this.stopin = setInterval(() => {
            this.setState(prevState => ({
                count: (prevState.count + 1) % prevState.slider.length
            }));
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.stopin);
    }

    render() {
        return (
            <Fragment>
                <div className="position-relative d-flex align-items-center justify-content-center">
                    {/* تصویر پس‌زمینه */}
                    <img className="img-fluid" src={this.state.slider[this.state.count].srcc} alt="Landing Background" />

                    {/* متن روی تصویر */}
                    <div className="txt-slider position-absolute text-center text-white">
                        <h1 className="fw-bold">{this.state.slider[this.state.count].txttitle}</h1>
                        <p className="lead">
                            {this.state.slider[this.state.count].txtpra}
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}