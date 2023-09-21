import React, { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";
import { myContext } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import './Admin.css'
import Admindemi from "./Admindemi";

 function Adminhome() {
  const { products, setProducts } = useContext(myContext);
  const navigate = useNavigate();
  
  const deleteItem=(id) => {
    setProducts((d)=>d.filter((item)=>item.id !== id))
}



  return (
    <div>
      <h1 className="our">PRODUCTS DETAILS</h1>
      <MDBRow>
        {products.map((item) => (
          <MDBCol
            md="3"
            key={item.id}
            className="d-inline-flex shadow p-3 mb-5 "
          >
            <MDBCard>
              <Link to={`/add/${item.id}`}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image"
                >
                  <MDBCardImage src={item.src} fluid alt="..." />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </Link>

              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardSubTitle>price:$ {item.price}</MDBCardSubTitle>
                <MDBCardText>{item.discription}</MDBCardText>
                <MDBRow>
                  <MDBBtn style={{ backgroundColor: "#b35946" }} 
                  onClick={()=>{navigate(`/admedit/${item.id}`)}}>
                    Edit Product 
                  </MDBBtn>
                  <MDBBtn className="mt-2" style={{ backgroundColor: "#b35946" }}
                  onClick={()=>{deleteItem(item.id)}}
                  >
                    Delete Product 
                  </MDBBtn>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}

export default  Adminhome;
