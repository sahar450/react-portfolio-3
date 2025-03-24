import React, { Component, Fragment } from "react";

import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


export default class Header extends Component {
    constructor(props){
        super(props);
        this.funmenu=this.funmenu.bind(this);
        this.btnopen=this.btnopen.bind(this);
        this.clicksubmenu=this.clicksubmenu.bind(this);
        this.state={
            flagshow:{
                home:false,
                Services:false,
            },
            showmenu:false,
            clickflag:{
                homesub:false,
                Servicessub:false,
            }
        }
    }

    funmenu(item){
        this.setState((prevState) => ({
            flagshow: { ...prevState.flagshow, [item]: true }
        }));
    }

    leavemenu(item){
        this.setState((prevState) => ({
            flagshow: { ...prevState.flagshow, [item]: false }
        }));
    }
    btnopen(){
        this.setState((prevState)=>({
            showmenu:!prevState.showmenu
        }));
    }
    clicksubmenu(name){
        this.setState((prevState)=>({
            clickflag: {
                ...prevState.clickflag,
                [name]: !prevState.clickflag[name]
            }
        }));
    }
    render() {
        return (
            <Fragment>
                <div className="minbox-header">
                    <div>
                        <h1 className="title-name">
                            <span className="kname">K</span>
                            VIEERA
                        </h1>
                    </div>
                    <div>
                        <ul className="show-menu">
                            {/* Home */}
                            <li
                                onMouseEnter={() => this.funmenu("home")}
                                onMouseLeave={() => this.leavemenu("home")}
                            >
                                Home
                                <ul
                                    className="submenu-h"
                                    style={{ display: this.state.flagshow.home ? 'block' : 'none' }}
                                >
                                    <li>home1</li>
                                    <li>home2</li>
                                </ul>
                            </li>

                            {/* About */}
                            <li>About</li>

                            {/* Services */}
                            <li
                                onMouseEnter={() => this.funmenu("Services")}
                                onMouseLeave={() => this.leavemenu("Services")}
                            >
                                Services
                                <ul
                                    className="submenu-h"
                                    style={{ display: this.state.flagshow.Services ? 'block' : 'none' }}
                                >
                                    <li>Service 1</li>
                                    <li>Service 2</li>
                                </ul>
                            </li>

                            {/* Pages */}
                            <li>Pages</li>

                            {/* Contact */}
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn-headerr"> Get Started</button>
                    </div>
                    <div>
                        <button onClick={this.btnopen} className="icon-btn"><i className="fa fa-bars"></i></button>
                    </div>
                </div>
                <div className={`hide-menu ${this.state.showmenu ?"show":""}`}>
                    <ul className="menu-hiden">
                        <li onClick={()=>this.clicksubmenu("homesub")}>Home
                            <ul className="submenu-hiden" style={{display:this.state.clickflag.homesub ? "block" : "none"}}>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                        </li>
                        <li>About</li>
                        <li onClick={()=>this.clicksubmenu("Servicessub")}>Services
                            <ul className="submenu-hiden" style={{display:this.state.clickflag.Servicessub ? "block" : "none"}}>
                                <li>Services</li>
                                <li>Services</li>
                            </ul>
                        </li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                </div>
               
            </Fragment>
        )
    }
}
