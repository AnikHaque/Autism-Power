import React from 'react';

const SelectSchool = (props) => {
    const {name,img} = props.selectschool
    return (
        <div>
            <br></br>
            <br></br>
            <h3>Showing Delails</h3>
            <div className="card">
  <img src={img} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">School Name:<p>{name}</p></h5>
  </div>
</div>
        </div>
    );
};

export default SelectSchool;