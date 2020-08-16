import React from 'react'
import {


  Modal,
  ModalBody,
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function Songscard() {
    return (
      <div>
      
  <div class="cellphone-container">    
      <div class="movie">       
        <div class="menu">

          <i aria-hidden="true" class="arrow alternate circle down big icon "></i>
        </div>

<div class="menu-plyhov">

         <i aria-hidden="true" class="play huge icon "></i>
        </div>



        <div class="movie-img"></div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1 ">
              <h3 className="singer-name">Interstellar</h3>
            
            </div>
          </div>
        
        
          <div class="mr-grid actors-row">
            <div class="col1">
              <h4 class="movie-actors">Matthew McC 
              </h4>
              
            </div>

  <div class="col1">
              <h4 class="movie-actors">John Wick&nbsp;&nbsp;
               <i aria-hidden="true" class="check circle small icon"></i>
                <Button  className=" btn-round submarg"
            size="sm"
            >
               Subscribe
              </Button>
              </h4>
              
            </div>




          </div>
          
  



          <div class="mr-grid action-row">
         
           
            <div class="col6 action-btn"> <i aria-hidden="true" class="play small icon"></i>
            <span className="span-musnum"> 100</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="col6 action-btn"><i aria-hidden="true" class="like small icon"></i>
           <span className="span-musnum">  33</span>
            </div>
            <div class="col6 action-btn"><i aria-hidden="true" class="retweet small icon"></i>
            <span className="span-musnum"> 10</span>
            </div>
            <div class="col6 action-btn"><i aria-hidden="true" class="add small icon"></i>
           <span className="span-musnum"> 56</span>
            </div>
           
          </div>
        
        </div>
        
      </div>
  </div>
</div>

  
    )
}

export default Songscard
