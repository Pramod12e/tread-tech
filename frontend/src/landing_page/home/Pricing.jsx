import React from 'react';

function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-lg-4">
                    <h1 className='mb-3'>Unbeatable pricing</h1> 

                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a href="" className='mx-3'>Explore our products</a>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-6" >
                    <div className="row text-center mt-3">
                        <div className="col border p-2">
                            <h1 >&#8377;0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border p-2">
                            <h1>&#8377;20</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;