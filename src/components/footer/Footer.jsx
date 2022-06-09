import React from 'react'

function Footer(props) {
    return(
        <div className="footer">
           <div className="parents">
           <div className="footertext">
           <h1>Ready to Make a Change?</h1>
            <p>Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc. Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc.</p>
           </div>
           <div className="footerbtn">
           <input className='btn1' type="button" value="BECOME A MEMBER" />
            <input className='btn2' type="button" value="TAKE A CLASS" />
           </div>
            </div>
        </div>
    )
}


export default Footer