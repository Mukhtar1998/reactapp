import React from 'react'

function Testimonials(props) {
    return(
        <div className="testimonials" style={{
            background: props.bg,
            border: props.borderb,
            padding: props.padding1
         }}>
             <div className="intro"  style={{
                textAlign: props.ai,
             }}>
             <p>TESTIMONIALS</p>
             <h1 style={{
                 color: props.itbg
             }}>What People Are Saying</h1>
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
                <div className="text1" style={{
                 display: props.flex,
                 alignItems: props.ai,
                 flexDirection: props.flexdirection,
                 backgroundColor: props.itbg,
                 padding: props.pi,
                 background: props.background
             }}>
                <p>“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”</p>
                <h4>Antonio Compbell</h4>
                <p>Student, Yoga Studio</p>

            </div>
            <div className="text1" style={{
                 display: props.flex,
                 alignItems: props.ai,
                 flexDirection: props.flexdirection,
                 backgroundColor: props.itbg,
                 padding: props.pi,
                 background: props.background

             }}>
                <p>“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”</p>
                <h4>Helena Smith</h4>
                <p>Student, Yoga Studio</p>

            </div><div className="text1" style={{
                 display: props.flex,
                 alignItems: props.ai,
                 flexDirection: props.flexdirection,
                 backgroundColor: props.itbg,
                 padding: props.pi,
                 background: props.background

             }}>
                <p>“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”</p>
                <h4>Isabella Edwards Compbell</h4>
                <p>Student, Yoga Studio</p>

            </div>
            </div>
            
        </div>
    )
}

export default Testimonials