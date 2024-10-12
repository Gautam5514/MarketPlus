import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OfferLayout = () => {
    const [offers] = useState([
        { id: 1, title: 'Shirt', description: 'This is a shirt', price: 1099, discount: 30, offer: 'Big Billion Day', image: 'https://picsum.photos/200/300' },
        { id: 2, title: 'Pant', description: 'This is a pant', price: 999, discount: 20, offer: 'Dushera Sell', image: 'https://picsum.photos/200/301' },
        { id: 3, title: 'Shoes', description: 'This is a shoes', price: 1299, discount: 40, offer: '1st Purchase', image: 'https://picsum.photos/200/302' },
        { id: 4, title: 'Jacket', description: 'This is a jacket', price: 1599, discount: 10, offer: 'Big Billion Day', image: 'https://picsum.photos/200/303' },
        { id: 5, title: 'Hat', description: 'This is a hat', price: 899, discount: 50, offer: 'Big Billion Day', image: 'https://picsum.photos/200/304' },
        { id: 6, title: 'Scarf', description: 'This is a scarf', price: 799, discount: 20, offer: 'Big Billion Day', image: 'https://picsum.photos/200/305' },
        { id: 7, title: 'Gloves', description: 'This is a gloves', price: 699, discount: 30, offer: 'Big Billion Day', image: 'https://picsum.photos/200/306' },
        { id: 8, title: 'Socks', description: 'This is a socks', price: 599, discount: 40, offer: 'Big Billion Day', image: 'https://picsum.photos/200/307' },
    ]);

    return (
        <div className="container mt-4" style={{ backgroundColor: '#f8f9fa' }}>
            <h1 className="text-center mb-4">Offers</h1>
            <div className="row custom-card">
                {offers.map((offer) => (
                    <div key={offer.id} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={offer.image} alt={offer.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{offer.title}</h5>
                                <p className="card-text">{offer.description}</p>
                                <p className="card-text"><strong>Rs {offer.price}</strong></p>
                                <p className="card-text text-danger"><strong>{offer.discount}% off </strong></p>
                                <p className="card-text text-primary"><strong>{offer.offer}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferLayout;
