import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { myContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { user } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  setIsLoggedIn, setUserContext} = useContext(myContext);
  
  const HandleClick = (e) => {
    e.preventDefault();
    const loggedIn = user.find(
      (element) => element.email === email && element.password === password
      );
      if (loggedIn) {
       
        setIsLoggedIn(true);
        setUserContext(loggedIn.id);
        navigate("/");
      }else{
        alert("No User Found")
      }
      console.log(loggedIn.name)
    };

  return (
    <div className="user "
    style={{ backgroundColor: "#b35946"}}>
      <MDBContainer className="my-5">
        
        <form onSubmit={HandleClick}>
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://media.istockphoto.com/id/1071618358/vector/mother-holding-a-baby-in-heart-shaped-silhouette-paper-art.jpg?s=612x612&w=0&k=20&c=MFaK4HDyiVD3b_GKZyhzhR_1TuuV2Z0FexWO-jWzt0A="
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2">
                    <MDBIcon
                      fas
                      icon="cubes fa-3x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">
                      <MDBCardImage src="">
                      </MDBCardImage>
                    </span>
                  </div>

                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                  >
                    Login
                  </MDBBtn>

                  <a className="small text-muted" href="#!">
                    Forgot password?
                  </a>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a onClick={() => navigate("/register")} style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>

                  <div className="d-flex flex-row justify-content-start">
                    <a href="#!" className="small text-muted me-1">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </form>
      </MDBContainer>
    </div>
  );
}

export default Login;
