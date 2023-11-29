import React, { useContext } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import {  useNavigate, useParams } from "react-router-dom";
import { myContext } from "../Context/Context";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(myContext);
  const  userr = user.filter((item) => item.id === parseInt(id))

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a
                  onClick={() => {
                    navigate("/admpath");
                  }}
                >
                  Home
                </a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a
                  onClick={() => {
                    navigate("/admuser");
                  }}
                >
                  User
                </a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
        {userr.map((item) => (
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="data:image/jpeg;base64,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"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">Customer id-{item.id}</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">
                      Message
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>https://{item.name}.com</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>{item.name}.github</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <MDBCardText>@{item.name}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <MDBCardText>{item.name}/instagram.in</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <MDBCardText>{item.name}/facebook.in</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {item.name}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {item.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {item.phoneNumber}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Date of Birth</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {item.dob}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Bay Area, San Francisco, CA
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardImage style={{    width: "219px",
                        marginLeft: "61px"}} 
                        src={item.product.image} alt="Image Description">
                      </MDBCardImage>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Product
                        </span>{" "}
                         Status
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Product Name:
                      </MDBCardText>
                      <MDBCardText className="text-muted">
                        {item.product.name}
                      </MDBCardText>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Product Type:
                      </MDBCardText>
                      <MDBCardText className="text-muted">
                        {item.product.type}
                      </MDBCardText>
                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Product Price:
                      </MDBCardText>
                      <MDBCardText className="text-muted">
                        {item.product.price}
                      </MDBCardText>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Product Quantity 
                      </MDBCardText>
                      <MDBCardText className="text-muted">
                        {item.product.quantity}
                      </MDBCardText>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Delevery Status 
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBContainer>
    </section>
  );
}


