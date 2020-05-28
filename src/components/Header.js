import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import banner from '../imagenes/banner_img.jpg';
import logo from '../imagenes/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <header id="header">
            <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 col-12 text-center">
                    <img className="img-fluid" src={logo} id="logo" alt="logo"/>
                </div>
                <div className="col-lg-6 col-md-7 col-12">
                    <Navbar expand="lg" variant="dark" className="bg-banner" id="menu">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link">Inicio</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link">PlantApp</a> 
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                    </Navbar>
                </div>
                <div className="col-lg-4 col-md-2 col-12">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar contenido" aria-label="Search"/>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
            <div className="row" id="ctn_banner">
                <div className="col-lg-12">
                    <img className="img-fluid card-img" src={banner} alt="Banner"/>
                    <div className="card-title">PlantApp</div>
                    <div className="card-title_1">App Ambiental</div>
                </div>
            </div>
        </header>
        );
    }
}


export default Header;