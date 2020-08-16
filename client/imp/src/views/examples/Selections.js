import React from 'react'
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
       
          <input className="checkbox" type="checkbox" name="general" id="general" />
          <label className="for-checkbox" htmlFor="general" />
         
          <div className="section over-hide z-bigger">
            <div className="container pb-5">
              <div className="row justify-content-center pb-5">

                <div className="col-12 pt-5">
                  <h2 className="mb-4 pb-2">Select Upload Type</h2>
                </div>

                <div className="col-12 pb-5">
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-1" defaultChecked />
                  <label className="for-checkbox-tools" htmlFor="tool-1">
                   <span class="iconify" data-icon="bx:bx-music" data-inline="false"></span>
                    Song
                  </label>{/*
						*/}<input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
                  <label className="for-checkbox-tools" htmlFor="tool-2">
                    <span class="iconify" data-icon="ls:album" data-inline="false"></span>
                    Album
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-3" />
                  <label className="for-checkbox-tools" htmlFor="tool-3">
                    <span class="iconify" data-icon="feather:mic" data-inline="false"></span>
                    Podcast
                  </label>

                  <input className="checkbox-tools" type="radio" name="tools" id="tool-4" />
                  <label className="for-checkbox-tools" htmlFor="tool-4">
                    <span class="iconify" data-icon="cil:album" data-inline="false"></span>
                    MixTape
                  </label>

 <input className="checkbox-tools" type="radio" name="tools" id="tool-5" />
                  <label className="for-checkbox-tools" htmlFor="tool-5">
                    <span class="iconify" data-icon="cib:django" data-inline="false"></span>
                    MixTape
                  </label>


                </div>
                <Button color="primary">Continue</Button>
                
                
              </div>
            </div>	
          </div>
        </div>
        
      
        
    )
}

export default Selections
