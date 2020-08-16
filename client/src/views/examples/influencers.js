import React , { useState, useEffect }  from "react";
import Sidebar from "components/Sidebar/Sidebar.js";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  Modal,
  ModalBody,
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

  const [existingplaylist, setexistingplaylist] = React.useState([]);
  const [newplaylist, setnewplaylist] = React.useState("");
  const [alreadyplaylist, setalreadyplaylist] = React.useState("");
   const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [binary, setbinary] = React.useState(false);
  const [alldata, setalldata] = React.useState([]);
  const [albumalldata, setalbumalldata] = React.useState([]);
  const [profiledata, setprofiledata] = React.useState([]);
  const [checksubscribestate, setchecksubscribestate] = React.useState("");
  const [test, settest] = React.useState([]);
  const [albumtest, setalbumtest] = React.useState([]);

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  },[]);

  const [value, setValue] = React.useState('female');

var myarray=[];
var myModule = require('views/database');
const handlechanges = (e)  => {


    setValue(e.target.value);

if(e.target.value=='album'){
   
    setalldata([]);
    setalbumalldata([]);
    setprofiledata([]);

    getalbumsearch();

}
if(e.target.value=='Songs'){
    setalbumalldata([]);
    setalldata([]);
    setprofiledata([]);
    getallsinglesongdata();

}
if(e.target.value=='artist'){
    setalbumalldata([]);
    setalldata([]);
    setprofiledata([]);
    getprofilesearch();

}
if(e.target.value=='all'){
  
    getprofilesearch();
    

}
}

const getallsinglesongdata = async()  => {
   
    var parts    =window.location.pathname.split('/');
    var datasearch   = parts[parts.length - 1];
   /// var checkalbum   = parts[parts.length - 2];

  var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/singlesongsearch", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `datasearch=${datasearch}&postedid=${localStorage.getItem('token')}`,
});
  const json=await response.json();
  

  setalldata(json);
  console.log(json);

  }
  
  const getalbumsearch = async()  => {
   
    var parts    =window.location.pathname.split('/');
    var datasearch   = parts[parts.length - 1];
   /// var checkalbum   = parts[parts.length - 2];

  var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/getalbumsearch", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `datasearch=${datasearch}&postedid=${localStorage.getItem('token')}`,
});
  const json=await response.json();
  
  // return json;
  setalbumalldata(json);
///  console.log(json);



  

  }


  const getprofilesearch = async()  => {
   
    var parts    =window.location.pathname.split('/');
    var datasearch   = parts[parts.length - 1];
   /// var checkalbum   = parts[parts.length - 2];

  var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/sidebarprofilesearch ", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `datasearch=${datasearch}&postedid=${localStorage.getItem('token')}`,
});
  const json=await response.json();
  
  // return json;
  
///  console.log(json);

var sorted = json.sort(function(a, b) {return  b.totalfollower-a.totalfollower });
setprofiledata(sorted);

  }



  



useEffect(() => {
    
getprofilesearch();
  getallsinglesongdata();
getalbumsearch();
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


if(value=='album'){
    await getalbumsearch();
}
else if(value=='Songs'){
    await getallsinglesongdata();
}
////

else if(value=='artist'){
getprofilesearch();
}

else{
    await getalbumsearch();
    await getallsinglesongdata();
    await getprofilesearch();
}

}
  }
  useEffect(function getcall(uploderid) {
   

    
  }, []);

  
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
 <span class="icon-influencer podiconland"></span>
  <span className="tran">&nbsp;&nbsp;&nbsp;Influencer</span>
</Col> 
<Col lg="4" md="1" sm="1" xm="1">
  
</Col>










</Row>





<Row>





{/* {test.map((s,i)=> ( <>hahahahh</>))} */}







<div className="wrapperproland">






 <Row>

 {profiledata.filter(book => book.verified === "yes").map((s,i)=> ( <> 
 
    <Col lg="3" md="3" sm="6" xm="6">
   <div>
           <div class=" wrapperpro">
  <div class="container containerpro">
    <img src={s.imageurl} alt="" class="profile-img1"/>
    
    <div class="contentpro">
      <div class="sub-content">
 <h1 class="h1prosty"><a href={'/profilepage/'+s._id}>{s.userfullname}</a></h1>
        <span className="spanprostyl"></span>
       
      </div>
      <div className="procardsub">
      <div class="datapro">
        <div class="inner-data">
          <span><i class="fa fa-users fastyl" aria-hidden="true"></i></span>
 <p class="pstyl">{s.totalfollower}</p>
        </div>
        
        
      </div>
      </div>
      {profiledata[i].checksubscribe=='yes'? <> <span className="submarg1">
                   Subscribed
                   </span></>: <>
                  <Button  onClick={  () => subscribeme(s._id)} className=" btn-round submarg" 
                size="sm"
                href=''>
              Subscribe
                  </Button>
                  </>} 
    </div>
  </div>
</div> 
        </div>
   </Col>
<Col lg="1" md="1" sm="4" xm="4">

   </Col>

 
 
 
 </>))}

  


   
   
 </Row>


<br/>

</div>


</Row>
<Row className="rowclass">








 {alldata.map((s,i)=> ( <> 
 
  <Col lg="2" md="3" sm="6" xm="6">
  <div className="searchsong">
      
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
               
                  <h4 class="movie-actors">{s.artistname.substring(0,myModule.artistname )}
                  </h4>
                  
                </div>
    
      <div class="col1">
 <h4 class="movie-actors"><a href={'/profilepage/'+s.uploderid}>{  s.uplodername.substring(0, myModule.uplodername)}</a>&nbsp;&nbsp;
 {s.uplodertick=="yes" ? <> <i aria-hidden="true" class="check circle small icon"></i></>:null}
               {/* useEffect(() => {
    
 
    checksubscribe(s.uploderid) 
  
  
  }, []) */}

{s.uploderid==localStorage.getItem('token') ? <>

<span className="prostylst">
                   Subscribed
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


                  
                
    
                  </h4>
                  
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
                <div class="col6 action-btn"><i aria-hidden="true" class="add small icon"
                 onClick={() => dummyfun(s._id)}></i>
               <span className="span-musnum"> {s.playlist}</span>
                </div>
               
              </div>
            
            </div>
            
          </div>
      </div>
    </div>
    
      
   </Col>


 {(i+1)%4!=0 ? <><span className="marg-left-lang">.</span></>:null}

 </>


))}



{albumalldata.map((s,i)=> (
   

   
  
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

{albumalldata[i].checksubscribe=='yes'? <> <Button   className=" btn-round submarg" 
               size="sm"
               href=''>
                  Subscribed
                 </Button></>: <>
                 <Button  onClick={  () => subscribeme(s.uploderid)} className=" btn-round submarg" 
               size="sm"
               href=''>
             Subscribe
                 </Button>
                 </>} 


                 
               
   
                 </h4>
                 
               </div>
   
   
   
   
             </div>
             
     
   
   
   
             <div class="mr-grid action-row">
            
              
               <div class="col6 action-btn"> <i aria-hidden="true" class="play small icon"></i>
<span className="span-musnum"> {s.totalsongs}</span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               </div>
           
              
             </div>
           
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
