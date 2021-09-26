import React from 'react';
import './School.css'
const School = (props) => {
    const {name,img,website,Established,student,address}=props.school
    return (
        <div>
          <div class="card-group h-100">
  <div class="card  mt-3 border border-info bg-card">
    <img src={img} class="card-img-top img-fluid mt-3 mx-auto" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title"> {name}</h5>
      <p class="card-text"><b>Location:</b> {address}</p>
      <p class="card-text"><b>Establishe In: </b>{Established}</p>
      <p class="card-text"><b>No Of Students: </b>{student}</p>
      <p class="card-text"><b>Website:</b> {website}</p>
    </div>
    <div class="card-footer">
    <button onClick={()=>props.handleClick(props.school)} type="button" class="btn btn-info mx-4"><b className="text-dark mx-5 me-5"><i class="fas fa-plus-square"></i> Add School</b></button>
    </div>
  </div>
  

</div>
</div>
    );
};

export default School;