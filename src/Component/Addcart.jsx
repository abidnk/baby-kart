import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { myContext } from "../Context/Context";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Addcart() {
  const { cartt, setCartt } = useContext(myContext);
  const navigate = useNavigate();

  const handleIncrement = (id) => {
    const updatedcart = cartt.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCartt(updatedcart);
  };

  const handleDecrement = (id) => {
    const updatedcart = cartt.map((item) => {
      if (item.id === id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCartt(updatedcart);
  };
  const deleteItem = (id) => {
    setCartt((i) => i.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Nav />
      <section className="navu h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              <MDBCard className="rounded-3 mb-4">
                {cartt.map((item) => (
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={item.src}
                          alt="products"
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{item.name}</p>
                        <p>
                          <span className="text-muted">Size: </span>M{" "}
                          <span className="text-muted">Color: </span>Grey
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="3"
                        lg="3"
                        xl="2"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <MDBBtn
                          className="px-3 me-2"
                          style={{ backgroundColor: "#b35946" }}
                          onClick={() => handleDecrement(item.id)}
                        >
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>

                        <MDBInput type="number" label={item.qty} />

                        <MDBBtn
                          className="px-3 ms-2"
                          style={{ backgroundColor: "#b35946" }}
                          onClick={() => handleIncrement(item.id)}
                        >
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0">
                          $ {item.price * item.qty}
                        </MDBTypography>
                      </MDBCol>

                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a href="#!" className="text-danger">
                          <MDBIcon
                            onClick={() => deleteItem(item.id)}
                            fas
                            icon="trash text-danger"
                            size="lg"
                          />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                ))}
              </MDBCard>
              <MDBCard>
                <MDBCardBody>
                  <MDBBtn
                    className="ms-3"
                    block
                    size="lg"
                    style={{ backgroundColor: "#b35946" }}
                    onClick={()=>{navigate('/pay')}}
                  >
                    Apply
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </section>
    </div>
  );
}
