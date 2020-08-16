import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Label,
  FormGroup  
} from "reactstrap";

// core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
   <Row>
 <Col lg="9" md="6" sm="6">
   <Label for="ShopName">Email<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
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
                    type="password"
                  ></Input>
                </FormGroup>
              </Col>
              </Row>


              <Row>

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
              </Row>

    </>
  );
}

export default SignUp;
