import React from 'react'

function Team(props) {
    return(
        <div className="team" style={{
            // backgroundColor: props.bg2,
            border: props.borderb,
            padding: props.padding1
         }}>
              <div className="pre" style={{
                textAlign: props.ai,
             }}>
             <p>EXPERT INTSRUCTORS</p>
             <h1 style={{
                color: props.btnc,
             }}>Meet Our Team</h1>
             </div>
            <div className="parents"style={{
                 display: props.flex,
                 flexDirection: props.flexd,
                 padding: props.padding,
                 justifyContent: props.jcd,
                 gap: props.gap,
                 position: props.absalout,
                 marginTop: props.mt,
                 marginBottom: props.mb
             }}>
            <div className="item1" style={{
                display: props.flex,
                border: props.border,
                alignItems: props.ai,
                flexDirection: props.flexdirection,
                backgroundColor: props.itbg,
                padding: props.pi


             }}>
                <img src="./p1.jpg" alt="Lisa Mokovic" width="250px"  />
                <h3>Lisa Mokovic</h3>
                <p>Health Coacher</p>
                <p>Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo.</p>
            </div>
            <div className="item2" style={{
                display: props.flex,
                border: props.border,
                alignItems: props.ai,
                flexDirection: props.flexdirection,
                backgroundColor: props.itbg,
                padding: props.pi

             }}>
                <img src="./p2.jpg" alt="Jason Moran" width="250px"  />
                <h3>Jason Moran</h3>
                <p>Yoga Trainer</p>
                <p>Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo.</p>
            </div>  <div className="item3" style={{
                display: props.flex,
                border: props.border,
                alignItems: props.ai,
                flexDirection: props.flexdirection,
                backgroundColor: props.itbg,
                padding: props.pi


             }}>
                <img src="./p3.jpg" alt="Kiana Chapman" width="250px" />
                <h3>Kiana Chapman</h3>
                <p>Yoga Trainer</p>
                <p>Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo.</p>
            </div>
            </div>
            <div className="btn" style={{
               textAlign: props.ai
             }}>
             <input style={{
                padding: props.btnp ,
                borderRadius: props.br,
                color: props.btnc,
                border: props.btnb,
             }} 
             type="button" value="VIEW ALL"  />
             </div>

        </div>
    )
}

export default Team