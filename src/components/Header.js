import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
    return (
 <Jumbotron>
  <h1 style ={{color: "darkgrey" , fontSize:"40px", backgroundColor:"white"}}>Employee Directory !!</h1>
  <p>
       This is a table of employee , search the employee you need with their detail ! 
  </p>
 </Jumbotron>
    )
}

export default Header;