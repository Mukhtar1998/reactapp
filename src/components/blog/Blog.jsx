import React from 'react'

function Blog(props) {
    return(
        <div className="blog">  
            <div className="pre" style={{
                textAlign: props.ai,
                padding: props.padding1,
                border: props.borderb,
            }}>
            <p>OUR BLOG</p>
            <h1 style={{
                 color: props.hcolor
             }}>Latest Articles</h1>
             <div className="parents" style={{
                display: props.flex,
                border: props.border,
                marginBottom: props.mb,
                gap: props.gap,
                width: props.width
            }}>
            <div className="purple" style={{
                border: props.border,
                background: props.pbackground
            }}><p style={{
                   backgroundColor: props.backgroundcolor,
                   TextDecoderation: props.textdecoration,
                   padding: props.mbb,
                   borderRadius: props.borderr
               }}> <a href="#" style={{
                   textDecoration: props.a, 
                   color: props.itbg
               }}>“You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.” -Walt Disney</a></p>
               <h3 style={{
                   padding: props.mbbb,
               }}>The Happiest Place On Earth</h3>
                <p style={{
                   padding: props.mbbb,
                }}>Aliquam ut justo adipiscing, commodo lectus quis, feugiat ante. Proin accumsan in tellus vel vehicula. Vestibulum non nulla mattis, ultrices lectus at, tincidunt enim.</p>

            </div>
            <div className="lightblue" style={{
                border: props.border,
            }}> <h2 style={{
                textAlign: props.ai,
                backgroundColor: props.lightblue,
                color: props.itbg
            }}>Elegant Icon Font</h2>
               <p style={{
                   backgroundColor: props.lightblue,
                   TextDecoderation: props.textdecoration,
                   padding: props.mbb,
                   borderRadius: props.borderr,
                   color: props.itbg

               }}> <a href="#" target="_blank" style={{
                textDecoration: props.a,
                color: props.itbg
            }}>https://www.elegantthemes.com/blog/resources/elegant-icon-font</a></p>
                <p style={{
                   padding: props.mbbb,
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies ut nibh nec cursus. Curabitur porttitor nibh a tellus egestas, sit amet interdum nisl imperdiet. Fusce imperdiet diam odio, ut viverra metus fringilla vel. Nulla aliquam porttitor libero. Cras...</p>

            </div> <div className="slideing" style={{
                border: props.border
            }}>
               <p style={{
                   TextDecoderation: props.textdecoration,
                   borderRadius: props.borderr
               }}> <a href="#"><h3 style={{
                        textAlign: props.ai,
               }}>The Sweet Life</h3>
               </a></p>
                <p style={{
                   padding: props.mbbb,
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.</p>
            
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
            
           



        </div>
    )
}

export default Blog