import React from 'react'

function Classes(props) {
    return(
        <div className="classes" style={{
            backgroundColor: props.background,
            border: props.borderb,
            padding: props.padding1
         }}>
             <div className="pre" style={{
                textAlign: props.ai,
             }}>
             <p>OUR CLASSES</p>
             <h1 style={{
                color: props.btnc,
             }}>Join A Class Today!</h1>
             </div>
             <div className="parents" style={{
                 display: props.flex,
                 flexDirection: props.flexd,
                 padding: props.padding,
                 justifyContent: props.jcd,
                 gap: props.gap,
                 position: props.absalout,
                 marginTop: props.mt,
                 marginBottom: props.mb

             }}>
             <div className="item" style={{
                display: props.flex,
                border: props.border,
                alignItems: props.ai,
                flexDirection: props.flexdirection,
                padding: props.pi,
                backgroundColor: props.itbg

             }}>
                <img src="./yoga-03 (1).png" alt="" />
                <h2>Hot Yoga</h2>
                <p>Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa.</p>
             </div>
             <div className="item" style={{
                display: props.flex,
                border: props.border,
                alignItems: props.ai,
                flexDirection: props.flexdirection,
                padding: props.pi,
                backgroundColor: props.itbg

             }}>
                <img src="./yoga-04.png" alt="" />
                <h2>Yin Yoga</h2>
                <p>In cursus ornare sollicitudin. Ut libero urna, sollicitudin et porttitor id, tempus vitae nisl. Quisque a venenatis libero.</p>
             </div><div className="item" style={{
                display: props.flex,
                border: props.border,
                alignItems: props.ai,
                flexDirection: props.flexdirection,
                padding: props.pi,
                backgroundColor: props.itbg


             }}>
                <img src="./yoga-05-1.png" alt="" />
                <h2>Hatha Yoga</h2>
                <p>Suspendisse hendrerit tincidunt metus id sollicitudin. Praesent sed sapien id arcu congue dapibus dapibus nec est.</p>
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

export default Classes