import React , { useState, useEffect }  from "react";
import Sidebar from "components/Sidebar/Sidebar.js";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  ModalBody,
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


function Form(uploderid) {
 
  const [name, setName] = useState("");
  setName(uploderid);

  useEffect({
    
  },[]);
  // ...

  return 'yes';
}






function LandingPage() {
  const [modal1, setModal1] = React.useState(false);
  const [modal1songid, setModal1songid] = React.useState("");

  const [newplaylist, setnewplaylist] = React.useState("");
  const [alreadyplaylist, setalreadyplaylist] = React.useState("");
   const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [binary, setbinary] = React.useState(false);
  const [alldata, setalldata] = React.useState([]);

  const [checksubscribestate, setchecksubscribestate] = React.useState("");
  const [test, settest] = React.useState([]);

  const [existingplaylist, setexistingplaylist] = React.useState([]);


  const [searchbytime, setsearchbytime] = React.useState("all");

  const [searcbygenre, setsearcbygenre] = React.useState("all");

  var myModule = require('views/database');

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  },[]);

 

var myarray=[];
const getallsinglesongdata = async()  => {
  var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/getsinglesongs", {
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

//   for (var i = 0; i < json.length; i++) {

//     ///  alert(alldata.length);
//  ///    alert(json[i].uploderid);
// if(localStorage.getItem('token')!=null){
//   await checksubscribe(json[i].uploderid);}
//  // alert(myarray);
//     }

  }
  const getsongsbbygenre = async(genre)  => {
    var parts = window.location.pathname.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/getsongsbbygenre", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `searchbytime=${searchbytime}&searcbygenre=${genre}`,
  });
    const json=await response.json();
    
    // return json;
    setalldata(json);
    console.log(json);
  
  //   for (var i = 0; i < json.length; i++) {
  
  //     ///  alert(alldata.length);
  //  ///    alert(json[i].uploderid);
  // if(localStorage.getItem('token')!=null){
  //   await checksubscribe(json[i].uploderid);}
  //  // alert(myarray);
  //     }
  
    }
  const handletime = (e)  => {
    alert(e.target.value);
setsearchbytime(e.target.value);

////alert(searchbytime);
  }

const handlegenre = (e)  => {
  if(e.target.value=="all"){
    getallsinglesongdata();
  }
else{
  setsearcbygenre(e.target.value);


  getsongsbbygenre(e.target.value);
}
}
useEffect(() => {
 
 
  getallsinglesongdata();
  

  if(localStorage.getItem('token')!=null){
  myexistingplaylist();
  }

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
  
  const createplaylist = async()  => {


var myModule = require('views/database');
  
const response= await fetch(myModule.servername+"/api/users/createplaylist", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `postedid=${localStorage.getItem('token')}&playlistname=${newplaylist}&songid=${modal1songid}`,
});

 const json=await response.json();








  }
  const addinplaylist = async()  => {


    var myModule = require('views/database');
      
    const response= await fetch(myModule.servername+"/api/users/addinplaylist", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `postedid=${localStorage.getItem('token')}&playlistname=${alreadyplaylist}&songid=${modal1songid}`,
    });
    
     const json=await response.json();
    
    
    
    
    
    
    
    
      }

  const myexistingplaylist = async()  => {


    var myModule = require('views/database');
      
    const response= await fetch(myModule.servername+"/api/users/existingplaylist", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `postedid=${localStorage.getItem('token')}`,
    });
    
     const json=await response.json();
    
    setexistingplaylist(json);
    
    
    
    
    
    
    
      }






  function dummyfun(songid){

    if(localStorage.getItem('token')!=null){
setModal1songid(songid);
////alert(songid);
    setModal1(true);

    }


  }
  return (
    <>
        <Modal isOpen={modal1} toggle={() => setModal1(false)}>

          
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                  <i className="now-ui-icons ui-1_simple-add"></i>
                  </button>
                  <h4 className="title title-up">Playlist</h4>
                </div>
                <ModalBody>
                <div>
                <Row>
          <Col lg="4" md="4" sm="4" xs="4">
        
   
    
    
 
          <select class="ui dropdown " onChange={(e) =>setalreadyplaylist(e.target.value)}>

         
  {existingplaylist.map((s,i)=> ( <> 
    setalreadyplaylist(s[0].playlistname);

   <option  onChange={(e) =>setalreadyplaylist(e.target.value)}>{s.playlistname}</option>
   
   
   
   
   </>))}



</select>
            </Col>
            <Col lg="6" md="3" sm="3" xs="3">
             
            </Col>
            <Col lg="2" md="3" sm="3" xs="3">
            <button onClick={addinplaylist}>     <i className="now-ui-icons ui-1_simple-add"></i></button>
            </Col>


            </Row>
<br/>
<span>New playlist</span>
            <Row>
          <Col lg="4" md="4" sm="4" xs="4">
          <FormGroup>
                  <Input
                    
                    placeholder="type new playlistname"
                    type="text"
                    onChange={(e) =>setnewplaylist(e.target.value)}
                  ></Input>
                </FormGroup>
            </Col>
            <Col lg="6" md="3" sm="3" xs="3">
             
            </Col>
            <Col lg="2" md="3" sm="3" xs="3">
          <button onClick={createplaylist}> <i className="now-ui-icons ui-1_simple-add"></i></button> 
            </Col>


            </Row>

                </div>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="default" type="button">
                    Nice Button
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
 <span className="tran">
<span class="icon-arrow treniconland"></span>
  &nbsp;&nbsp;&nbsp;Trending</span>
</Col> 
<Col lg="4" md="1" sm="1" xm="1">
  
</Col>

{/* <Col lg="1" md="1" sm="1" xm="2">
 
  <span className="permarg-lan">Period:</span>
</Col>

<Col lg="2" md="2" sm="2" xm="3">
<select class="ui dropdown "  onChange={handletime} >

<option value="all">All Time</option>
<option value="today">Today</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          
</select>
</Col> */}

<Col lg="1" md="1" sm="1" xm="1">
 
  <span className="permarg-lan">Genre:</span>
</Col>

<Col lg="2" md="2" sm="2" xm="3">
  <select class="ui dropdown" onChange={handlegenre} >
<option value="all">All Genre</option>
          <option value="Carnival">Carnival</option>
          <option value="Rap Kreyol">Rap Kreyol</option>
          <option value="Trap Kreyol">Trap Kreyol</option>
          <option value="Kompa">Kompa</option>
          <option value="Racine">Racine</option>
          <option value="Rara">Rara</option>
          <option value="Trap kompa">Trap kompa</option>
         <option value="World">World</option>
         <option value="Afrobeats">Afrobeats</option>
</select>
</Col>



</Row>
<br/>





<Row>

{/* {test.map((s,i)=> ( <>hahahahh</>))} */}



 {alldata.map((s,i)=> ( <> 
 
  <Col lg="2" md="3" sm="6" xm="6">
  <div>
      
      <div class="cellphone-container">    
          <div class="movie">       
            <div class="menu">
    
            <a href={"https://mytestbucketpak.s3.eu-west-2.amazonaws.com/"+s.songstream}>  <
              i   aria-hidden="true" class="arrow alternate circle down big icon "></i></a>
            </div>
            <a href={'/song/songid/'+s._id}>
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
               
                  <h4 class="movie-actors">{s.artistname.substring(0,myModule.artistname )
                  }
                  </h4>
                  
                </div>
    
      <div class="col1">
 <h4 class="movie-actors"><a href={'/profilepage/'+s.uploderid}>{  s.uplodername.substring(0, myModule.uplodername)}</a>&nbsp;&nbsp;
            {s.uplodertick=="yes" ? <> <i aria-hidden="true" class="check circle small icon"></i></>:null}
                   
       
           
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
 <span className="span-musnum"> {s.plays}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div class="col6 action-btn"><i aria-hidden="true" class="like small icon"></i>
               <span className="span-musnum">  {s.likes}</span>
                </div>
                <div class="col6 action-btn"><i aria-hidden="true" class="retweet small icon"></i>
 <span className="span-musnum"> {s.share}</span>
                </div>
                <div class="col6 action-btn"><i aria-hidden="true" class="add small icon"
                 onClick={() => dummyfun(s._id)}
                
                ></i>
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
        
    
             
       
        
      </div>
    </>
  );
}

export default LandingPage;
