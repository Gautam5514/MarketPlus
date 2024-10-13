import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OfferLayout.css"

const OfferLayout = () => {
    const [offers] = useState([
        { id: 1, description: 'Apple iPhone 13 Starlight', price: 19990, discount: 30, offer: 'Great Indian Festival', image: './images/iphon.jpg' },
        { id: 2, description: 'Lymio Track Pant for Men ', price: 999, discount: 20, offer: 'Great Indian Festival', image: './images/pant.jpg' },
        { id: 3,  description: 'Women Pure Banarasi Saree', price: 1299, discount: 40, offer: 'Great Indian Festival', image: './images/saree.jpg' },
        { id: 4,  description: 'Women Cotton Blend Kurta', price: 1599, discount: 10, offer: 'Great Indian Festival', image: './images/suit.jpg' },
        { id: 5, description: 'Men Cotton Rich Polo T Shirt', price: 1099, discount: 50, offer:'Great Indian Festival', image: './images/tshirt.jpg' },
 
    ]);

    return (
        <div className=" " style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-center mb-3 text-black">Trending deals under ₹499</h2>
            <div className="cardcontainer">
            {offers.map((offer) => (
                    <div key={offer.id}>
                        <div className="offercard">
                            <img src={offer.image} alt={offer.title} className="" />
                            <div className="content">
                                <div className="festoffer">
                                <p className="cardtext  off mb-1 "> {offer.discount}% off</p>
                                <p className="cardtext text-danger mb-1 "> {offer.offer} </p>
                                </div>

                                 <div className='priceoffer'>
                                 <p className="cardtext text-dark price mb-1">&#8377;{offer.price}</p>
                                 <p className="cardtext text-dark mb-1"> M.R.P: <span className='mrp'>&#8377;{offer.price}</span> </p>
                                 </div>
                                <p className="cardtext text-dark mb-0 ">{offer.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
               
            </div>
        
    );
};

export default OfferLayout;
