import React, { useEffect, useState } from 'react';
import School from './school/School';

const Main = () => {
    const [schools, setSchools] = useState([])
    useEffect(() => {
fetch('./autism.JSON')
.then(res => res.json())
.then(data => setSchools(data))
        
    }, [])
    return (
        <div>
        <div class="container-fluid">
  <div class="row">
    <div class="col-3">
    <div class="card">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-9">
      <div class="row row-cols-1 row-cols-md-3">

      {
          schools.map(school => <School school={school}></School>)
      }
      </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Main;