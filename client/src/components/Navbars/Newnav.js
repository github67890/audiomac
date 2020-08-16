import React , { useState ,useEffect}  from 'react'
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
function Newnav() {
  const [allnotification, setallnotification] = React.useState([]);
 
  const getallnotification= async()  => {
       
  ////  var parts = window.location.pathname.split('/');
      ///// var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/getallnotification", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `id=${localStorage.getItem('token')}`,
  });
  const json=await response.json();

  setallnotification(json);
  
    }




  

  useEffect(() => {

    if(localStorage.getItem('token')!=null){

    getallnotification();}
    },[]);
    

    

    return (
    <div class="dropdown dropdown1" >
    <a href="#" onclick="return false;" role="button" data-toggle="dropdown" id="dropdownMenu1" data-target="#"  aria-expanded="true">
        <i class="navlinksty fa fa-bell-o bellicon" >
        </i>
    </a>
    <span class="badge badge-danger">6</span>
    <ul class="dropdown-menu dropdown-menu-left pull-right" role="menu" aria-labelledby="dropdownMenu1">
      
        <ul class="  timeline timeline-icons timeline-sm " >
  
        {allnotification.map((s,i)=> (<>  
        
        
        
          <div class="ui feed">
  <div class="event">
    <div class="label lebmarg">
      <img src={s.uploderpic } />
    </div>
    <div class="content contmarg">
     {s.uplodername }
     {s.Role=='comment' ?<> commented on your 
     <a href={'/song/songid/'+s.onsongid}><p style={{color: "red"}}>Song</p></a></>:null}
     
     {s.Role=='Like' ?<> Liked on your 
     <a href={'/song/songid/'+s.onsongid}><p style={{color: "red"}}>Song</p></a></>:null}

     {s.Role=='Subscribed' ?<> Subscribed You
     </>:null}
     {s.Role=='Share' ?<> Shared  your 
     <a href={'/song/songid/'+s.onsongid}><p style={{color: "red"}}>Song</p></a></>:null}

      <br/>
        <div class=" datemarg">{s.time}</div>
    </div>
  </div>
</div>


        
        
        
        
         </>))}

   



   







                                    </ul>
        <Button className="btn-link" color="primary">
                See all
              </Button>
    </ul>

</div>
    )
}

export default Newnav
