import React , { useState, useEffect }  from "react";
import IndexNavbar from "components/Navbars/Navbar2.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import {
    Table, Card,
    Label,
    Input,
    FormGroup,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Button,
    Row,
    Col
} from 'reactstrap';
function DMAC() {




    const [description, setdescription] = useState("");
    const [songurl, setsongurl] = useState("");




    const submitdmac =  async() => {
      ////  alert('ddddddddddddd')
        if(localStorage.getItem('token')!=null){
        var myModule = require('views/database');
        const response= await fetch(myModule.servername+"/api/users/requestdmac", {
          method: "post",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          body: `postedid=${localStorage.getItem('token')}&description=${description}&songurl=${songurl}&username=${localStorage.getItem('registername')}`,
        });

        
        const json=await response.json();


        alert("Your Request Subitted");

    }
    }




    return (
        <div>
            <IndexNavbar />

            <Row>
                <Col lg="2" md="2" sm="2" xs="2">

                    <div id="demo" class="collapse in">
                        <Sidebar />
                    </div>



                </Col>




                <Col md="9" lg="9" sm="10" xs="10">


                    <br /><br /><br /><br /><br /><br />
            <Row>
                <Col lg="4" md="3" sm="3" xm="3">

                </Col>
                <Col lg="3" md="3" sm="3" xm="3">
                    <h2>DMAC</h2>
                </Col>
            </Row>
            <br /> <br /> 
            <Row>
                <Col lg="1" md="1" sm="1" xm="1">

                </Col>
                <Col lg="3" md="3" sm="4" xm="4">
                    <Label for="ShopName">Song Url<span className="sred">*</span></Label>
                    <FormGroup >
                        <Input
                            required
                            defaultValue=""
                            placeholder=""
                            type="text"
                            onChange={(e) =>setsongurl(e.target.value)}
                        ></Input>
                    </FormGroup>
                </Col>
                <Col md="1" lg="1" sm="1" xs="1">
                    </Col>
                <Col md="4" lg="4" sm="5" xs="5">
                    <Label for="ShopName">Description<span className="sred">*</span></Label>
                    <div className="textarea-container">
                        <Input
                            required
                            cols="80"
                            name="name"
                            placeholder="Add Description"
                            rows="4"
                            type="textarea"
                            onChange={(e) =>setdescription(e.target.value)}
                        ></Input>
                    </div>
                </Col>
                </Row>
            <br /><br />

            <Row>
                <Col md="8" lg="4" sm="8" xs="8">
                    
                </Col>
                <Col md="8" lg="4" sm="8" xs="8">
                </Col>
                <Col md="4" lg="4" sm="7" xs="7">
                    <Button   onClick={submitdmac}className="btn-round" color="info" type="button" >
                        <i className="now-ui-icons arrows-1_minimal-right"></i>

                         &nbsp;
               Submit
              </Button>
                </Col>

            </Row>
</Col>
</Row>
        </div>
    )
}

export default DMAC
