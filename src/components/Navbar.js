import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link as LinkS } from 'react-router-dom';


const NavMenu = styled.div`
     @media screen and (max-width:480px){
        display: none;
    }
    `;
const NavItems = styled.ul`
    color: white;
    display: flex;
    list-style: none;
    `;
const Navlinks = styled.li`
    color: white;
    cursor: pointer;
    justify-content: space-between;
    padding: 0px 5px;
    `;
const Links = styled(LinkS)`
        color: white;
        cursor: pointer;
        text-decoration: none;
        justify-content: space-between;
        padding: 0px 5px;
        &:hover{
            transition: all 0.2s ease-in-out;
            color:#000;
        }
    `
const Navbar = () => {
    const iconstyle = { fontSize: "14px" }
    return (
        <>
            <nav className="navbar" style={{color: 'red', backgroundColor: '#6C63FF'}}>
                <div className="container-fluid d-flex mx-3 my-1">
                    <Links className="navbar-brand d-flex" to="/">
                        {/* <img src={logo} alt="..." height="60" /> */}
                        <div className='mx-2'><b>Pneumothorax Segmentation</b></div>
                    </Links>

                    <NavMenu>
                        <NavItems>
                            {/* <Navlinks>
                                <Links to="/tutorial"><FontAwesomeIcon icon={faFileAlt} style={iconstyle} /> How to use?</Links>
                            </Navlinks> */}

                            <Navlinks>
                                <Links to="/"><FontAwesomeIcon icon={faHome} style={iconstyle} /> Home</Links>
                            </Navlinks>
                            <Navlinks>
                                <Links to="/contact"><FontAwesomeIcon icon={faPhoneAlt} style={iconstyle} /> Contact us</Links>
                            </Navlinks>
                            <Navlinks>
                                <Links to="/about"><FontAwesomeIcon icon={faInfo} style={iconstyle} /> About us</Links>
                            </Navlinks>
                        </NavItems>
                    </NavMenu>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
