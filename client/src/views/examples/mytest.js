import React , { useState, useEffect }  from "react";
import Sidebar from "components/Sidebar/Sidebar.js";

// reactstrap components

 
// core components

import socketIOClient from "socket.io-client";






function LandingPage() {


    const [mydata, setmydata] = useState("");

    const ENDPOINT = "http://localhost:5000";
    const socket = socketIOClient(ENDPOINT);
  useEffect(()=>{
    socket.on("client",(data)=>{

      ///  console.log(data);
        alert(data);
        
            }) 



  },[])
   

function handlerdata(){
   

socket.emit("mydata",mydata);

   
}



  return (
    <>
        <div style={{
         "textAlign":"center",
         "marginTop":"200px"

        }}>
        <div class="field"><textarea rows="3"  onChange={(e) =>setmydata(e.target.value)}></textarea></div>


        <button onClick={handlerdata}>
      <i aria-hidden="true" class="edit icon"></i>
     Submit
    </button>
        </div>
    </>
  );
}

export default LandingPage;
