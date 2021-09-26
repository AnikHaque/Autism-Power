import React from 'react';

const SelectSchool = (props) => {
    const {name,img} = props.selectschool
    return (
        
        <div>
            <br></br>
            <br></br>
        
            <div className="card">
  <img src={img} className="card-img- img-fluid" alt="..."></img>
  <div className="card-body">
    <p className="card-title text-center">School Name:<br></br><b>{name}</b></p>
  </div>
</div>
        </div>
    );
};

export default SelectSchool;