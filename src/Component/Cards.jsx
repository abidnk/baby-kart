import React, { useContext } from "react";
import "./Cardsss.css";
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
import { Link } from "react-router-dom";

export default function Cards() {
  const { products } = useContext(myContext);
  return (
    <div>
      <h1 className="our">OUR PRODUCTS</h1>
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
                <Link to={`/add/${item.id}`}>
                  <p>⭐️⭐️⭐️⭐️⭐️   (276+ User Rating)</p>
                  <MDBBtn style={{ backgroundColor: "#b35946" }}>
                    View Product
                  </MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}
