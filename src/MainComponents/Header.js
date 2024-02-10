import React, { useState } from "react";
import "./MainComponents.css"
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenss, setIsDropdownOpenss] = useState(false);
    const [isDropdownOpens, setIsDropdownOpens] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownToggles = () => {
        setIsDropdownOpenss(!isDropdownOpenss);
    };

    const handleDropdown = () => {
        setIsDropdownOpens(!isDropdownOpens);
    }


    return (
        <>
       
            <header className="header">
                <div className="row">
                    <div className="col-md-3">

                        <div className="logo">
                            <span style={{color:'black'}}>

                                Expert Digital Web
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 me-auto">

                        <nav className="nav-links" >
                            <Link to="/" style={{color:'black'}}>Home</Link>
                            <div
                                className="dropdown-new"
                                onMouseEnter={handleDropdown}
                                onMouseLeave={handleDropdown}
                            
                            >
                                <span className="ms-3" style={{ cursor: 'pointer',color:'black' }}>Industries<ArrowDropDownIcon sx={{fill:'black'}}/></span>
                                {isDropdownOpens && (
                                    <div className="dropdown-content">

                                        <IndustriesSection />

                                    </div>
                                )}
                            </div>
                            <div
                                className="dropdown-new"
                                onMouseEnter={handleDropdownToggle}
                                onMouseLeave={handleDropdownToggle}
                            >
                                <span className="ms-3" style={{ cursor: 'pointer' ,color:'black'}}>Services<ArrowDropDownIcon sx={{fill:'black'}}/></span>
                                {isDropdownOpen && (
                                    <div className="dropdown-content">

                                        <ServiceSection />

                                    </div>
                                )}
                            </div>
                            <div
                                className="dropdown-new"
                                onMouseEnter={handleDropdownToggles}
                                onMouseLeave={handleDropdownToggles}
                            >
                                <span className="ms-3" style={{ cursor: 'pointer',color:'black' }}>Products<ArrowDropDownIcon sx={{fill:'black'}}/></span>
                                {isDropdownOpenss && (
                                    <div className="dropdown-content">

                                        <ProductSection />

                                    </div>
                                )}
                            </div>

                            <a href="/about" style={{color:'black'}} >About Us</a>
                            <a href="/contact" style={{color:'black'}}>Contact Us</a>

                        </nav>
                    </div>
                    <div class="col-md-3  d-flex gap-3 align-items-center ">
                        <a class=" elementor-button " role="button" href="/en/contact">
                            <span>Get in Touch</span>
                        </a>
                    </div>
                </div>

            </header>
        </>
    )
}
const IndustriesSection = () => {

    return (
        <>
            <div className="col-md-12">


                <div className="row">
                    <div className="col-md-4">
                        <ul>


                            <Link to="automotive">

                                <li className="hover">
                                    Automotive
                                </li>
                            </Link>
                            <Link to="banking">

                                <li className="hover">
                                    Banking
                                </li>
                            </Link>
                            <Link to="capitalmarket">

                                <li className="hover">
                                    Capital Markets
                                </li>
                            </Link>
                            <Link to="commediatech">

                                <li className="hover">
                                    Communication media & Technology
                                </li>
                            </Link>
                            <Link to="consumergoods">

                                <li className="hover">
                                    Consumer Goods
                                </li>
                            </Link>
                            <Link to="education">

                                <li className="hover">
                                    Education
                                </li>
                            </Link>



                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>

                            <Link to="healthcare">

                                <li className="hover">
                                    HealthCare
                                </li>
                            </Link>

                            <Link to="informservices">

                                <li className="hover">
                                    Information Services
                                </li>
                            </Link>
                            <Link to="insurence">

                                <li className="hover">
                                    Insurence
                                </li>
                            </Link>
                            <Link to="lifesciences">

                                <li className="hover">
                                    Life Sciences
                                </li>
                            </Link>
                            <Link to="manufacturing">

                                <li className="hover">
                                    Manu Facturing
                                </li>
                            </Link>


                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>

                            <Link to="oilgas">

                                <li className="hover">
                                    Oil & Gas
                                </li>
                            </Link>

                            <Link to="retail">

                                <li className="hover">
                                    Retail
                                </li>
                            </Link>
                            <Link to="transportaionlogistics">

                                <li className="hover">
                                    Transportation & Logistics
                                </li>
                            </Link>
                            <Link to="travelhospitality">

                                <li className="hover">
                                    Travel & Hospitality
                                </li>
                            </Link>
                            <Link to="utilities">

                                <li className="hover">
                                    Utilities
                                </li>
                            </Link>


                        </ul>

                    </div>


                </div>
            </div>
        </>
    )
}

const ProductSection = () => {

    return (
        <>
            <div className="col-md-12">


                <div className="row">
                    <div className="col-md-6">
                        <ul>


                            <Link to="quickbookintegration">

                                <li className="hover">
                                    WooCommerce QuickBooks Integration
                                </li>
                            </Link>
                            <Link to="getway">

                                <li className="hover">
                                    QuickBook Payments Geteway for WooCommerce
                                </li>
                            </Link>
                            <Link to="proforups">

                                <li className="hover">
                                    WooCommerce Shipping Pro for UPS
                                </li>
                            </Link>
                            <Link to="proforusps">

                                <li className="hover">
                                    WooCommerce Shipping Pro for USPS
                                </li>
                            </Link>



                        </ul>

                    </div>
                    <div className="col-md-6">
                        <ul>

                            <Link to="comm">

                                <li className="hover">
                                    WooCommerce Multi Locations Inventory Management
                                </li>
                            </Link>

                            <Link to="shippingpro">

                                <li className="hover">
                                    WooCommerce Shipping Pro for FedEx
                                </li>
                            </Link>
                            <Link to="canadapost">

                                <li className="hover">
                                    WooCommerce Shipping Pro for Canada Post
                                </li>
                            </Link>
                            <Link to="easypostshipping">

                                <li className="hover">
                                    WooCommerce Easy Post Shipping
                                </li>
                            </Link>


                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

const ServiceSection = () => {


    return (
        <>
            <div className="col-md-12">

                <div className="row border-bottom">
                    <div className="col-md-4">
                        <h3 className="topheading ">
                            Web & Graphics Design
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            Web Development
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            WordPress Services
                        </h3>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul>

                            <Link to="webdesigning">

                                <li>Web Designing</li>

                            </Link>

                            <Link to="psdtohtml">

                                <li>
                                    PSD to HTML/CSS
                                </li>
                            </Link>
                            <Link to="design">

                                <li>
                                    Design & Branding
                                </li>
                            </Link>
                            <Link to="corporate">

                                <li>
                                    Corporate Identity
                                </li>
                            </Link>
                            <Link to="artifialintelligent">

                                <li>
                                    Artificial Intelligence
                                </li>
                            </Link>
                            <Link to="coremodernization">

                                <li>Core Modernization</li>

                            </Link>
                            <Link to="Enterprise">

                                <li>EnterPrise Application Services</li>

                            </Link>
                            <Link to="security">

                                <li>Security</li>

                            </Link>
                            <Link to="softwareproduct">

                                <li>Software Product Engineering</li>

                            </Link>


                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>

                            <Link to="pythondev">

                                <li>
                                    Python Developement
                                </li>
                            </Link>

                            <Link to="nodejs">

                                <li>
                                    Node.JS Development
                                </li>
                            </Link>
                            <Link to="angulardev">

                                <li>Angular Developement</li>

                            </Link>
                            <Link to="phpdev">

                                <li>PHP Developement</li>

                            </Link>
                            <Link to="businessprocess">

                                <li>Business Process Services</li>

                            </Link>
                            <Link to="cloudsolutions">

                                <li>Cloud Solutions</li>

                            </Link>
                            <Link to="digitalexperience">

                                <li>Digital Experience</li>

                            </Link>
                            <Link to="qualityengineering">

                                <li>Quality Engenineering</li>

                            </Link>


                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>

                            <Link to="wordpress">

                                <li>WordPress Developement</li>

                            </Link>
                            <Link to="wordpressplugin">

                                <li>Plugin Development</li>

                            </Link>
                            <Link to="themecustomization">

                                <li>
                                    Theme customization
                                </li>
                            </Link>

                            <Link to="supportmaintain">

                                <li>
                                    Support Maintain
                                </li>
                            </Link>
                            <Link to="applicationservice">

                                <li>
                                    Application Service & Modernization
                                </li>
                            </Link>
                            <Link to="infasrtucture">

                                <li>
                                    Infastructure Services
                                </li>
                            </Link>
                            <Link to="intelligent">

                                <li>
                                    Intelligent Process Automation
                                </li>
                            </Link>
                            <Link to="internetofthings">

                                <li>
                                    Internet Of Things
                                </li>

                            </Link>

                        </ul>

                    </div>
                </div>



                <div className="row border-bottom">
                    <div className="col-md-4">
                        <h3 className="topheading">
                            E-commerce Service
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            Mobile Development
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            Other Services
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul>


                            <Link to="woocomm">

                                <li>
                                    WooCommerce Developement
                                </li>
                            </Link>
                            <Link to="shopify">

                                <li>
                                    Shopify Developement
                                </li>
                            </Link>
                            <Link to="magento">

                                <li>
                                    Magento Developement
                                </li>
                            </Link>  <Link to="volusion">

                                <li>
                                    Volusion Developement
                                </li>
                            </Link>





                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>


                            <Link to="androids">

                                <li>
                                    Androidapp Developement
                                </li>
                            </Link>
                            <Link to="iosapp">

                                <li>
                                    IOS App Developement
                                </li>
                            </Link>
                            <Link to="ionic">

                                <li>
                                    IONIC App Developement
                                </li>
                            </Link>
                            <Link to="flutter">

                                <li>
                                    FLUTTER  Developement
                                </li>
                            </Link>


                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>
                            <Link to="digital">

                                <li>Digital Developement</li>

                            </Link>
                            <Link to="seoservice">

                                <li>SEO Service Developement</li>

                            </Link>
                            <Link to="offshore">

                                <li>
                                    Offshore Software developement
                                </li>
                            </Link>

                            <Link to="quality">

                                <li>
                                    Software Testing
                                </li>
                            </Link>
                            <Link to="devopes">

                                <li>
                                    DevOps Service
                                </li>
                            </Link>

                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;