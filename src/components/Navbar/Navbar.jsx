import { Button } from 'bootstrap'
import React, { useState } from 'react'
import Card from '../Card/Card';

function Navbar() {
  //const [edit,setEdit]=useState("");
  const [search,setSearch]=useState("");
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container ">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <button className="btn btn-outline-danger m-2" onClick={()=>{setSearch("All")}}>ALL </button>

 
          <li className="nav-item dropdown border border-danger m-2  border-radius rounded ">
    <a className="nav-link dropdown-toggle  text-danger " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Model
    </a>
    <ul className="dropdown-menu">
        <button className="btn btn-outline-danger m-2" onClick={()=>{setSearch("Nike")}}>Nike</button>
        <button className="btn btn-outline-danger m-2" onClick={()=>{setSearch("Adidas")}}>Adidas</button>
        <button className="btn btn-outline-danger m-2" onClick={()=>{setSearch("Saucony")}}>Saucony</button>
        <button className="btn btn-outline-danger m-2" onClick={()=>{setSearch("Vans")}}>Vans</button>
    </ul>
  </li>




      
        
      </ul>
        <input className="form-control me-2 w-25" type="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
    </div>
  </div>
</nav>
<div>
</div>
<div className="container ">
      <div className="row mt-5 justify-content-center m-auto"> 
<Card name={search} />
</div>
</div>
    </>
  )
}

export default Navbar
