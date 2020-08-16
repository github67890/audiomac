import React from 'react'
import Sidebar from "components/Sidebar/Sidebar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Navbar2 from "components/Navbars/Navbar2.js";
import Songscard from "components/Card/Profilecard.js";
import {
    Button,

  Container,
  Row,
  Col
  }
  from "reactstrap";
function Profilelanding() {
    return (
        <div>
             <div className="wrapper1">
             {localStorage.getItem('token')!=null ? <><Navbar2 /></>:  <  IndexNavbar />}
      
         <Row>
          <Col lg="3" md="3" sm="2" xs="2">
<Sidebar/>

</Col>




          <Col md="9" lg="9"  sm="10" xs="10">




<div className="wrapperproland">






 <Row>
   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
<Col lg="1" md="4" sm="4" xm="4">

   </Col>



   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
   <Col lg="1" md="3" sm="3" xm="3">

   </Col>

   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
   
 </Row>


<br/><br/><br/><br/><br/><br/>    

</div>

          </Col>
        </Row>
        
    
             
       
        
      </div>



        </div>
    )
}

export default Profilelanding
