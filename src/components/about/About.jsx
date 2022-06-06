import React from 'react'
function About(props){
    return(
        <div className="into" style={{
            display: props.flex ,
            padding: props.padding ,
            border: props.border,
            justifyContent: props.jc,
            alignItems: props.ai,
            background: props.bg,
            position: props.absalout,
            padding: props.dpadding,
            backgroundColor: props.bg,
        }} >
            <div className="text" style={{
            margin: props.margin

            }}>
                <p>ABOUT US</p>
                <h1 style={{
                    color: props.color
                }}>High Quality & Professional Yoga Club
                </h1>
                <p>Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
                <div className="profil" style={{
                position: props.absalout,
                display: props.flex,
                justifyContent: props.jcp,
                alignItems: props.aip,

            }}>
                <img src="./profil.png" alt="profil" style={{
                    height: props.height,
                    width:  props.width,
                    position: props.pp,
                    top: props.top,
                    right: props.right
                }}/>
               <p>“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”</p>
            </div>
            <h3>Anthony Webster, CEO Yoga studio</h3>

            </div>
            <img style={{}} src="./yoga2.png" alt="yoga" width="451px" />
           
        </div>
    )
}

export default About