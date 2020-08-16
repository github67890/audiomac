import React , { useState, useEffect }  from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import AppleLogin from 'react-apple-login';
import Newnav from './Newnav.js'
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
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);


  const responseFacebook = (response) => {
    console.log("Login with Facebook", response);
    setName(response.name);
    setUrl(response.picture.data.url);
    setcheck("1");
  };


  const [alldata, setalldata] = React.useState([]);
  // const [foroption, setforoption] = React.useState([hahahah,dhashdhashdha,hdhasdh]);

  const getallsinglesongdata = async()  => {
    var parts = window.location.pathname.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/getsinglesongs", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: ``,
  });
    const json=await response.json();
    
   
    setalldata(json);

   
    console.log(json);
  
  
  
 
  
    }
    
  
  
  useEffect(() => {
    
   
    getallsinglesongdata();
  
  
  }, []);













  const [check, setcheck] = useState("");
  const [name, setName] = useState("");
  const [pass, setpass] = useState("");
  const [email, setEmail] = useState("");
  const [loginusername, setloginusername] = useState("");
  const [loginpass, setloginpass] = useState("");

  const [url, setUrl] = useState("https://i.ibb.co/4gypNLW/mid-left-musical.jpg");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");


  const loginusernamehandler = (e) => {
    setloginusername(e.target.value);
  };

const loginpasshandler= (e)  => {

  setloginpass(e.target.value);
  
}

const handlersearch=(event,value)=>{
window.location="/seraches/"+value;
  ////alert(value);
  

}
const onTagsChange = (event, values) => {
  alert('simple alert');
}
const handlerenter= (e)  => {

 
  if (e.key === 'Enter') {
    window.location="/seraches/"+e.target.value;
   //// alert(e.target.value);
  
}

}

const handlerpass = (e) => {
  setpass(e.target.value);
};

const loginhandler = async()  => {


  var myModule = require('views/database');

  if(loginusername!='' && loginpass!=''){

  
  const response= await fetch(myModule.servername+"/api/users/sigin", {
   
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `username=${loginusername}&pass=${loginpass}`,
  });
  const json=await response.json();
 
  if(json=="no"){
alert('Sorry You have No account');

  }
  else{
  window.localStorage.setItem('token',json[0]._id);
  window.localStorage.setItem('registername',json[0].userfullname);
  localStorage.setItem('mode', 'light');
  }

  console.log( window.localStorage.getItem('token'))

  window.location="/";
//   if(json=='already'){
//     alert('Your ACCOUNT alreaddy Created ')
//   }
//   else{
// alert('Your ACCOUNT Created now please SignIn')}
//  // window.location="/Signin";

}
else{

alert('Fill ALl fields');

}

}
  const handlercontinue = async()  => {
  
    if(email!='' && pass!=''){
   
    var myModule = require('views/database');
      const response= await fetch(myModule.servername+"/api/users/signup", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `username=${email}&pass=${pass}&imageurl=${url}&userfullname=${email}`,
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
      else{

        alert('Fill ALl fields');
      }
    }

  function mod() {
    setModal1(false);
    setModal2(true)
  }

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
   // setEmail(response.profileObj.email);
    document.getElementById("showemail").innerHTML = response.profileObj.email;
    setUrl(response.profileObj.imageUrl);
  
if(response.profileObj.email!=''){
  setcheck("1");
}

    console.log(response);
    
   
   /// document.getElementById("showemail").innerHTML = email;


   
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
  function mod() {
    setModal1(false);
    setModal2(true)
  }
  const componentClicked = (data) => {
    console.warn(data);
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
      
      clientId="938239041198-6bat00ni2ls3ugehv5f7277vmsuou6lu.apps.googleusercontent.com"
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
    
   






<FacebookLogin
      appId="315303476283115"
      render={renderProps => (
        ///   <li class="li1">  <a href="#" class="mylink">   <i class="fab fa-google">         </i> </a> </li>
       //  <button onClick={renderProps.onClick} style={}>This is my custom Google button</button>

       <li class="li1">
       <a href="#" class="mylink" onClick={renderProps.onClick}>
         <i class="fab fa-facebook"></i>
       </a>
       </li>
         )}
   
      fields="name,email,picture"
      
      onClick={componentClicked}
      callback={responseFacebook}
    />



<AppleLogin  
clientId={"com.react.apple.login"} 
redirectURI={"https://redirectUrl.com"}   
responseType={"code"} 
responseMode={"query"}  
render={renderProps => (



<li class="li1">
<a href="#" class="mylink" onClick={renderProps.onClick}>
<i class="fab fa-apple"></i>
</a>

</li >
)}
/>







  {/* <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-instagram"></i>
    </a> 
  </li>
<li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-whatsapp"></i>
    </a> 
  </li> */}



</ul>

</Col>

</Row>
     <br/>
<hr class="my-4"/>
<p id="showemail"></p>
{  check=='1' ?   <> 

<Row>
 <Col lg="9" md="6" sm="6">
   <Label for="ShopName">Username<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                  onChange={ (e) => setEmail(e.target.value)}
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                  
                </FormGroup>
              </Col>

</Row>


<Row>

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
              <Row>

<Col lg="9" md="6" sm="6">
 <Button color="info"
className = "marg"
onClick={handlercontinue}
 >SignUp NoW</Button>
</Col>
</Row>


</> : null 

}






{/* <hr class="my-4"/>
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
</Row> */}


                </ModalBody>
                <div className="modal-footer">
                  {/* <Button color="warning" type="button">
                    Continue
                  </Button> */}
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
                  <Button color="primary" type="button" onClick={loginhandler}>
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
                    defaultValue=""
                    placeholder=""
                    type="text"
                    onChange={loginusernamehandler}
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
                    type="password"
                    onChange={loginpasshandler}
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







              <Navbar className="fixed-top mynavbar mynavbar2  " >
        
    


          
          
        <Nav  >
  
     
          <i class="fas fa-ellipsis-v buliticnmarg" data-toggle="collapse" data-target="#demo"></i>
        
          <i className="fa fa-youtube-play fa-lg iconmain" />
       
          <span className="navlinksty">Ayititunes</span>
  
      
        
          

      < div className="sermarg inpsty">

      <Autocomplete
///  onInputChange={handlersearch}
onChange={handlersearch} // click on the show tags
  freeSolo
  id="free-solo-2-demo"
  disableClearable
  options={alldata.map((option) => option.songtitle)}


  renderInput={(params) => (
    <TextField
      {...params}
   
  //// onKeyDown={handlerenter}
      variant="outlined"
      InputProps={
        { ...params.InputProps, type: 'search' }
       
       }
    />
  )}
/>
      </div >




      <div className="signinupstyl">
        <span onClick={() => setModal3(true)}>Sign In/</span>
        <span onClick={() => setModal1(true)} >Sign Up</span>

      </div>     
        </Nav>
    
   

  </Navbar>
    </>
  );
}

export default IndexNavbar;
