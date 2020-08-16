import React , { useState, useEffect }  from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  const [fullusername, setfullusername] = useState("");
  const [imageurl, setimageurl] = useState("");

  const [follower, setfollower] = useState("");
  const [following, setfollowing] = useState("");
  const [totalsongs, settotalsongs] = useState("");
  const [uploderid, setuploderid] = useState("");
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  useEffect(() => {

    profiledata();
    },[]);
    
  const profiledata = async()  => {
        var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var myModule = require('views/database');
const response= await fetch(myModule.servername+"/api/users/profiledata", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `id=${lastSegment}`,
});
const json=await response.json();
console.log(json);

setfullusername(json[0].userfullname);
setimageurl(json[0].imageurl);


setuploderid(json[0]._id);

setfollower(json[1].follower);
setfollowing(json[2].following);
settotalsongs(json[3].totalsongs);
  }


  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg15.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={(imageurl)}></img>
          </div>
        <h3 className="title">{fullusername}</h3>
        
          <div className="content">
            <div className="social-description">
        <h2>{follower}</h2>
              <p>Followers</p>
            </div>
            <div className="social-description">
        <h2>{following}</h2>
              <p>Following</p>
            </div>
            <div className="social-description">
        <h2>{totalsongs}</h2>
              <p>Songs</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
