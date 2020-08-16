import React , { useState, useEffect }  from "react";
import Sidebar from "components/Sidebar/Sidebar.js";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    FormGroup,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Modal,
    ModalBody,
    Navbar,
    Label,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/Navbar2.js";

function Editprofile() {

    
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);

    const [userfullname, setuserfullname] = React.useState("");
    const [username, setusername] = React.useState("");
    const [imageurl, setimageurl] = React.useState("");
    const [pass, setpass] = React.useState("");
    const [facevookurl, setfacevookurl] = React.useState("");
    
    const [ twitterurl, settwitterurl] = React.useState("");

    const [ youtubeurl, setyoutubeurl] = React.useState("");

    const [instaurl, setinstaurl] = React.useState("");

    const [oldpass, setoldpass] = React.useState("");
    const [newpass, setnewpass] = React.useState("");

    const updatepass = async()  => {

if(oldpass!=pass){

    alert('Sorry you entered wrong Current Password');
}
else{
    var myModule = require('views/database');
      
        
    const response= await fetch(myModule.servername+"/api/users/updateuserpass", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `postedid=${localStorage.getItem('token')}&newpass=${newpass}`,
    });
    const json=await response.json();
    setModal1(false);
    window.location="/editprofile";




}

    }









    const saveinfo = async()  => {


        var myModule = require('views/database');
      
        
        const response= await fetch(myModule.servername+"/api/users/saveuserinfo", {
          method: "post",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          body: `postedid=${localStorage.getItem('token')}&userfullname=${userfullname}
          &username=${username}&facevookurl=${facevookurl}&youtubeurl=${youtubeurl}
          &instaurl=${instaurl}&twitterurl=${twitterurl}`,
        });
        const json=await response.json();
        setModal1(false);
window.location="/editprofile";

    }




    const getuserinfo = async()  => {


        var myModule = require('views/database');
      
        
        const response= await fetch(myModule.servername+"/api/users/getuserinfo", {
          method: "post",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          body: `postedid=${localStorage.getItem('token')}`,
        });
        const json=await response.json();
        setuserfullname(json[0].userfullname);
    setyoutubeurl(json[0].youtubeurl);
    setinstaurl(json[0].instaurl);
    settwitterurl(json[0].twitterurl);
    setfacevookurl(json[0].facevookurl);
    setimageurl(json[0].imageurl);
    setpass(json[0].pass);
    
    setusername(json[0].username);
    
      }






    useEffect(() => {
      
   
       getuserinfo();
      
      
      }, []);
    return (
        <div>

            <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                    <button
                        className="close"
                        type="button"
                        onClick={() => setModal1(false)}
                    >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h4 className="title title-up">Change Password</h4>
                </div>
                <ModalBody>
                    <div>
                        <Row>
                            <Col md="3" lg="3" sm="3" xs="3">
                            </Col>
                            <Col md="6" lg="6" sm="8" xs="8">
                                <Label className="YourName">
                                    Current Password</Label>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder=""
                                        type="text"
                                        onChange={(e) =>setoldpass(e.target.value)}
                                    ></Input>
                                </FormGroup>

                            </Col>
</Row>
                        <Row>
                            <Col md="3" lg="3" sm="3" xs="3">
                            </Col>
                            <Col md="6" lg="6" sm="8" xs="8">
                                <Label className="YourName">
                                    New Password</Label>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder=""
                                        type="text"
                                        onChange={(e) =>setnewpass(e.target.value)}
                                    ></Input>
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row>
                            <Col md="3" lg="3" sm="3" xs="3">
                            </Col>
                            {/* <Col md="6" lg="6" sm="8" xs="8">
                                <Label className="YourName">
                                    Confirm Password</Label>
                                <FormGroup>
                                    <Input
                                        defaultValue=""
                                        placeholder=""
                                        type="text"
                                    ></Input>
                                </FormGroup>

                            </Col> */}
                        </Row>



                    </div>
                </ModalBody>
                <div className="modal-footer">
                    <Button color="success" type="button" onClick={updatepass}>
                        Update
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




            
            <Modal
                modalClassName="modal-mini modal-danger"
                toggle={() => setModal2(false)}
                isOpen={modal2}
            >
                <div className="modal-header justify-content-center">
                    <div className="modal-profile">
                        <i className="now-ui-icons users_circle-08"></i>
                    </div>
                </div>
                <ModalBody>
                    <p>Did You really want to Delete the Account</p>
                </ModalBody>
                <div className="modal-footer">
                    <Button color="danger">No</Button>
                    <Button
                       
                        color="warning"
                        type="button"
                        onClick={() => setModal2(false)}
                    >
                        Yes
                  </Button>
                </div>
            </Modal>








            <IndexNavbar />

            <Row>
                <Col lg="2" md="2" sm="2" xs="2">

                    <div id="demo" class="collapse in">
                        <Sidebar />
                    </div>



                </Col>




                <Col md="9" lg="9" sm="10" xs="10">
                    <br /><br /><br /><br />
  
            <Row>
                     <Col md="4" lg="4" sm="4" xs="4">
                        </Col>


                        <Col md="4" lg="4" sm="4" xs="4">
                            <div className="  " >
                                
                                <img
                                    alt="..."
                                    className="rounded img-raised widthig"
                                    src={imageurl}
                                ></img>
                                {/* <label for="img">Change Profile:</label>
                                <Input type="file" accept="image/*" /> */}
                            </div>
                        </Col>

                        <Col md="2" lg="2" sm="2" xs="2">
                            
                        </Col>

                        <Col md="2" lg="2" sm="2" xs="2">
                            {/* <Button color="danger" onClick={() => setModal2(true)}>Delete Account</Button> */}
                        </Col>


         </Row>
<br/>

                    <Row>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <Label className="YourName">
                                Name</Label>
                            <FormGroup>
                                <Input
                                    defaultValue={userfullname}
                                    placeholder=""
                                    type="text"
                                    onChange={(e) =>setuserfullname(e.target.value)}
                                ></Input>
                            </FormGroup>

                        </Col>

                        <Col md="4" lg="4" sm="4" xs="4">
                            <Label className="YourName">
                                Username</Label>
                            <FormGroup>
                                <Input
                                    defaultValue={username}
                                    placeholder=""
                                    type="text"
                                    onChange={(e) =>setusername(e.target.value)}
                                ></Input>
                            </FormGroup>

                        </Col>
                        


                        <Col md="4" lg="4" sm="4" xs="4">
                        </Col>


                    </Row>
<br/>
    

                    <br />
                    <Row>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <InputGroup className={leftFocus ? "input-group-focus" : ""}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i aria-hidden="true" class="facebook f large icon"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                defaultValue={facevookurl}
                                    placeholder="Enter Facebook Url"
                                    onChange={(e) =>setfacevookurl(e.target.value)}
                                    type="text"
                                    onFocus={() => setLeftFocus(true)}
                                    onBlur={() => setLeftFocus(false)}
                                ></Input>
                            </InputGroup>
                        </Col>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <InputGroup className={leftFocus ? "input-group-focus" : ""}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i aria-hidden="true" class="twitter large icon"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  defaultValue={twitterurl}
                                  onChange={(e) =>settwitterurl(e.target.value)}
                                    placeholder="Enter Twitter Url"
                                    type="text"
                                    onFocus={() => setLeftFocus(true)}
                                    onBlur={() => setLeftFocus(false)}
                                ></Input>
                            </InputGroup>
                        </Col>


                    </Row>

                    <br />
                    <Row>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <InputGroup className={leftFocus ? "input-group-focus" : ""}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i aria-hidden="true" class="youtube large icon"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  defaultValue={youtubeurl}
                                  onChange={(e) =>setyoutubeurl(e.target.value)}
                                    placeholder="Enter Youtube Url"
                                    type="text"
                                    onFocus={() => setLeftFocus(true)}
                                    onBlur={() => setLeftFocus(false)}
                                ></Input>
                            </InputGroup>
                        </Col>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <InputGroup className={leftFocus ? "input-group-focus" : ""}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i aria-hidden="true" class="instagram large icon"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    defaultValue={instaurl}
                                    type="text"
                                    onChange={(e) =>setinstaurl(e.target.value)}
                                    onFocus={() => setLeftFocus(true)}
                                    onBlur={() => setLeftFocus(false)}
                                ></Input>
                            </InputGroup>
                        </Col>


                    </Row>
<br/>
                    <Row>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <Button color="success" onClick={() => setModal1(true)}>Update Password</Button>
                         </Col>
                        <Col md="4" lg="4" sm="4" xs="4">

                        </Col>
                        <Col md="4" lg="4" sm="4" xs="4">
                            
                        </Col>

</Row>

                    <br />
                    <Row>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <Button color="warning">Back</Button>
                        </Col>
                        <Col md="4" lg="4" sm="4" xs="4">

                        </Col>
                        <Col md="4" lg="4" sm="4" xs="4">
                            <Button color="primary" onClick={saveinfo}>Save</Button>
                        </Col>

                    </Row>



</Col>
</Row>
        </div>
    )
}

export default Editprofile
