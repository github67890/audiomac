import React , { useState, useEffect }  from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Newnav from './Newnav.js'
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
   Modal,
   ModalBody,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
function Navbar2() {
    var element = document.body;


 

    const [userfullname, setuserfullname] = React.useState("");

    const [mode, setmode] = React.useState("");





   ///alert(localStorage.getItem('mode'));
   //// localStorage.setItem('mode', 'light');

  //  if(localStorage.getItem('mode')=="dark"){
  //   var element = document.body;
      

       
  //   element.classList.toggle("dark-mode");
  //  }
  

    
    function myFunction() {
      
    

        var element = document.body;
      

       
        element.classList.toggle("dark-mode");
        if(localStorage.getItem('mode')=="dark"){
          localStorage.setItem('mode', 'light');
          setmode('light');
         /// alert(mode);
        }
        else{

          localStorage.setItem('mode', 'dark');
          setmode('dark');
         /// alert(mode);
        }



    }
    const removetoken = async()  => {
      localStorage.removeItem('token');

      window.location="/";



    }



    const Upload = async()  => {
window.location="/selections"


    }






    const getallsinglesongdata = async()  => {
        var parts = window.location.pathname.split('/');
            var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
        var myModule = require('views/database');
        const response= await fetch(myModule.servername+"/api/users/getsinglesongs", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: ``,
      });
        const json=await response.json();
        
       
        setalldata(json);
        console.log(json);
      
      
      
     
      
        }

        const handlersearch=(event,value)=>{
            window.location="/seraches/"+value;
          ////    alert(value);
              
            
            }




            const getuserinfo = async()  => {


              var myModule = require('views/database');
            
              
              const response= await fetch(myModule.servername+"/api/users/getuserinfo", {
                method: "post",
                headers: {
                  "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                },
                body: `postedid=${localStorage.getItem('token')}`,
              });
              const json=await response.json();
              setuserfullname(json[0].userfullname);
        
          
            }
      






    useEffect(() => {

    ///  alert(localStorage.getItem('mode'));
    setmode(localStorage.getItem('mode'));
  
    if(localStorage.getItem('mode')=="dark"){
     var element = document.body;
       
  
        
     element.classList.toggle("dark-mode");
    }
      if(localStorage.getItem('token')!=null){

        getuserinfo();


      }
   
        getallsinglesongdata();
      
      
      }, []);
    
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    const [modal3, setModal3] = React.useState(false);
    
  const [alldata, setalldata] = React.useState([]);
    return (
        <div>

            <Navbar className="fixed-top mynavbar   " >






                <Nav  >


                    <i class="fas fa-ellipsis-v buliticnmarg" data-toggle="collapse" data-target="#demo"></i>

                    <i className="fa fa-youtube-play fa-lg iconmain" />

                    <span className="navlinksty">Ayititunes</span>


                    < div className="sermarg inpsty">

                    <Autocomplete
///  onInputChange={handlersearch}
onChange={handlersearch} // click on the show tags
  freeSolo
  id="free-solo-2-demo"
  disableClearable
  options={alldata.map((option) => option.songtitle)}


  renderInput={(params) => (
    <TextField
      {...params}
   
  //// onKeyDown={handlerenter}
      variant="outlined"
      InputProps={
        { ...params.InputProps, type: 'search' }
       
       }
    />
  )}
/>
                    </div >




<div className="navbar2marg">
                    <Newnav/>
                    </div>
                    <span class="iconify uploadiconsty" data-icon="fa-solid:upload" data-inline="false"></span>
                    

                    <UncontrolledDropdown >
                    
                        <DropdownToggle
                            
                            href="#pablo"
                            nav
                            onClick={e => e.preventDefault()}
                        >
                            <div>
                                <img
                                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                                    class="ui avatar image"
                                />

                            </div>
                           

                        </DropdownToggle>
                      
                        <DropdownMenu right className="submenustyl">
                            <DropdownItem header tag="a">
                                Menu
                          </DropdownItem>
                          
                         
                          <DropdownItem
                                href="#pablo"
                                onClick={()=>
                                  window.location="/profilepage/"+localStorage.getItem('token')
                                  }
                            >
                                Profile
                          </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={()=>
                                window.location="/editprofile"
                                }
                            >
                                Edit Profile
                          </DropdownItem>
                            <DropdownItem
                               
                                onClick={Upload}
                            >
                                 Upload
                          </DropdownItem>
                            <div className="divider"></div>
                            <DropdownItem
                         
                                onClick={removetoken}
                            >
                                Sign Out
                          </DropdownItem>
                            <div class="ui divider"></div>
                            
                                <li class="tg-list-item">
                                    <h5>Darkmode</h5>
                                    {mode=="dark" ? <>
                                    <input class="tgl tgl-ios" id="cb2" type="checkbox" checked
                                   
                                   onClick={myFunction} />
                         </> :<input class="tgl tgl-ios" id="cb2" type="checkbox"
                                   
                                   onClick={myFunction} />}
                                    




                                    <label class="tgl-btn" for="cb2"></label>
                               
                                      
                                
                             
                                    
                                </li>
                          
                        </DropdownMenu>
                    </UncontrolledDropdown>

      <span className="namestyl">{userfullname.substring(0,6)}</span>






                </Nav>



            </Navbar>
        </div>
    )
}

export default Navbar2
