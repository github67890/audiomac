import React from 'react'
import "assets/demo/sidebar.css";

function Sidebar() {
   
  
    return (
        < div >
        
      <nav className="main-menu fixed-left" fixed='left' >
        <div>
          <a className="logo" href="">
          </a> 
        </div> 
        <div className="settings" />
        <div className="scrollbar" id="style-1">
          <br/>
          <ul className="ulmarg">
            <li>                                   
              <a href="/">
                <i className="fa fa-home fa-lg homicnland" />
                <span className="nav-texthom">Home</span>
              </a>
            </li>   
            <li className="limargtop">                                 
              <a href="">
                <span class="icon-newspaper iconmarg1"></span>
                <span className="nav-text">News</span>
              </a>
            </li> 
            <br/>
            <span className="headgrop">Discover:</span>  
            <br/>
            <li className="limargtop">                                 
              <a href="/trending">
              <span class="icon-arrow iconmarg1"></span>
                <span className="nav-text">Trending</span>
              </a>
            </li>   
            
            
            < li className = "darkefrli limargtop" >
              <a href="/mixtape">
               <span class="icon-album iconmarg1"></span>
                <span className="nav-text">Mixtape</span>
              </a>
            </li>
            < li className = "darkerdli limargtop" >
              <a href="/album">
                <span class="icon-album-4 iconmarg1"></span>
                <span className="nav-text">Albums</span>
              </a>
            </li>
            < li className = "darkefsrli limargtop" >
              <a href="/myplaylist">
                 <span class="icon-music-album iconmarg1"></span>
                <span className="nav-text">Playlist</span>
              </a>
            </li>
            < li className = "darkerfli limargtop" >
              <a href="/podcast">
               <span class="icon-podcast iconmarg1"></span>
                <span className="nav-text">Podcast</span>
              </a>
            </li>
           
            < li className = "darkferli limargtop" >
              <a href="/carvinal">
                <span class="icon-carnival-mask iconmarg1"></span>
                <span className="nav-text">Carvinal</span>
              </a>
            </li>
            <li className="darfkerli limargtop">
              <a href="/exclusives">
                <span class="icon-add-file  iconmarg1"></span>
                <span className="nav-text">Exclusives
                </span>
              </a>
            </li>
            < li className = "darkferli limargtop" >
              <a href="/influencers">
               <span class="icon-influencer  iconmarg1"></span>
                <span className="nav-text">Influencers
                </span>
              </a>
            </li>
<br/>
<span className="headgrop">Social Media:</span>
            <li className="darkerlidshadowdown limargtop">
              <a href="">
                <span class="icon-youtube iconmarg1"></span>
                <span className="nav-text">Youtube</span>
              </a>
            </li>



            <li className="darkerlidshadowdown limargtop">
              <a href="">
                <span class="icon-facebook-logo iconmarg1 "><span class="path1"></span><span class="path2"></span></span>
                <span className="nav-text">Facebook</span>
              </a>
            </li>

<li className="darkerlidshadowdown limargtop">
              <a href="">
              <span class="icon-instagram iconmarg1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
                <span className="nav-text">Instagram</span>
              </a>
            </li>



<li className="darkerlidshadowdown limargtop">
              <a href="">
             <span class="icon-twitter iconmarg1"><span class="path1"></span><span class="path2"></span></span>
                <span className="nav-text">Twitter</span>
              </a>
            </li>
<br/>
<span className="headgrop">Download App:</span>


  <a class="app-btn blu flex vert" href="http:apple.com">
    <i class="fab fa-apple"></i>
    <p>Download on<br/> <span class="big-txt">App Store</span></p>
  </a>



   <a class="app-btn blu flex vert" href="http:google.com">
    <i class="fab fa-google-play"></i>
    <p>Download on<br/> <span class="big-txt">Google Play</span></p>
  </a>




<br/>
<span className="headgrop">Legal:</span>

 < li className = "darkferli limargtop" >
              <a href="">
               <span class="icon-policy  iconmarg1"></span>
                <span className="nav-text">Privacy Policy
                </span>
              </a>
            </li>

 < li className = "darkferli limargtop" >
              <a href="">
               <span class="icon-insurance-policy  iconmarg1"></span>
                <span className="nav-text">Terms Of Service
                </span>
              </a>
            </li>

 < li className = "darkferli limargtop" >
              <a href="">
               <span class="icon-text iconmarg1"></span>
                <span className="nav-text">About
                </span>
              </a>
            </li>

< li className = "darkferli limargtop" >
              <a href="/dmac">
               <span class="icon-report iconmarg1"></span>
                <span className="nav-text">DMCA
                </span>
              </a>
            </li>


          </ul>
      <br/>
        </div></nav>
        </div>
    )
}

export default Sidebar
