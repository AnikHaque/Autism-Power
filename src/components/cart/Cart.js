import React from 'react'
import SelectSchool from '../selectSchool/SelectSchool';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props;
    console.log(props)
    let total = 0;
    for( const school of cart){
      total = total + school.student;
    }
    return (
        <div>
             <div class="card mt-5 bg-secondary">
  <div class="card-body">
    <h5 class="card-title">Added:{props.cart.length}</h5>
    <p class="card-text"><b>Total Students:{total}</b></p>
    
    <a href="#" class="btn btn-primary">Submit</a>
  </div>
</div>
<div>

</div>

<div>
  {
    cart.map(selectschool => <SelectSchool selectschool={selectschool}></SelectSchool>)
  }
</div>
        </div>
    );
};

export default Cart;