import React from 'react'
import Infor from "components/Upload/Infor.js"
import Metadata from "components/Upload/Metadata.js"
import {
    Button,
    Input,
    Label,
    FormGroup,
   Card,
   Modal,
   ModalBody,
   CardHeader,
   CardBody,
   NavItem,
   NavLink,
   Nav,
   TabContent,
   TabPane,
   Container,
    Row,
    Col
} from "reactstrap";
function Upload() {
   const [modal1, setModal1] = React.useState(false);
   const [modal2, setModal2] = React.useState(false);
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return (
        <div>
            <Container>
          <Row>
            <Col className="" md="10" xl="10">
            <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="orange"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                       Information
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Metadata
                      </NavLink>
                    </NavItem>
                    
                      
                    
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <div>
                      <Container>
                <h2>Basic Information</h2>
                <Row>
                    <Col md="3" lg="3" sm="5" xs="5">
                    
                     <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/no.jpg")}
                ></img>
                     <Button className="btn-round" color="primary" type="file">
                         <i className="now-ui-icons media-1_camera-compact"></i>
                         &nbsp;
                Add Image
              </Button>
              
                      {/* <Input type="file" nameName="info" id="exampleFile" /> */}
                    </Col>
 <Col md="9" lg="9" sm="7" xs="7">

<Row>

                <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Artist<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
                    <br/>
                    <Row>
 <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Song Title<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
</Col>
                </Row>

 <Row>
 <Col md="5" lg="5" sm="8" xs="9">

 <Label for="ShopName">
Featuring</Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
     </Col>
<Col md="5" lg="5" sm="8" xs="9">

 <Label for="ShopName">Producer(s)</Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
     </Col>
     </Row>
<br/>

<Row>
 <Col md="7" lg="7" sm="8" xs="9">
<Label for="ShopName">Genre<span className="sred">*</span></Label>
 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect">
          <option>--select genre--</option>
          <option>Carnival</option>
          <option>Rap Kreyol</option>
          <option>Trap Kreyol</option>
          <option>Kompa</option>
          <option>Racine</option>
          <option>Rara</option>
          <option>Trap kompa</option>
         <option>World</option>
         <option>Afrobeats</option>
        </Input>
      </FormGroup>
</Col>
</Row>
<br/>
<Row>
 <Col md="4" lg="4" sm="7" xs="7">
<Label for="ShopName">Tags</Label>
 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect">
          <option>--select tag one--</option>
          <option>Carnival</option>
          <option>Rap Kreyol</option>
          <option>Trap Kreyol</option>
          <option>Kompa</option>
          <option>Racine</option>
          <option>Rara</option>
          <option>Trap kompa</option>
         <option>World</option>
         <option>Afrobeats</option>
        </Input>
      </FormGroup>
</Col>

 <Col md="4" lg="4" sm="7" xs="7">
<Label for="ShopName">Tags<span className="sred">*</span></Label>
 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect">
          <option>--select tag three--</option>
          <option>Carnival</option>
          <option>Rap Kreyol</option>
          <option>Trap Kreyol</option>
          <option>Kompa</option>
          <option>Racine</option>
          <option>Rara</option>
          <option>Trap kompa</option>
         <option>World</option>
         <option>Afrobeats</option>
        </Input>
      </FormGroup>
</Col>


</Row>

<br/>
<Row>
 <Col md="4" lg="4" sm="7" xs="7">

 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect">
          <option>--select tag two--</option>
          <option>Carnival</option>
          <option>Rap Kreyol</option>
          <option>Trap Kreyol</option>
          <option>Kompa</option>
          <option>Racine</option>
          <option>Rara</option>
          <option>Trap kompa</option>
         <option>World</option>
         <option>Afrobeats</option>
        </Input>
      </FormGroup>
</Col>

 <Col md="4" lg="4" sm="7" xs="7">

 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect">
          <option>--select tag four--</option>
          <option>Carnival</option>
          <option>Rap Kreyol</option>
          <option>Trap Kreyol</option>
          <option>Kompa</option>
          <option>Racine</option>
          <option>Rara</option>
          <option>Trap kompa</option>
         <option>World</option>
         <option>Afrobeats</option>
        </Input>
      </FormGroup>
</Col>


</Row>



<br/><br/>

<Row>
 <Col md="4" lg="4" sm="7" xs="7">
<div class="area">
    <div id="dropZone">Drop files here
    
    <Input type="file" className="files" id="exampleFile" />
    </div>
     
</div>
</Col>
</Row>
<br/>
<br/>
<Row>
 <Col md="8" lg="8" sm="8" xs="8">
     </Col>

<Col md="4" lg="4" sm="7" xs="7">
      <Button className="btn-round" color="info" type="file">
                         <i className="now-ui-icons arrows-1_minimal-right"></i>
                         &nbsp;
                Next
              </Button>
     </Col>

</Row>
            </Container>
                      </div>
                    </TabPane>
                    <TabPane tabId="pills2">

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
                  <h4 className="title title-up">Release</h4>
                </div>
                <ModalBody>
                  <Row>
                   <Col md="6">
                     <h3>Share on facebook</h3>
                   </Col>
                 <Col md="6">
                     <h3>Share on twitter</h3>
                   </Col>

                  </Row>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="primary" type="button"
                    href="/upload"
                    onClick={"Upload"}

                  >
                    New Song
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



               <h2>Enter Metadata</h2>
                      <Row>
                    
 <Col md="7" lg="7" sm="8" xs="9">

<Row>

                <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Album</Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
                    <br/>
                    <Row>
 <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Youtube Url<span className="sred"></span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
</Col>
<Col md="4" lg="4" sm="5" xs="5">
   <Label for="ShopName">Song Description</Label>
<div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder = "Add Description"
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
  </Col>
                </Row>
<br/>
 <Row>
 <Col md="3" lg="3" sm="6" xs="6">
 <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Public
                </Label>
              </FormGroup>
   </Col>
   </Row>
<Row>
 <Col md="3" lg="3" sm="6" xs="6">
 <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                   
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Private
                </Label>
              </FormGroup>
   </Col>
   </Row>
<br/>
<Row>
 <Col md="6" lg="6" sm="8" xs="9">
<Label for="ShopName">Song Url<span className="sred"></span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
   </Col>
   </Row>


   
<br/><br/>

<Row>
 <Col md="8" lg="4" sm="8" xs="8">
    <Button className="btn-round" color="danger" type="file">
                         <i className="now-ui-icons arrows-1_minimal-left"></i>
                         &nbsp;
                Back
              </Button>
     </Col>
<Col md="8" lg="4" sm="8" xs="8">
     </Col>
<Col md="4" lg="4" sm="7" xs="7">
      <Button className="btn-round" color="info" type="button" onClick={() => setModal1(true)} >
                         <i className="now-ui-icons arrows-1_minimal-right"></i>
                         &nbsp;
                Next
              </Button>
     </Col>

</Row>
                      </div>
                    </TabPane>
                   
                    
                  </TabContent>
                </CardBody>
              </Card>
</Col>
</Row>
</Container>
        </div>
    )
}

export default Upload

