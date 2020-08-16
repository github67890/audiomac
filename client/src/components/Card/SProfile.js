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
function SProfile() {
    return (
        <div>
             <div className="card-landing">
        <div className="row ">
 <div className="col-md-5">
            <div id="CarouselTest" className="carousel slide" data-ride="carousel">
             
              <div className="">

                  <img  src={require("assets/img/card1.jpg")} />
 <Button className="btn-icon btn-round btn-lb" color="warning"  outline type="button">
                <i className="now-ui-icons ui-2_favourite-28"></i>
              </Button>
              <span className="icon-label">88</span>
               <Button className="btn-icon btn-round btn-lb"  outline color="warning" type="button">
                <i className="now-ui-icons ui-2_chat-round"></i>
              </Button>
          <span className="icon-label">68</span>
 <Button className="btn-icon btn-round btn-lb"  outline color="warning" type="button">
                <i className="now-ui-icons arrows-1_share-66"></i>
              </Button>
                 <span className="icon-label">44</span>
               </div>
            </div>
          </div>


          <div className="col-md-7 px-3">
            <div className="card-block px-6">
              <h4 className="card-title">Song name </h4>
              <h5 className="card-title">Singer Name </h5>
              <p className="card-text">
                
              </p>
              <script src="https://unpkg.com/wavesurfer.js"></script>
               <div id="waveform"></div>     
             
            </div>
          </div>
          {/* Carousel start */}
         
          {/* End of carousel */}
        </div>
      </div>
      {/* End of card */}
        </div>
    )
}

export default SProfile
