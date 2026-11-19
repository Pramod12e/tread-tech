import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5  mb-5'>
            <div className='row text-center'>
                <div className="col-12">
                        <img src="media/images/homeHero.png" alt="hero image" 
                        className='img-fluid mb-5 ml-3 mr-3' style={{width:"65%"}}/>

                        <h2>Invest in everything</h2>
                        <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>

                        <button style={{width:"20%" , margin: "0 auto"}}
                        className='btn btn-primary mt-4 fs-5 mb-5'>
                            Signup Now
                        </button>

                </div>
            </div>
        </div>
     );
}

export default Hero;