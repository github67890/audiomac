import React , { useState, useEffect }  from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Modal,
  ModalBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Navbar2 from "components/Navbars/Navbar2.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Songscard from "components/Card/Songscard.js";

import Sidebar from "components/Sidebar/Sidebar.js";

function ProfilePage() {
  const [alldata, setalldata] = React.useState([]);
  const [ownsongsdata, setownsongdata] = React.useState([]);
  const [modal1, setModal1] = React.useState(false);
  const [test, settest] = React.useState([]);

  const [checksubscribethis, setchecksubscribethis] = useState("");


  const [currentdelid, setcurrentdelid] = useState("");

  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });


  useEffect(() => {
    
 
    getsharedsongs();
    getownsongs();
  
  }, []);
  var myModule = require('views/database');

        
  useEffect(() => {

    checksubsribethis();
  
   /// alert(alldata[0]. artistname);
  }, []);
  
  const subscribethis = async()  => {
         
    if(localStorage.getItem('token')!=null){
  
    var parts = window.location.pathname.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/subscribethis", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `postedid=${localStorage.getItem('token')}&goestoid=${lastSegment}`,
  });
  
   const json=await response.json();
  
   checksubsribethis();
  
  //  if(checksubscribethis=='yessubsribe'){
  //   setchecksubscribethis('nosubsribe');
  
  //  }
  //  else{
  
  //   setchecksubscribethis('nosubsribe');
  //  }
  ///alert(checklike);
   ////checklikethis();
  ////setchecklike('yesliked');
}
    }
  
  
  
    
    
    const checksubsribethis = async()  => {
      if(localStorage.getItem('token')!=null){
         
  
      var parts = window.location.pathname.split('/');
          var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
      var myModule = require('views/database');
    const response= await fetch(myModule.servername+"/api/users/checksubsribethis", {
  
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `postedid=${localStorage.getItem('token')}&goestoid=${lastSegment}`,
    });
     const json=await response.json();
   //alert(json);
     setchecksubscribethis(json);
  }

      }
      
  
  












  const subscribeme = async(uploderid)  => {
    if(localStorage.getItem('token')!=null){
    var myModule = require('views/database');
  
   
      
  const response= await fetch(myModule.servername+"/api/users/subscribeme", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `postedid=${localStorage.getItem('token')}&goestoid=${uploderid}&time=${new Date().toLocaleString()}`,
  });
  
   const json=await response.json();
 /// console.log(json);
  settest([]);
  await getsharedsongs();
}
  
    }

    const getownsongs= async()  => {
      var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/getownsongs", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `id=${lastSegment}`,
});
  const json=await response.json();


  if(json=='noresult'){
window.location="/";

  }
  else{
  setownsongdata(json);
  }

    }
    const deletesong= async()  => {
      var myModule = require('views/database');
      const response= await fetch(myModule.servername+"/api/users/deletesong", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `postedid=${localStorage.getItem('token')}&songid=${currentdelid}`,
      });
      
       const json=await response.json();

window.location="/"



    }










  const getsharedsongs= async()  => {
    var parts = window.location.pathname.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/getsharedsongs", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `id=${lastSegment}`,
  });
    const json=await response.json();
    setalldata(json);
    for (var i = 0; i < json.length; i++) {

      ///  alert(alldata.length);
   ///    alert(json[i].uploderid);
  
    await checksubscribe(json[i].uploderid);
   // alert(myarray);
      }
  }


  const checksubscribe = async(songuploder)  => {

    if(localStorage.getItem('token')!=null){

    var myModule = require('views/database');

 
    
    const response= await fetch(myModule.servername+"/api/users/checksubscribe", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `postedid=${localStorage.getItem('token')}&songuploder=${songuploder}`,
    });
    
     const json=await response.json();

         settest(test=> [...test, json]);

  }
        
  }

function dummyfun(delsongid){


  setcurrentdelid(delsongid)  ;
       setModal1(true)
}


  return (
    <>
    
    <Modal
                modalClassName="modal-mini modal-info"
                toggle={() => setModal1(false)}
                isOpen={modal1}
              >
                
                <ModalBody>
                  <p>Do you want to delete this Song</p>
                </ModalBody>
                <div className="modal-footer">
                  <Button className="btn-neutral" color="danger" type="button" onClick={deletesong}>
                    Confirm
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
    {localStorage.getItem('token')!=null ? <><Navbar2 /></>:  <  IndexNavbar />}

       <Row>
          <Col lg="2" md="2" sm="2" xs="2">
<Sidebar/>

</Col>




          <Col md="10" lg="10"  sm="10" xs="10">

      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          
            <div className="button-container">

            {checksubscribethis=='yessubsribe' ? <>
            <Button className="btn-round" color="info" size="lg" onClick={subscribethis}>
           Unsubscribed
              </Button>
            </>:<>
            
            <Button className="btn-round" color="primary" size="lg" onClick={subscribethis}>
            Subscribe
              </Button>
            </>}

              
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
                 <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-youtube"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Youtube
              </UncontrolledTooltip>

              </div>
        
        </div>

            </div>
            <Button color="info" href="/verify">Send for approval</Button>
            <h3 className="title">Recent Uploads</h3>
            <Row>

{/* {test.map((s,i)=> ( <>hahahahh</>))} */}


{ownsongsdata.map((s,i)=> ( <> 
 
 <Col lg="2" md="3" sm="6" xm="6">
 <div>
     
     <div class="cellphone-container">    
         <div class="movie"> 
         <div class="menudot">
   
         
  {localStorage.getItem('token')==ownsongsdata[i].uploderid? <>
  <UncontrolledDropdown >
  <DropdownToggle
    
    href="#pablo"
    nav
    onClick={e => e.preventDefault()}
>
<i class="fas fa-ellipsis-v"></i>
   

</DropdownToggle>
<DropdownMenu right className="submenustyl">
    <DropdownItem header tag="a">
      
  </DropdownItem><DropdownItem
        href=""
        onClick={()=>
          window.location="/editupload/"+ownsongsdata[i]._id
          }
    >
        Edit
  </DropdownItem>
    <DropdownItem
        href=""
        onClick={() => dummyfun(ownsongsdata[i]._id)}
    >
        Delete
  </DropdownItem>
   
 
  
    
  
</DropdownMenu>
</UncontrolledDropdown>
  </>:null}         

 </div>      
           <div class="menu">
   
             <i aria-hidden="true" class="arrow alternate circle down big icon "></i>
           </div>
           <a href={'/song/songid/'+s.songid}>
   <div class="menu-plyhov">
   
            <i aria-hidden="true" class="play huge icon "></i>
           </div>
   
   </a>
 
           <div class="movie-img">
             <img src={"https://mytestbucketpak.s3.eu-west-2.amazonaws.com/"+s.songpicaddress} class="movie-img" />


       </div>
           <div class="text-movie-cont">
             <div class="mr-grid">
               <div class="col1 ">
<h3 className="singer-name">{s.songtitle.substring(0, myModule.songtitle)}</h3>
               
               </div>
             </div>
           
           
             <div class="mr-grid actors-row">
               <div class="col1">
              
                 <h4 class="movie-actors">{s.artistname.substring(0,myModule.artistname )}
                 </h4>
                 
               </div>
   
     <div class="col1">
<h4 class="movie-actors"><a href={'/profilepage/'+s.uploderid}>{  s.uplodername.substring(0, myModule.uplodername)}</a>&nbsp;&nbsp;
{s.uplodertick=="yes" ? <> <i aria-hidden="true" class="check circle small icon"></i></>:null}
              {/* useEffect(() => {
   

   checksubscribe(s.uploderid) 
 
 
 }, []) */}

<span className="prostylst">
                   
                   </span>
 
                 </h4>
                 
               </div>
   
   
               </div>
           
           </div>
   
             </div>
             
     
   
   
   
             <div class="mr-grid action-row">
            
              
               <div class="col6 action-btn"> <i aria-hidden="true" class="play small icon"></i>
<span className="span-musnum"> {s.plays}</span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               </div>
               <div class="col6 action-btn"><i aria-hidden="true" class="like small icon"></i>
              <span className="span-musnum">  {s.likes}</span>
               </div>
               <div class="col6 action-btn"><i aria-hidden="true" class="retweet small icon"></i>
<span className="span-musnum"> {s.share}</span>
               </div>
               <div class="col6 action-btn"><i aria-hidden="true" class="add small icon"></i>
              <span className="span-musnum"> {s.playlist}</span>
               </div>
              
            
           
         </div>
     </div>
   </div>
   
     
  </Col>


{(i+1)%4!=0 ? <><span className="marg-left-lang">.</span></>:null}

</>


))}



</Row>




 <h3 className="title">Recent shared</h3>

<Row>


 {alldata.map((s,i)=> ( <> 
 
  <Col lg="2" md="3" sm="6" xm="6">
  <div>
      
      <div class="cellphone-container">    
          <div class="movie"> 

            <div class="menu">
              <i aria-hidden="true" class="arrow alternate circle down big icon "></i>
            </div>

            <a href={'/song/songid/'+s.songid}>
    <div class="menu-plyhov">
    
             <i aria-hidden="true" class="play huge icon "></i>
            </div>
    
    </a>
  
            <div class="movie-img">
              <img src={"https://mytestbucketpak.s3.eu-west-2.amazonaws.com/"+s.songpicaddress} class="movie-img" />


        </div>
            <div class="text-movie-cont">
              <div class="mr-grid">
                <div class="col1 ">
 <h3 className="singer-name">{s.songtitle.substring(0, myModule.songtitle)}</h3>
                
                </div>
              </div>
            
            
              <div class="mr-grid actors-row">
                <div class="col1">
               
                  <h4 class="movie-actors">{s.artistname.substring(0,myModule.artistname )}
                  </h4>
                  
                </div>
    
      <div class="col1">
 <h4 class="movie-actors"><a href={'/profilepage/'+s.uploderid}>{  s.uplodername.substring(0, myModule.uplodername)}</a>&nbsp;&nbsp;
 {s.uplodertick=="yes" ? <> <i aria-hidden="true" class="check circle small icon"></i></>:null}
               {/* useEffect(() => {
    
 
    checksubscribe(s.uploderid) 
  
  
  }, []) */}


                  
                
    
                  </h4>
                  
                </div>
              </div>
              </div>
              </div>
      
{s.uploderid==localStorage.getItem('token') ? <>

<span className="prostylst">
                   
                   </span>

</>: 

<>

{test[i]=='yes'? <> <span className="subedstyl">
                   Subscribed
                   </span></>: <>
                  <Button  onClick={  () => subscribeme(s.uploderid)} className=" btn-round substyl" 
                size="sm"
                href=''>
              Subscribe
                  </Button>
                  </>} 

</>}

    
    
    
              <div class="mr-grid action-row">
             
               
                <div class="col6 action-btn"> <i aria-hidden="true" class="play small icon"></i>
 <span className="span-musnum"> {s.plays}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div class="col6 action-btn"><i aria-hidden="true" class="like small icon"></i>
               <span className="span-musnum">  {s.likes}</span>
                </div>
                <div class="col6 action-btn"><i aria-hidden="true" class="retweet small icon"></i>
 <span className="span-musnum"> {s.share}</span>
                </div>
                <div class="col6 action-btn"><i aria-hidden="true" class="add small icon"></i>
               <span className="span-musnum"> {s.playlist}</span>
                </div>
               
              </div>
            
            </div>
            
          </div>
    
    
      
   </Col>


 {(i+1)%4!=0 ? <><span className="marg-left-lang">.</span></>:null}

 </>


))}

</Row>
 
 
 
           
            
          
        
    
    </Col>
    </Row>
    </>




  );
}

export default ProfilePage;
