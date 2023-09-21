import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center"
      color="white"
      style={{ backgroundColor: "#b35946", color: "black" }}
    >
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Keep In Touch</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                  • Baby-Kart/instagram.com 
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  • Baby-Kart/facebook.com 
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  • Baby-Kart/twitter.com 
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  • Baby-Kart/instagram.com 
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact us</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                  • Ph:0435-22554488
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  • Mobile:+91 91055 6628
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  • Email: babykart@gmal.com
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                  • Fax: 4152875595
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Office</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Street No. 2213
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Chola Street
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Bhopal
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    India - 672545
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Official Partners:</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://mamaearth.in/" className="text-white">
                  • MamaEarth
                  </a>
                </li>
                <li>
                  <a href="https://themomsco.com/" className="text-white">
                  • the moms co
                  </a>
                </li>
                <li>
                  <a href="https://www.babycarestores.in/" className="text-white">
                  • Babycare
                  </a>
                </li>
                <li>
                  <a href="https://www.mothercare.in/" className="text-white">
                  • MotherCare
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://baby-kart.netlify.app">
          Baby-kart.netlify.com
        </a>
      </div>
    </MDBFooter>
  );
}
