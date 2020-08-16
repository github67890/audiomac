import React , { useState, useEffect }  from "react";
import Sidebar from "components/Sidebar/Sidebar.js";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
   Collapse,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   UncontrolledDropdown,
   NavbarBrand,
   Navbar,
   NavItem,
   NavLink,
   Nav,
  Container,
  Row,
  Col
} from "reactstrap";
 
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Navbar2 from "components/Navbars/Navbar2.js";
import Newnav from "components/Navbars/Newnav.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Songscard from "components/Card/Songscard.js";






function LandingPage() {
   const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [binary, setbinary] = React.useState(false);
  const [alldata, setalldata] = React.useState([]);
  const [checksubscribestate, setchecksubscribestate] = React.useState("");
  const [test, settest] = React.useState([]);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  },[]);

 
  var myModule = require('views/database');
var myarray=[];
const getallsinglesongdata = async()  => {
  var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/getalbum", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `postedid=${localStorage.getItem('token')}`,
});
  const json=await response.json();
  
  // return json;
  setalldata(json);
  console.log(json);

  for (var i = 0; i < json.length; i++) {
    if(localStorage.getItem('token')!=null){

  await checksubscribe(json[i].uploderid);
    }
    }



  }
  


useEffect(() => {
    
 
  getallsinglesongdata();

  

}, []);
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
console.log(json);
settest([]);
await getallsinglesongdata();
  }

  }
  useEffect(function getcall(uploderid) {
   

    
  }, []);

  const checksubscribe = async(songuploder)  => {



    var myModule = require('views/database');

 
    
    const response= await fetch(myModule.servername+"/api/users/checksubscribe", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `postedid=${localStorage.getItem('token')}&songuploder=${songuploder}`,
    });
    
     const json=await response.json();
 ///  myarray.push(json);
 //alert(json);
       ////  await settest([...test,json])
         settest(test=> [...test, json]);


        ///    settest(test.push(json));
  



///alert(myarray);
///alert(test);
 ///settest(json);
    
// if(json=='yes'){
//   setchecksubscribestate(0);

// }
// else{
//   setchecksubscribestate(1);

 
// }

function mylasttry(){


  // alldata.map((s,i)=> 
  
  
  
  // alert(s.uploderid + i));
  for (var i = 0; i < alldata.length; i++) {

  ///  alert(alldata.length);
   ///alert(alldata[i].uploderid + i);


  }



}


mylasttry();
// for (var i = 0; i < test.length; i++) {
//   alert( test.length);
//   console.log(test[0]);
//   alert(test[i] +1)
  

// }

console.log(test);
///alert(test);

  }
 
    
    
    
    
    
      
  return (
    <>
          





      <div>
      {localStorage.getItem('token')!=null ? <><Navbar2 /></>:  <  IndexNavbar />}
      
         <Row>
          <Col lg="2" md="2" sm="2" xs="2">

<div id="demo" class="collapse in">
<Sidebar/>
</div>



</Col>




          <Col md="9" lg="9"  sm="10" xs="10">
{/* 



 */}





<br/><br/><br/><br/><br/><br/>






<Row>
<Col lg="2" md="2" sm="2" xm="2">
<span class="icon-album-4 podiconland"></span>
  <span className="tran">&nbsp;&nbsp;&nbsp;Albums</span>
</Col>
<Col lg="3" md="1" sm="1" xm="1">
  
</Col>







</Row>
<br/>





<Row>

{/* {test.map((s,i)=> ( <>hahahahh</>))} */}



 {alldata.map((s,i)=> (
   

   
  
    <>
      <Col lg="2" md="3" sm="6" xm="6">
  <div>
      
      <div class="cellphone-container">    
          <div class="movie">       
            <div class="menu">
    
              
            </div>
            <a href={'/displayalbum/'+s.album+"/"+s.uploderid}>
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
 <h3 className="singer-name">{s.album}</h3>
                
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
{alldata[i].checksubscribe=='yes'? <> <span className="subedstyl">
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
 <span className="span-musnum"> {s.totalsongs}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            
               
              </div>
            
            </div>
            
          </div>
     
    
      
   </Col>


 {(i+1)%4!=0 ? <><span className="marg-left-lang">.</span></>:null}



    
    
    
    
    </> 


)


)}

</Row>



 






          </Col>
        </Row>
        
    
             
       
        
      </div>
    </>
  );
}

export default LandingPage;
