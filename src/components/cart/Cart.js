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
             <div class="card h-100 mt-5 bg-secondary w-75">
  <div class="card-body">
    <h5 class="card-title text-white text-center">Added:{props.cart.length}</h5>
    <p class="card-text text-white text-center"><b>Total Students:{total}</b></p>
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