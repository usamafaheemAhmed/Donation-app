import React, { useState } from 'react'

import { Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";




const TopBar = () => {
    let [show, setShow] = useState();
    let Navigate = useNavigate();

    let [active, setActive] = useState(0);

    function NavBarOptions() {
      let Navigate = useNavigate();
        return (<Nav className=" col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-lg-0 text-decoration-none topBar ">
            <Nav.Link className={`${active == 1 ? `active` : ``}`} onClick={() => { Navigate("/About"); setActive(1); }}>About</Nav.Link>
            <Nav.Link className={`${active == 2 ? `active` : ``}`} onClick={() => { Navigate("/contactUs"); setActive(2); }}>Contact us</Nav.Link>
            <NavDropdown className={`${((active >= 3)&&(active <= 6)) ? `active` : ``}`} title="Donate" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => { Navigate("/Explore"); setActive(3); }}>Donations</NavDropdown.Item>
                {/* All menu Bello you need to make them Admin Conditional */}
                
                <NavDropdown.Item  onClick={() => { Navigate("/AddRecipient"); setActive(4); }}>
                    Add Recipient
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => { Navigate("/addDonar");  setActive(5);}}>Add Donar </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => { Navigate("/link"); setActive(6); }}>
                    Other Admins
                </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link className={`${active == 7 ? `active` : ``}`} onClick={() => { Navigate("./FAQs"); setActive(7); }}>FAQs</Nav.Link>
        </Nav>);
    }



    return (
        <header className="p-3 bg-transparent ">
            <div className="container">
                <div className="justify-content-lg-start navbar_Parent">
                    <a onClick={() => { Navigate("/");  setActive(0);}} className="d-flex align-items-center  text-dark text-decoration-none navBrand">
                        {/**   <Image src={logo} fluid /> */}
                        DONATE
                    </a>
                    <FontAwesomeIcon icon={faEllipsisVertical} size="2xl" onClick={() => { setShow(true) }} />


                    <Offcanvas show={show} onHide={() => { setShow(false) }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>DONATE</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <NavBarOptions></NavBarOptions>

                        </Offcanvas.Body>
                    </Offcanvas>

                    <NavBarOptions></NavBarOptions>
                    <div className="text-end w-25 login_buttons">
                        <button type="button" className="btn btn-outline-light text-dark me-3">Login</button>
                        <button type="button" className="btn btn-outline-primary">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default TopBar