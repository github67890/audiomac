import React from "react";
import Sidebar from "components/Sidebar/Sidebar.js";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Scard from "components/Card/scard.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      
      <div className="wrapper">
        <IndexNavbar />
      <br/><br/><br/>
      
         <Row>
          <Col lg="3" md="3" sm="2" xs="2">
<Sidebar/>

</Col>
        
          <Col md="9" lg="9"  sm="10" xs="10">
 <Row>
          <Col md="3" sm="4" xs="4">
   <Scard/>
    
</Col>
</Row>


          </Col>
        </Row>
        
        
             
       
        
      </div>
    </>
  );
}

export default LandingPage;
