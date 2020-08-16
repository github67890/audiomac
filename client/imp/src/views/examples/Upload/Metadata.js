import React from 'react'
import {
    Button,
    Input,
    Label,
    FormGroup,
    Modal,
    ModalBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";
function Metadata() {
     const [modal1, setModal1] = React.useState(false);
     const [modal2, setModal2] = React.useState(false);
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
    )
}

export default Metadata
