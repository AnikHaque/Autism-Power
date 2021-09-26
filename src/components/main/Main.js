import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import School from './school/School';
import './Main.css'

const Main = () => {
    const [schools, setSchools] = useState([])
    const [count, setCount] = useState([])

    useEffect(() => {
fetch('./autism.JSON')
.then(res => res.json())
.then(data => setSchools(data))
        
    }, [])

const handleClick = (school) => {
const newCount = [...count, school]
console.log(newCount)
setCount(newCount)
}

    return (
        <div>
        <div class="container-fluid">
  <div class="row">
    <div class="col-3  border-type">
   <Cart cart={count}></Cart>
    </div>
    <div class="col-9">
    <h1 className="text-center text-primary fw-bold">List of Autism Schools in BD</h1>

    <div class="row row-cols-1 row-cols-md-3">
    
      {
          schools.map(school => <School school={school} handleClick={handleClick}></School>)
      }
      </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Main;