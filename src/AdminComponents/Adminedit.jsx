import React, { useContext, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBInput,
} from "mdb-react-ui-kit";
import './Admin.css';
import { myContext } from '../Context/Context';
import { useNavigate, useParams } from 'react-router-dom';

export default function Adminedit() {
  const { products, setProducts } = useContext(myContext);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const edit = products.filter((item) => item.id === parseInt(id));
  const [productname, setProductname] = useState(edit.length > 0 ? edit[0].name : "");
  const [productprice, setProductprice] = useState(edit.length > 0 ? edit[0].price : "");
  const [isEdit, setIsEdit] = useState(false);
  
  const confirmchange = () => {
    const updated = products.map((item) =>
      item.id === parseInt(id)
        ? {
            ...item,
            name: productname,
            price: productprice
          }
        : item
    );
    setProducts(updated);
    alert("Product Updated")
    setIsEdit(true)
  }

  return (
    <div className='container'>
      <div className='suba row'>
        <div className="col-md-6">
          <h2>Edit As You Need</h2>
          <MDBCard
            id="card-form"
            className="shadow p-3 mb-5 bg-body-tertiary rounded m-4"
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
            >
              <MDBCardImage
                src={edit.length > 0 ? edit[0].src : ""}
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        <div className="col-md-5 mt-5">
          <MDBCard
            id="card-form"
            className="shadow p-3 mb-5 bg-body-tertiary rounded m-3"
          >
            <form className={!isEdit ? "form-active" : ""}>
              <MDBCardBody>

                <MDBCardTitle>
                  <div>
                    <i onClick={() => setIsEdit(!isEdit)}>Edit</i>
                  </div>
                </MDBCardTitle>
                <label>Product Name</label>
                <MDBInput
                  label='Product Name'
                  type='text'
                  placeholder={productname}
                  disabled={isEdit}
                  onChange={(e) => setProductname(e.target.value)}
                     />
                <br />

                <label>AMOUNT</label>
                <MDBInput
                  label='Product price'
                  type='number'
                  placeholder={productprice}
                  disabled={isEdit}
                  onChange={(e) => setProductprice(e.target.value)}
                >
                  <h5>Rs.</h5>
                </MDBInput>
                <br />
                <br />
                {!isEdit ? (
                  <MDBBtn onClick={() => confirmchange()} style={{ backgroundColor: "#b35946" }}>CONFIRM EDIT</MDBBtn>
                ) : null}
                <MDBBtn className='ms-5' onClick={() =>navigate('/admpath')} style={{ backgroundColor: "#b35946" }}>Go Back</MDBBtn>
              </MDBCardBody>
            </form>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}
