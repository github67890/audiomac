import React from 'react'
import Sidebar from "components/Sidebar/Sidebar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Navbar2 from "components/Navbars/Navbar2.js";
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
function Selections() {
    return (
   
             <div>
 {localStorage.getItem('token')!=null ? <><Navbar2 /></>:  <  IndexNavbar />}
          <Row>
          <Col lg="3" md="3" sm="2" xs="2">
<Sidebar/>

</Col>
        
           

          <Col md="8" lg="8"  sm="10" xs="10">
         <br/><br/><br/>
         
          <div className="">
            <div className="container pb-5">
              <div className="row justify-content-center pb-5">

                <div className="col-12 pt-5">
                  <h2 className="mb-4 pb-2">Select Upload Type</h2>
                </div>

                <div className="col-12 pb-5">
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-1" defaultChecked onClick={()=>  window.location="/upload/"+'singlesongs'}/>
                  <label className="for-checkbox-tools" htmlFor="tool-1">
                   <span class="iconify" data-icon="bx:bx-music" data-inline="false"></span>
                 Song


                  </label>{/*
						*/}<input className="checkbox-tools" type="radio" name="tools" id="tool-2" onClick={()=>  window.location="/mulupload/"+'album'} / >
                  <label className="for-checkbox-tools" htmlFor="tool-2">
                    <span class="iconify" data-icon="ls:album" data-inline="false"></span>
                Album
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-3"   onClick={()=>  window.location="/upload/"+'poadcast'}/>
                  <label className="for-checkbox-tools" htmlFor="tool-3">
                    <span class="iconify" data-icon="feather:mic" data-inline="false"></span>
                     Podcast
                  </label>

                  <input className="checkbox-tools" type="radio" name="tools" id="tool-4" onClick={()=>  window.location="/upload/"+'mixtape'} />
                  <label className="for-checkbox-tools" htmlFor="tool-4">
                    <span class="iconify" data-icon="cil:album" data-inline="false"></span>
                     MixTape
                  </label>

 <input className="checkbox-tools" type="radio" name="tools" id="tool-5"  onClick={()=>  window.location="/upload/"+'djmixtape'}/>
                  <label className="for-checkbox-tools" htmlFor="tool-5">
                    <span class="iconify" data-icon="cib:django" data-inline="false"></span>
                      MixTape
                  </label>


                </div>
                {/* <Button color="primary">Continue</Button> */}
                
                
              </div>
            </div>	
          </div>
          </Col>
          </Row>
        </div>
        
      
        
    )
}

export default Selections
