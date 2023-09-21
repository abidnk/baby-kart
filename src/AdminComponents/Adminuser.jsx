import React, { useContext } from 'react';
import { MDBBadge,
     MDBBtn,
      MDBTable,
       MDBTableHead,
        MDBTableBody 
    } from 'mdb-react-ui-kit';
import { myContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

export default function Adminuser() {
    const {user} = useContext(myContext)
    const navigate = useNavigate();

  return (
    <div>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
          <th scope='col'>Id</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
    {user.map((item)=>(
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{item.name}</p>
                
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item.email}</p>
          
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Active 
            </MDBBadge>
          </td>
          <td>{item.id}</td>
          <td>
            <MDBBtn color='link' onClick={() => {navigate(`/admpro/${item.id}`)}} rounded size='sm'>
              open
            </MDBBtn>
          </td>
        </tr>
      ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}