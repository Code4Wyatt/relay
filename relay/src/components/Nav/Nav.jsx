import "./Nav.scss";
import { Dropdown } from "react-bootstrap";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Nav = () => {

  const loggedIn = useSelector((state) => state.currentUser);

  console.log("Logged",loggedIn)
  return (
    <div className="nav__bar d-flex">
      <div className="nav__logo">
        <h3>Relay.</h3>
          </div>
          
          <div className="nav__menu">
              <div className="explore">
   <Dropdown >
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            Explore
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
              </Dropdown>
              </div>
              <div className="design">     <Dropdown>
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            Design
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown></div>
              <div className="development">
        <Dropdown>
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            Development
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown></div>
     
              
   
      </div>
          <div className="login d-flex">
              <div className="member">
<a href="/">
          <p>Become a Member</p>
        </a>
              </div>
        
        <a href="/login">
          <div className="button">
            <p>Login</p>
          </div>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        user: state,
    }
};



export default connect(mapStateToProps)(Nav);
