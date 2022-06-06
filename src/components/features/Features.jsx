import React from 'react'

function Features(props) {
    return(
        <div className="features" style={{
            padding: props.padding
        }}>
            <div style={{
                textAlign:props.ta,
            }}>
            <p>FEATURES</p>
            <h2 style={{
                color: props.bg
            }}>The Best of Yoga</h2>
            </div>
            <div className="parents" style={{
                display: props.flex,
                margin: props.margin,
                border: props.border,
                height: props.height,
                width: props.width                

            }}>
            <div className="item1" style={{
            }} >
            <img src="./f1.png" alt="" />
            <p>That this group would somehow form a family the way we all became the Brady Bunch.</p>
            <img src="./f2.png" alt="" />
            <h2>Strength Building</h2>
            <p>That this group would somehow form a family the way we all became the Brady Bunch.</p>
            <h2>Stress Relief</h2>
            <img src="./f3.png" alt="" />
            <p>That this group would somehow form a family the way we all became the Brady Bunch.</p>
            </div>
            <div className="item2">
            <img src="./f4.png" alt=""  height="60%" />
            </div>

           <div className="item3">
           <img src="./f5.png" alt="" />
            <h2>Relax & Refresh</h2>
            <p>That this group would somehow form a family the way we all became the Brady Bunch.</p>
            <img src="./f6.png" alt="" />
            <h2>Beauty of Body</h2>
            <p>That this group would somehow form a family the way we all became the Brady Bunch.</p>
            <img src="./f7.png" alt="" />
            <h2>Mind & Soul</h2>
            <p>That this group would somehow form a family the way we all became the Brady Bunch.</p>
           </div>

            </div>

        </div>
    )
}

export default Features