import React from 'react';

function Education() {
    return ( 
        <div className="container p-5">
            <div className="row p-5">
            
                <div className="col-lg-6  p-5" >
                    <img src="media/images/education.svg" alt="education"  className='img-fluid'/>
                </div>

                <div className="col-lg-6 p-5">
                    <h1 className='mb-3'>Unbeatable pricing</h1> 

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" >Varsity </a>

                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="">TradingQ&A </a>

                </div>
            </div>
        </div>
     );
}

export default Education;