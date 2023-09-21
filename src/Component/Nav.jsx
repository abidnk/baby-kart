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
import { CardProduct } from "./CardProducts";
import "./Cardsss.css";
import { myContext } from "../Context/Context";
import Navicon from "./Navicon";

export default function Nav({ size }) {
  const [searchTerm, setSerchTerm] = useState("");
  const { cartt } = useContext(myContext);
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {isLoggedIn,setIsLoggedIn} = useContext(myContext);
  const {user, setUser,userName, setUserName,loggedInUserId} = useContext(myContext)
  
  const logout = () =>{

    navigate("/");
    setIsLoggedIn(!isLoggedIn);
    window.location.reload(false);

  }
  const userNamee = user.find((userr) => userr.id === loggedInUserId);


  return (
    <div className="fixed-top pb-5">
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <Navicon/>
        </MDBNavbarBrand>

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
                <MDBNavbarLink active aria-current="page" onClick={()=>navigate("/")}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/register">Register</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Dress</MDBDropdownItem>
                    <MDBDropdownItem link>Toys</MDBDropdownItem>
                    <MDBDropdownItem link>Products</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
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

            <form className="d-flex input-group w-auto">
              <input
                onChange={(e) => setSerchTerm(e.target.value)}
                id="serchInput"
                type="search"
                className="form-control rounded-pill"
                placeholder="Search Here "
                aria-label="Search"
                style={{ width: "500px" }}
              />
            </form>
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
           
                
                { 
                isLoggedIn === true ?(
                <div>
                <MDBDropdownItem link>{userNamee.name}</MDBDropdownItem> 
                <MDBDropdownItem link onClick={logout}>Sign Out</MDBDropdownItem></div>)
                :(<MDBDropdownItem link onClick={()=>{navigate('/register')}}>Sign in</MDBDropdownItem>)
                
              }
              </MDBDropdownMenu>
            </MDBDropdown>
            {
              isLoggedIn === true ?(
                <>
            <Link to={"/cart"}>
              <MDBIcon fas icon="cart-plus" className="mx-1">
                <sup>{cartt.length}</sup>
              </MDBIcon>
            </Link>
            <span>{size} </span>
            </>
            )
            :("")

}
            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
            
      {searchTerm ? (
        <div className="main-divv">
          <div className="container mx-5">
            <MDBRow>
              {CardProduct.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              }).map((val) => (
                <div className="search-div" key={val.id}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/add/${val.id}`)}
                  >
                    {val.name}
                  </p>

                  {/* <MDBCard className="mt-3">
                  <MDBCardImage src={val.src} position="top" alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>{val.name} </MDBCardTitle>
                    <MDBCardText>{val.discription}</MDBCardText>
                    <MDBCardTitle>₹{val.price} </MDBCardTitle>
                    <MDBBtn href="#">View</MDBBtn>
                  </MDBCardBody>
                </MDBCard> */}
                </div>
              ))}
            </MDBRow>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
