import React , { useState, useEffect }  from "react";
import {
    Table, Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Button,
    Row,
    Col } from 'reactstrap';



function Usersetting() {
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");




    const [dmacrequests, setdmacrequests] = React.useState([]);
    const [verifyrequest, setverifyrequest] = React.useState([]);

    useEffect(() => {

    getdmac();
        getverifyrequest();
        },[]);


        const getdmac= async()  => {
       
            var parts = window.location.pathname.split('/');
                var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
            var myModule = require('views/database');
          const response= await fetch(myModule.servername+"/api/users/getdmac", {
            method: "post",
            headers: {
              "content-type": "application/x-www-form-urlencoded; charset=utf-8",
            },
            body: `id=${lastSegment}`,
          });
          const json=await response.json();
          console.log(json);
         
          setdmacrequests(json);
          
            }
            const getverifyrequest= async()  => {
       
                var parts = window.location.pathname.split('/');
                    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
                var myModule = require('views/database');
              const response= await fetch(myModule.servername+"/api/users/getverifyrequest", {
                method: "post",
                headers: {
                  "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                },
                body: `id=${lastSegment}`,
              });
              const json=await response.json();
            
              setverifyrequest(json);
              
                }





                const rejectverify =  async(recordid) => {

                    var myModule = require('views/database');
                    const response= await fetch(myModule.servername+"/api/users/deleterecord", {
                      method: "post",
                      headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                      },
                      body: `id=${recordid}`,
                    });
            
                    
                    const json=await response.json();
            
            
                    alert("Your Request Subitted");


                     window.location="/usersetting";

                }











                const confirmverify =  async(uploderid,recordid) => {

                    var myModule = require('views/database');
                    const response= await fetch(myModule.servername+"/api/users/editverifyuser", {
                      method: "post",
                      headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                      },
                      body: `uploderid=${uploderid}`,
                    });
            
                    
                    const json=await response.json();
            
            
                 ///   alert("Your Request Subitted");


                    rejectverify(recordid);
                      window.location="/usersetting";

                }










                const rejectdmca =  async(recordid) => {

                    var myModule = require('views/database');
                    const response= await fetch(myModule.servername+"/api/users/deleterecorddmca", {
                      method: "post",
                      headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                      },
                      body: `id=${recordid}`,
                    });
            
                    
                    const json=await response.json();
            
            
                    alert("Your Request Subitted");


                     window.location="/usersetting";

                }











                const confirmdmca =  async(songurl,recordid) => {

                    var myModule = require('views/database');
                    const response= await fetch(myModule.servername+"/api/users/confirmdmca", {
                      method: "post",
                      headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                      },
                      body: `songurl=${songurl}`,
                    });
            
                    
                    const json=await response.json();
            
            
                 ///   alert("Your Request Subitted");


                    rejectdmca(recordid);
                      window.location="/usersetting";

                }











    return (
        <div>
            <br /> <br />
            <Row>
                <Col lg="4" md="3" sm="3" xm="3">

                </Col>
                <Col lg="3" md="3" sm="3" xm="3">
                    <h2>Admin Setting</h2>
                </Col>
                </Row>
            <br /> <br /> 
            <Row>
                <Col lg="1" md="1" sm="1" xm="1">

                </Col>
                <Col lg="10" md="10" sm="8" xm="8">
            <Card>
                <CardHeader>
                    <Nav
                        className="nav-tabs-neutral justify-content-center"
                        data-background-color="blue"
                        role="tablist"
                        tabs
                    >
                        <NavItem>
                            <NavLink
                                className={pills === "1" ? "active" : ""}
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setPills("1");
                                }}
                            >
                               DMAC
                      </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={pills === "2" ? "active" : ""}
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setPills("2");
                                }}
                            >
                                        Verification
                      </NavLink>
                        </NavItem>
                      
                       
                    </Nav>
                </CardHeader>
                <CardBody>
                    <TabContent
                        className="text-center"
                        activeTab={"pills" + pills}
                    >
                        <TabPane tabId="pills1">
                         <div>
                                <Table>
                                    <thead>
                                        <tr>
                                           <th>Complainer Name</th>
                                                    <th>Description</th>
                                            <th>Song Link</th>
                                            
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        
                                      


                                        {dmacrequests.map((s,i)=> ( <> 
 
 <tr>
<td>   <a href={'/profilepage/'+s.postedid} target="_blank"> {s.username}</a>            </td>
     <td>{s.description}</td>
     <td><a href={s.songurl}  target="_blank">Songlink </a></td>
     <td>
                 <Button onClick={()=> confirmdmca(s.songurl,s._id) } className="btn-link btnadset" color="danger">
                    Confirm
           </Button>
                 <Button onClick={()=> rejectdmca(s._id) } className="btn-link btnadset" color="warning">
                     Reject
           </Button>
     </td>
 </tr>



</>))}  









                                       
                                       
                                       
                                    </tbody>
                                </Table>
                         </div>
                        </TabPane>
                        <TabPane tabId="pills2">
                                    <div>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                     <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              
                                            {verifyrequest.map((s,i)=> ( <> 
 
 <tr>
<td>   <a href={'/profilepage/'+s.postedid} target="_blank"> {s.username}</a>            </td>
     <td>{s.description}</td>
     
     <td>
                 <Button onClick={()=> confirmverify(s.postedid,s._id) } className="btn-link btnadset" color="danger">
                    Confirm
           </Button>
                 <Button onClick={()=> rejectverify(s._id) } className="btn-link btnadset" color="warning">
                     Reject
           </Button>
     </td>
 </tr>



</>))}  








                                            </tbody>
                                        </Table>
                                    </div>
                        </TabPane>
                        <TabPane tabId="pills3">
                            <p>
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at. So when you get something that has
                                the name Kanye West on it, it’s supposed to be pushing
                                the furthest possibilities. I will be the leader of a
                                company that ends up being worth billions of dollars,
                                because I got the answers. I understand culture. I am
                                the nucleus.
                      </p>
                        </TabPane>
                        <TabPane tabId="pills4">
                            <p>
                                "I will be the leader of a company that ends up being
                                worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus. I think that’s a
                                responsibility that I have, to push possibilities, to
                                show people, this is the level that things could be at."
                      </p>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
            </Col>
            </Row >
        </div>
    )
}

export default Usersetting
