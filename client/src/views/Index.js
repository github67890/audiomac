import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import player from "components/Card/player.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import test from "./index-sections/test.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import LandingPage from "views/examples/LandingPage.js";

import trending from "views/examples/trending.js";
import adminlogin from "views/examples/LoginPage";

import dmac from "views/examples/DMAC";

import usersetting from "views/examples/Usersetting";
import verify from "views/examples/Verify";



import mixtape from "views/examples/mixtape.js";


import Exclusives from "views/examples/exclusives.js";
import Mytest from "views/examples/mytest.js";
import podcast from "views/examples/podcast.js";
import carvinal from "views/examples/carvinal.js";

import influencers from "views/examples/influencers.js";

import myplaylist from "views/examples/myplaylist.js";


import seraches from "views/examples/seraches.js";
import LandingPagealbum from "views/examples/LandingPagealbum.js";

import displayalbum from "views/examples/displayalbum.js";

import ProfilePage from "views/examples/ProfilePage.js";
import Selections from "views/examples/Selections.js";
import Profilecard from "components/Card/Profilecard.js";
import Profilelanding from "views/examples/Profilelanding.js";

import Editprofile from "views/examples/Editprofile";

import Upload from "views/examples/Upload.js";
import Editupload from "views/examples/editupload";
import MulUpload from "views/examples/MulUpload.js";
import Song from "views/examples/Song.js";
import AProfile from "views/examples/AProfile.js";
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
       
    
    <BrowserRouter>
    
                <Switch>
     <Route path="/" exact component={LandingPage}   />
     <Route path="/album" exact component={LandingPagealbum}   />
     <Route path="/adminlogin" exact component={adminlogin}   />
     <Route path="/displayalbum"  component={displayalbum}   />
     <Route path="/seraches"  component={seraches}   />

     <Route path="/trending"  component={trending}   />

     <Route path="/podcast"  component={podcast}   />
     <Route path="/carvinal"  component={carvinal}   />
     <Route path="/mixtape"  component={mixtape}   />

     <Route path="/influencers"  component={influencers}   />
     <Route path="/myplaylist"  component={myplaylist}   />

     <Route path="/test"  component={Mytest}   />
     <Route path="/signup"  component={SignUp}   />
     <Route path="/selections"  component={Selections}   />
     <Route path="/upload"  component={Upload}   />
     <Route path="/editupload"  component={Editupload}   />
  

     <Route path="/mulupload"  component={MulUpload}   />
     <Route path="/song"  component={Song}   />
     <Route path="/aprofile"  component={ProfilePage}   />
     <Route path="/test"  component={test}   />
     <Route path="/profilepage"  component={ProfilePage}   />
       <Route path="/profilecard"  component={Profilecard}   />
       <Route path="/profilelanding"  component={Profilelanding}   />
       <Route path="/editprofile"  component={Editprofile}   />
      
       <Route path="/exclusives"  component={Exclusives}   />




       <Route path="/dmac"  component={dmac}   />
       <Route path="/verify"  component={verify}   />
       <Route path="/usersetting"  component={usersetting}   />





     {/* <Route path="/player"  component={player}   /> */}
   </Switch>

      </BrowserRouter>


    </>
  );
}

export default Index;
