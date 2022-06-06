import React from 'react'

function Partners(props) {
    return(
        <div className="partners">  
        <h1 style={{
            color: props.hcolor,
            textAlign: props.ai,

        }}>Our Partners</h1>
        <div className="partner" style={{
            display: props.flex,
            padding: props.padding1,
            textAlign: props.ai,
            justifyContent: props.jc,
            gap: props.gap
        }}>
        <img src="./logo_01-1.png" alt="" border="1px solid grey" />
        <img src="./logo_02-1.png" alt="" border="1px solid grey" />
        <img src="./logo_03-1.png" alt="" border="1px solid grey"/>
        <img src="./logo_04-1.png" alt="" border="1px solid grey"/>
        </div>
        </div>
    )
}

export default Partners