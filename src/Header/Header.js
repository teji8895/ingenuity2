import React,{Component} from 'react';
import './header.css';

import {nav,button,form,span} from 'bootstrap';



class NavDrawer extends Component
{
    render(){

  
    return(
      <div id="wrapper" class="animate">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


 
    <nav class="navbar header-top fixed-top navbar-expand-lg  navbar-dark bg-darkblue ">
     
      <a class="navbar-brand" href="#">EQMS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      
        <ul class="navbar-nav ml-md-auto d-md-flex">
          <li class="nav-item">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Top Menu Items</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li>
          <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
           <button class="btn btn-outline-success my-3 my-sm-0" type="submit">Search</button>
         </form>
         </li>
        </ul>
      </div>
    </nav>
    </div>
    );   
}
}
export default NavDrawer
