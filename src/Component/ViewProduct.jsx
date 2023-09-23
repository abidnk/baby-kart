import React, { useContext, useState } from "react";
import { myContext } from "../Context/Context";
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBCardImage } from "mdb-react-ui-kit";
import {  useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Cardsss.css";



const ViewProduct = () => {
  const { products, cartt, setCartt } = useContext(myContext);
  const { id } = useParams();
  const {isLoggedIn}=useContext(myContext);
  const navigate = useNavigate();
  
  const dataa = products.filter((item) => item.id === parseInt(id));
  
  const productid = () => {
  if (cartt.includes(dataa[0])) {
      alert("product is already added to cart");
    } else {
      setCartt(() => [...cartt, ...dataa]);
      alert("product succesffully added to your cart");
    }
  };


  return (
    <>
      <Nav />
      <div className="view container ">
        {dataa.map((item) => (
          <div key={item.id}>
            <div>
              <MDBRow className="g-0 bg-light position-relative">
                <MDBCol md="6" className="mb-md-0 p-md-4">
                  <img src={item.src} className="w-50" alt="..." />
                </MDBCol>
                <MDBCol
                  md="5"
                  className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
                  id="view-right"
                >
                  <div className="viewright-down bg-">
                    <h1 className="mt-0">{item.name} </h1>
                    <h2>Rs{item.price}</h2>
                    <h4>{item.discription}</h4>

                    <div className="contu">
                    {isLoggedIn===true ?
                <div>
                  <MDBBtn className='me-1' style={{ backgroundColor: "#b35946" }} onClick={productid}>Add to cart</MDBBtn>
                  <MDBBtn className="me-4" style={{ backgroundColor: "#b35946" }} onClick={()=>{navigate("/cart")}}>Buynow</MDBBtn>
                
                  </div>:<div>
                  <MDBBtn className='me-1' style={{ backgroundColor: "#b35946" }} onClick={()=>{navigate('/register')}}>Add to cart</MDBBtn>
                  <MDBBtn className="me-4" style={{ backgroundColor: "#b35946" }} onClick={()=>{navigate('/register')}}>Buynow</MDBBtn>
                  <br/>
                  <p style={{ color: "#FF0000 ", fontFamily: "monospace", fontSize: 'small' }}>*First Login To Add product</p>
                   
                  </div>} 
                   <div>
                     <span role="img" aria-label="star">
                       ⭐️⭐️⭐️⭐️⭐️     (276+ user Ratings)
            </span>
                       <p>
                       
                       Introducing our premium baby product, designed with your little one in mind.
                       Crafted with care and safety in focus, our baby product offers comfort, convenience,
                       and peace of mind for parents. It's the perfect addition to your baby's daily routine, providing
                       comfort and support during those precious early years. Elevate your parenting experience with our
                      trusted baby product.</p>
                       </div>
                       
                       <MDBCol 
                        lg="4"
                        md="6"
                        className="md-6 d-inline-flex"
                        ></MDBCol>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        ))}
      
      </div>
        <MDBCardImage className="ms-0 img-fluid" src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/333_202302210125_Artboard_1@2x_100.jpg?width=1804&height=132&mode=fill&fill=solid&fill-color=FFFFFF%20%20,https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/333_202302210125_Artboard_1@2x_100.jpg?width=700&height=51&mode=fill&fill=solid&fill-color=FFFFFF%20780w,%20%20%20,https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/333_202302210125_Artboard_1@2x_100.jpg?width=360&height=26&mode=fill&fill=solid&fill-color=FFFFFF%20360w-" />

     

      <Footer />
    </>
  );
};
export default ViewProduct;
