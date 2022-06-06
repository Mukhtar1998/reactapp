import React from 'react'

function Intro(props) {
    return(
        <div className="into" style={{
            display: props.flex ,
            padding: props.padding ,
            border: props.border,
            justifyContent: props.jc,
            alignItems: props.ai,
            background: props.bg,

            
            
        }} >
            <div className="text" style={{
                fontWeight: props.fw,
                color: props.tc
                }}>
                <h1 style={{}}>Divi Yoga Studio <br /><strong>Balance,Mind & <br />Body</strong></h1>
                <p>Nunc consequat justo eget enim finibus porta.<br /> Suspendisse orci nunc, rutrum quis nunc sed.</p>
                <input type="button" value="GET STARTED" style={{
                    padding: props.btnp ,
                    border: props.btnb,
                    borderRadius: props.br,
                    color: props.btnc
                }} />
            </div>
            <img style={{
            }} src="./yoga1.png" alt="yoga" width="450px"/>
           
           
        </div>

        

    )
}

export default Intro