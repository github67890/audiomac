import React from 'react'

function test() {
  return (
    <div>
    
       <input className="checkbox" type="checkbox"  name="general" id="general" defaultChecked />
          <label className="for-checkbox" htmlFor="general" />
         
          <div className="section  z-bigger">
            <div className="container ">
              <div className="row">

                <div className="col-12 pt-5">
                  <h2 className="mb-4 pb-2">Select Upload Type</h2>
                </div>

                <div className="col-12 pb-5">
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-1" defaultChecked />
                  <label className="for-checkbox-tools" htmlFor="tool-1">
                   <span class="iconify" data-icon="bx:bx-music" data-inline="false"></span>
                    Song
                  </label>
                  
						<input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
                  <label className="for-checkbox-tools" htmlFor="tool-2">
                    <span class="iconify" data-icon="ls:album" data-inline="false"></span>
                    Album
                  </label>
                




                </div>
               
                
                
              </div>
            </div>	
          </div>
    </div>
  )
}

export default test
