import React from 'react';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
    return (
        <div className="container">
            <h2 style={{textAlign:'center'}}>Testimonials</h2>

            
            <div style={{padding:'3rem 0'}}>
                <Carousel autoPlay={true} transitionTime={1000} infiniteLoop={true} showArrows={false} showThumbs={false}>
                    <div style={{paddingBottom:'5rem', maxWidth:'70%', margin:'auto'}}>
                        {/* <div>img</div> */}
                        <h3 style={{padding:'.5rem 0'}}>Jesus Salgado</h3>
                        <p>"Ashraf got the job done. he was able to provide his design ideas and spearheaded the development."</p>
                    </div>
                    <div style={{paddingBottom:'5rem', maxWidth:'70%', margin:'auto'}}>
                        {/* <div>img</div> */}
                        <h3 style={{padding:'.5rem 0'}}>Pad Nara, AA</h3>
                        <p>"He provides me with his output in advance in the form of a url link.
                            I was very busy, but he gave me the url link so I could preview the result on my phone.
                            And I got home in the 1:00 am and finished my order. 
                            I think the next order will be with him."</p>
                    </div>
                    <div style={{paddingBottom:'5rem', maxWidth:'70%', margin:'auto'}}>
                        {/* <div>img</div> */}
                        <h3 style={{padding:'.5rem 0'}}>Akash Deep</h3>
                        <p>"Ashraf is definitely fun to work with, he handled all my requirements perfectly, and I would love to work with him again."</p>
                    </div>
                    <div style={{paddingBottom:'5rem', maxWidth:'70%', margin:'auto'}}>
                        {/* <div>img</div> */}
                        <h3 style={{padding:'.5rem 0'}}>Pad Nara, AA</h3>
                        <p>"He provides me with his output in advance in the form of a url link.
                            I was very busy, but he gave me the url link so I could preview the result on my pho
                            And I got home in the 1:00 am and finished my order. 
                            I think the next order will be with him."</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;