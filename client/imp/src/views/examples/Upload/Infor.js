import React from 'react'
import {
    Button,
    Input,
    Label,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

function Infor() {
    return (
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
    )
}

export default Infor
