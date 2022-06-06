import React from 'react'

function Footer(props) {
    return(
        <div className="footer" style={{
            display: props.flex,
            background: props.hcolor,
            padding: props.padding1,
            margin: props.margin
        }}>
            <div className="text">
            <h1 style={{
                color: props.btnc
            }}>Ready to Make a Change?</h1>
            <p style={{
                color: props.btnc
            }}>Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc.
            <br /> Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc.</p>
            </div>
            <div className="btn" style={{
                display: props.flex,
                flexDirection: props.flexdirection,
                gap: props.gap,
                padding: props.btnp,
                borderRadius: props.borderradius,
                marginLeft: props.marginr
            }}>
            <input type="button" value="BECOME A MEMBER" style={{
                padding: props.btnp2,
                borderRadius: props.borderradius,
                border: props.border,
                background: props.btnb,
                color: props.btnc
                
                
            }}/>
            <input type="button" value="TAKE A CLASS" style={{
                color: props.btnt,
                background: props.btnc,
                padding: props.btnp,
                borderRadius: props.borderradius,
                border: props.btnb
            }} />
            </div>
        </div>
    )
}


export default Footer