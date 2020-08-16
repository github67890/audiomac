import React , { useState, useEffect }  from "react";
import Sidebar from "components/Sidebar/Sidebar.js";
import ReactAudioPlayer from 'react-audio-player'
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Navbar2 from "components/Navbars/Navbar2.js";

import socketIOClient from "socket.io-client";
import {
    Button,
    Input, Container,
    Row,
    Col
    }
    from "reactstrap";
function Song() {
  var myModule = require('views/database');

  const ENDPOINT = "https://ysong.tk/socket";

  const socket = socketIOClient(ENDPOINT);
  const [fullusername, setfullusername] = useState("");
  const [response, setResponse] = useState("");
  const [contcomments, setcontcomments] = useState("0");
  const [alldata, setalldata] = React.useState("");
  const [songslikes, setsongslikes] = React.useState("");
  
  const [songsshare, setsongshare] = React.useState("");
  const [checklike, setchecklike] = React.useState("");

  const [checkshare, setcheckshare] = React.useState("");

  const [fetchsongtitle, setfetchsongtitle] = React.useState("");
  const [fetchartistname, setfetchartistname] = React.useState("");
  const [fetchtags, setfetchtags] = React.useState("");

  const [songmp3, setsongmp3] = React.useState("");

  const [alldatacomment, setalldatacomment] = React.useState([]);
  const [comment, setcomment] = React.useState("");

  const [cont, setcont] = React.useState(1);
//   const getsongpagedata = async()  => {
//     var parts = window.location.pathname.split('/');
//     var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

// console.log(lastSegment);
//     var myModule = require('views/database');
//   const response= await fetch(myModule.servername+"/api/users/getsongpagedata", {
//     method: "post",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded; charset=utf-8",
//     },
//     body: `id=${lastSegment}`,
//   })
//   const json= response.json();
//   setalldata(json);
  
  
//     }
   


useEffect(() => {

getallcoments();
},[]);




useEffect(() => {
 // socket.emit("songid", "5ea5624b309ef439d0fb82f1");

//  socket.on("buttonclick", (data)=>{
// setResponse(data);

//  });
 var parts = window.location.pathname.split('/');
            var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

  socket.on(lastSegment, (data)=>{
    console.log('call from client ');


    if(data[0].count){
      setcontcomments(data[0].count);}
    
    
setalldatacomment(data);
    
    ///socket.emit("5ea5624b309ef439d0fb82f1", "munaaaaaaaaa");
  });
 // var parts = window.location.pathname.split('/');
   //   var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
 
 
 
 

  },[]);

   
    // var parts = window.location.pathname.split('/');
    // var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    // var myModule = require('views/database');
    // fetch(myModule.servername+"/api/users/getsongpagedata", {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    //   },
    //   body: `id=${lastSegment}`,
    // }).then(response => console.log(response));






    const getsongpagedata = async()  => {
      var parts = window.location.pathname.split('/');
          var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
      var myModule = require('views/database');
    const response= await fetch(myModule.servername+"/api/users/getsongpagedata", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `id=${lastSegment}`,
    });
    const json=await response.json();
    console.log(json);
if(json=='noresult'){
  window.location= "/";
}


   setfetchartistname(json[0].artistname);
   setfetchsongtitle(json[0].songtitle);
   setfetchtags(json[0].songdescription);

   setsongslikes(json[0].likes);
   setsongshare(json[0].share);
  //// setsongmp3('https://mytestbucketpak.s3.eu-west-2.amazonaws.com/'+json[0].songstream);
 /// setsongmp3('\'https://mytestbucketpak.s3.eu-west-2.amazonaws.com/'+""+json[0].songstream+"'");

 setsongmp3(json[0].songstream);

   var text = "\"http://example.com\""; 

    setalldata(json);
      }
      
    
    
    


   






      const getallcoments= async()  => {
       
        var parts = window.location.pathname.split('/');
            var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
        var myModule = require('views/database');
      const response= await fetch(myModule.servername+"/api/users/getallcoments", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `id=${lastSegment}`,
      });
      const json=await response.json();
      console.log(json);
      if( typeof json[0].count!=undefined){
      setcontcomments(json[0].count);}
      setalldatacomment(json);
      
        }

    


        
             
        const tesbutton = ()  => {
            var myModule = require('views/database');

      fetch(myModule.servername+"/api/users/haha", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `comment=${'hahahahahhahah'}`,
      });
    
    }   
         
      


        



      const getalldata = async()  => {
       
        if(localStorage.getItem('token')!=null){

        var parts = window.location.pathname.split('/');
            var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
        var myModule = require('views/database');
      const response= await fetch(myModule.servername+"/api/users/getcommentonsong", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `comment=${comment}&postedid=${localStorage.getItem('token')}&onsongid=${lastSegment}&time=${new Date().toLocaleString()}`,
      });
       const json=await response.json();
    
      
      
      setcont(cont+1);
        var parts = window.location.pathname.split('/');
            var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
        socket.emit("songid", lastSegment);


    }

        }
        
      
        
useEffect(() => {
  getsongpagedata();
  checklikethis();
  checksharethis();


  
 /// alert(alldata[0]. artistname);
}, []);

const likethis = async()  => {
       
  if(localStorage.getItem('token')!=null){

  var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/likethis", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `postedid=${localStorage.getItem('token')}&onsongid=${lastSegment}&time=${new Date().toLocaleString()}`,
});

 const json=await response.json();



 if(checklike=='yesliked'){
  setchecklike('noliked');

 }
 else{

  setchecklike('yesliked');
 }
///alert(checklike);
 ////checklikethis();
////setchecklike('yesliked');

  }

}

  
  const checklikethis = async()  => {
       
    if(localStorage.getItem('token')!=null){

    var parts = window.location.pathname.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/checklikethis", {

    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `postedid=${localStorage.getItem('token')}&onsongid=${lastSegment}&time=${new Date().toLocaleString()}`,
  });
   const json=await response.json();
 //alert(json);
   setchecklike(json);
    }
    

  }




const sharethis = async()  => {
       
  if(localStorage.getItem('token')!=null){

  var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/sharethis", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `postedid=${localStorage.getItem('token')}&onsongid=${lastSegment}&time=${new Date().toLocaleString()}`,
});

 const json=await response.json();



 if(checkshare=='yesshared'){
  setcheckshare('noshared');

 }
 else{

  setcheckshare('yesshared');
 }
///alert(checklike);
 ////checklikethis();
////setchecklike('yesliked');

  }

}
  const checksharethis = async()  => {
       
    if(localStorage.getItem('token')!=null){

    var parts = window.location.pathname.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var myModule = require('views/database');
  const response= await fetch(myModule.servername+"/api/users/checksharethis", {

    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `postedid=${localStorage.getItem('token')}&onsongid=${lastSegment}&time=${new Date().toLocaleString()}`,
  });
   const json=await response.json();
 //alert(json);
   setcheckshare(json);

}
    }


    return (

<div>
{localStorage.getItem('token')!=null ? <><Navbar2 /></>:  <  IndexNavbar />}
            <Row>
          <Col lg="3" md="3" sm="2" xs="2">
          <div id="demo" class="collapse in">
<Sidebar/>
</div>


</Col>

           

          <Col md="8" lg="8"  sm="10" xs="10">
<br></br><br></br>
             <Row>
         <Col md="12" lg="12"  sm="11" xs="11">

   < div className = "card-landing"
   style = {
       {
           backgroundImage: "url(" + require("assets/img/bg4.jpg") + ")"
       }
   } >
        
       <Row>

   
  <Col lg="3" md="3" sm="3" xs="2">
       <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
                
      
      </Col>


<Col lg="9" md="9" sm="9" xs="9">
<div className="mobres">
<Row>
    <Col lg="9" md="9" sm="9" xs="9">

  <span className="snam">{fetchsongtitle}</span>
    </Col>

<Col lg="3" md="3" sm="3" xs="3">

         <button class="ui facebook circular icon button">
    <i aria-hidden="true" class="facebook icon"></i>
  </button>
  <button class="ui twitter circular icon button">
    <i aria-hidden="true" class="twitter icon"></i>
  </button>
    </Col>






</Row>

<Row>
    <Col lg="9" md="9" sm="9" xs="9">

  <span className="singnm">{fetchartistname}</span>
    </Col>
</Row>
<Row>
    <Col lg="9" md="9" sm="9" xs="9">

  <h5>{fetchtags}</h5>
    </Col>
</Row>


<Row>
 <Col lg="9" md="9" sm="9" xs="9">
<div class="container-audio">
    <Row>
        <Col md="12">
        {/* <audio controls  loop autoplay>
                   <source src={songmp3} type="audio/mpeg"/>
                   Your browser dose not Support the audio Tag
               </audio> */}

<ReactAudioPlayer
  src={"https://mytestbucketpak.s3.eu-west-2.amazonaws.com/"+songmp3}
  autoPlay
  controls
/>
</Col>
</Row>

 <Row>
        <Col lg="12">
<div class="now playing" id="music">
  <span class="bar n1">A</span>
  <span class="bar n2">B</span>
  <span class="bar n3">c</span>
  <span class="bar n4">D</span>
  <span class="bar n5">E</span>
  <span class="bar n6">F</span>
  <span class="bar n7">G</span>
  <span class="bar n8">H</span>
    <span class="bar n9">H</span>
    <span class="bar n10">H</span>
    <span class="bar n11">H</span>
    <span class="bar n12">H</span>
    <span class="bar n13">H</span>
    <span class="bar n14">H</span>
    <span class="bar n15">H</span>
    <span class="bar n16">H</span>
    <span class="bar n17">H</span>
    <span class="bar n18">H</span>
    <span class="bar n19">H</span>
    <span class="bar n20">H</span>


</div>
</Col></Row>


    </div>
    </Col>
<Col xs="1">

</Col>


</Row>




</div>



     </Col>
   
       </Row>









      </div>









      </Col>

      </Row>
      <div className="socison">
  <div class="ui right labeled button" role="button" tabindex="0">

    {checklike=='yesliked' ? <>
  <button class="ui blue button" onClick={likethis}>
      <i aria-hidden="true" class="heart icon"></i>
      
    </button>
<a class="ui red left pointing basic label">{songslikes}</a></>:<>

<button class="ui red button" onClick={likethis}>
      <i aria-hidden="true" class="heart icon"></i>
      
    </button> 

    
  <a class="ui red left pointing basic label">{songslikes}</a>





</>}






{checkshare=='yesshared' ? <>
  <button class="ui blue button" onClick={sharethis}>
      <i aria-hidden="true" class="share icon"></i>
      
    </button>
<a class="ui red left pointing basic label">{songsshare}</a></>:<>

<button class="ui red button" onClick={sharethis}>
      <i aria-hidden="true" class="share icon"></i>
      
    </button> 

    
  <a class="ui red left pointing basic label">{songsshare}</a>





</>}





  </div>

  <div class="ui right labeled button" role="button" tabindex="0">
        
    <button class="ui blue basic button">
      <i aria-hidden="true" class="comments icon"></i>
      
    </button>
  <a class="ui blue left pointing basic label">{contcomments}</a>
  </div>
</div>



<br/>
<Row>
         <Col md="10" lg="10"  sm="10" xs="11">

<div class="ui comments">

  <h3 class="ui dividing header comtname">Comments</h3>
  {alldatacomment.map((s,i)=> (<>      
  <div class="comment">
    <div class="avatar">
      <img src={s.userimage} />
    </div>
    <div class="content">
  <a class="author">
    <span className="comtusername">
    {s.username}
    </span>
    </a>
  <div class="metadata"><div>
    <span className="comtdate">
    {s.time}
    </span>
    </div></div>
  <div class="text">
    <span className="comentdes">
    {s.comment}
    </span>
    </div>
     
    </div>
  </div>


  </>    )          )}

 
  <div class="ui reply form" action=''>
    <div class="field"><textarea rows="3"  onChange={(e) =>setcomment(e.target.value)}></textarea></div>
    <button onClick={getalldata} class="ui icon primary left labeled button"  href=''>
      <i aria-hidden="true" class="edit icon"></i>
      Add Reply
    </button>
    {' '}
    
    




  </div>
</div>

             </Col>





             </Row>






      </Col>
      </Row>
  
      
</div>
    )
}

export default Song
