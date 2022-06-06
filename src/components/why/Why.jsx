import React from 'react'

function Why(props) {
    return(
        <div className="why-us" style={{
            display: props.flex ,
            padding: props.padding ,
            border: props.border,
            justifyContent: props.jc,
            alignItems: props.ai,
            background: props.bg,

        }}>
           <div className="text" style={{
               color: props.tc,
            //    fontWeight: props.fw,
           }}>
           <p style={{
               color: props.pc,
               margin: props.margin
           }}>WHY CHOOSE US</p>
            <h2 style={{
            }}>Customized Instruction For Every Student</h2>
            <p>Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
            <input type="button" value="JOIN US" style={{
                padding: props.btnp ,
                border: props.btnb,
                borderRadius: props.br,
                color: props.btnc,
                margin: props.margin
            }} />
           </div>


            <img src="yoga-06.png" alt="" width="450px" />

        </div>
    )
}

export default Why