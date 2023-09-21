import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link, useNavigate, useParams } from "react-router-dom";
import { myContext } from "../Context/Context";
import Navicon from "../Component/Navicon";


export default function Adminnav({ size }) {
  const { cartt } = useContext(myContext);
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="fixed-top pb-5">
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <Navicon/>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" onClick={()=>navigate("/")}>Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={()=>navigate("/register")}>Register</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>navigate("/admadd")}>Add a Product </MDBNavbarLink>
              </MDBNavbarItem>

            <MDBNavbarItem>
                  <MDBNavbarLink
                  disabled
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                ></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBDropdown group className="shadow-0">
              <MDBDropdownToggle color="white">
                <MDBIcon
                  fas
                  icon="user-circle"
                  className="ms-1 me-2"
                  style={{ fontSize: "30px" }}
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link onClick={() => navigate("/admuser")}>Profile</MDBDropdownItem>
                <MDBDropdownItem link>Settings</MDBDropdownItem>
                <MDBDropdownItem link onClick={() => navigate("/register")}>Sign Out</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
