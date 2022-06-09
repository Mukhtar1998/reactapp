import React from 'react'
import Item3 from './Item3'

function Team(props) {
    return(
        <div className="team">
        <div className="text">
         <p>EXPERT INTSRUCTORS</p>
         <h1 className='classesh1'>Meet Our Team</h1>
         </div>
        <div className="three-grid-team">
         <Item3 imgurl="/p1.jpg" height="278px" width="278px" heading="Lisa Mokovic" ptext="Health Coacher" blurb="Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo." />
         <Item3 imgurl="/p2.jpg"  height="278px" width="278px" heading="Jason Moran" blurb="Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo. "/>
         <Item3 imgurl="/p3.jpg"  height="278px" width="278px" heading="Kiana Chapman" blurb="Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo."/>
         </div>
         <input className='classesbtn' type="button" value="VIEW ALL" />
        </div>

        )
}

export default Team