import React , { useState }from "react";
import GoogleLogin from "react-google-login";

import { Link } from "react-router-dom";
import {

} from 'react-bootstrap';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
   Modal,
   ModalBody,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import SignUp from "views/index-sections/SignUp.js";
function IndexNavbar() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);

  const [name, setName] = useState("");
  const [pass, setpass] = useState("");
  const [email, setEmail] = useState("");
  const [loginusername, setloginusername] = useState("");
  const [loginpass, setloginpass] = useState("");

  const [url, setUrl] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const handlerpass = (e) => {
    setpass(e.target.value);
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });


  const loginusernamehandler = (e) => {
    setloginusername(e.target.value);
  };

const loginpasshandler= (e)  => {

  setloginpass(e.target.value);
  
}


const loginhandler = async()  => {


  var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/sigin", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `username=${loginusername}&pass=${loginpass}`,
  });
  const json=await response.json();
  console.log(json);
  window.localStorage.setItem('token',json);



  console.log( window.localStorage.getItem('token'))
//   if(json=='already'){
//     alert('Your ACCOUNT alreaddy Created ')
//   }
//   else{
// alert('Your ACCOUNT Created now please SignIn')}
//  // window.location="/Signin";



}
  const handlercontinue = async()  => {
  
  
   
    var myModule = require('views/database');
      const response= await fetch(myModule.servername+"/api/users/signup", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `username=${email}&pass=${pass}`,
      });
      const json=await response.json();
      console.log(json);
      if(json=='already'){
        alert('Your ACCOUNT alreaddy Created ')
      }
      else{
alert('Your ACCOUNT Created now please SignIn')}
     // window.location="/Signin";

    }

  function mod() {
    setModal1(false);
    setModal2(true)
  }

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    document.getElementById("showemail").innerHTML = response.profileObj.email;
    setUrl(response.profileObj.imageUrl);
   
    console.log(response);
   /// document.getElementById("showemail").innerHTML = email;
  };
  return (
    <>
      <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">SignUp</h4>
                </div>
                <ModalBody>
              <br></br>   
<Row>
                
<Col lg="12" md="10">


<ul class="ul1">
 
   
      <GoogleLogin
      
                        clientId="1093297451164-6d3mfddu3947dnf4ov4g87gjnlvcr778.apps.googleusercontent.com"
                        render={renderProps => (
                       ///   <li class="li1">  <a href="#" class="mylink">   <i class="fab fa-google">         </i> </a> </li>
                      //  <button onClick={renderProps.onClick} style={}>This is my custom Google button</button>
                       <li class="li1">  <a href="#" class="mylink" onClick={renderProps.onClick} >   <i class="fab fa-google">         </i> </a> </li>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      >
        
       
        
  </GoogleLogin>
                      
                     
      
   
 


  <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-facebook"></i>
    </a>
    </li>
  <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-apple"></i>
    </a>
    
  </li >
  <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-instagram"></i>
    </a> 
  </li>
<li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-whatsapp"></i>
    </a> 
  </li>



</ul>

</Col>

</Row>
     <br/>
<hr class="my-4"/>

 <Row>
 <Col lg="9" md="6" sm="6">
   <Label for="ShopName">Email<span className="sred">*</span></Label>
               <FormGroup >
                  {/* <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input> */}
                  <p id="showemail"></p>
                </FormGroup>
              </Col>

</Row><Row>

<Col lg="9" md="6" sm="6">
   <Label for="ShopName">Password<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    onChange={handlerpass}
                    type="password"
                  ></Input>
                </FormGroup>
              </Col>
              </Row>


              {/* <Row>

<Col lg="9" md="6" sm="6">
   <Label for="ShopName">Conform Password<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="password"
                  ></Input>
                </FormGroup>
              </Col>
              </Row> */}





<hr class="my-4"/>
<span className="marg1">Or</span>
<br/>
 <Row>

<Col lg="9" md="6" sm="6">
 <Button color="info"
className = "marg"
 onClick={() => mod()}
  // onClick={() => setModal2(true)}
 >SignUp Email</Button>
</Col>
</Row>


                </ModalBody>
                <div className="modal-footer">
                  <Button color="warning" type="button" onClick={handlercontinue}>
                    Continue
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>


  <Modal isOpen={modal2} toggle={() => setModal2(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">SignUp</h4>
                </div>
                <ModalBody>
                 <SignUp/>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="primary" type="button">
                    Submit
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>


 <Modal isOpen={modal3} toggle={() => setModal3(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Sign In</h4>
                </div>
                <ModalBody>
                <Row>
 <Col lg="9" md="6" sm="6">
   <Label for="ShopName">Email<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    onChange={loginusernamehandler}
                    
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>

</Row><Row>

<Col lg="9" md="6" sm="6">
   <Label for="ShopName">Password<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                   defaultValue=""
                   placeholder = ""
                   onChange={loginpasshandler}
                   type="password"
                  ></Input>
                </FormGroup>
              </Col>
              </Row>


              
                </ModalBody>
                <div className="modal-footer">
                  <Button color="primary" type="button" onClick={loginhandler}>
                    Submit
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>







      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="primary">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
            >
              Now UI Kit React
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              By Encodersoft
            </UncontrolledTooltip>
          
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            
              <NavItem>
                <NavLink
                  href="#pablo"
                 onClick={() => setModal1(true)}
                >
                  {/* <i className="now-ui-icons users_circle-08"></i> */}
                  <p>SignUp</p>
                </NavLink>             
              </NavItem>
             
           <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={() => setModal3(true)}
                >
                  {/* <i className="now-ui-icons users_circle-08"></i> */}
                  <p>Sign In</p>
                </NavLink>             
              </NavItem>





<NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons ui-1_bell-53"></i>
                  
                </NavLink>


                
              </NavItem>
              
             
              <NavItem>
                <Button
                  className="nav-link btn-neutral btupload"
                  
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upload</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
