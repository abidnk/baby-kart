import { useContext, useState } from "react"
import { myContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { MDBRow,
  MDBCol,
  MDBBtn, 
  MDBInput,
   } from "mdb-react-ui-kit";

const Adminadd = () => {
    const [productname, setProductname] = useState();
    const [productprice, setProductprice] = useState();
    const [image, setImage] = useState("");
    const {products,setProducts} = useContext(myContext);
    const navigate = useNavigate();


    const additem = () => {
        setProducts([...products,{
            id: products.length+1,
            name: productname,
            price: productprice,
            src: image 
        }])
        alert("Product Added Successfully")
        navigate("/admpath")
    }
    return(
        <>
        <div>
        <MDBRow className="g-0 bg-light position-relative ">
          <MDBCol md="6" className="mb-md-0 p-md-4">
            <img
              src="https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGZhY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              className="w-50"
              alt="..."
            />
          </MDBCol>
          <MDBCol
            md="5"
            className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
            id="view-right"
          >
            <div className="viewright-down">
              <div>
                <label>PRODUCT NAME</label>
                <MDBInput
                  type="text"
                  label="PRODUCT NAME"
                  onChange={(e) => setProductname(e.target.value)}
                />
              </div>
              <div>
                <label>AMOUNT</label>
                <MDBInput
                  type="number"
                  label="AMOUNT"
                  onChange={(e) => setProductprice(e.target.value)}
                />
              </div>

              <div>
                <label>Image</label>
                <MDBInput
                  type="text"
                  label="IMAGE"
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div>
                <MDBBtn size="sm" rounded color="link" onClick={()=>{additem()}}>
                  ADD PRODUCT
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      </>


    )


}
export default Adminadd;