import React from 'react';
import './Card.css';

const Card = ({cart}) => {
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7 / 100;
    return (
        <div className='card'>
            <h3>Order Summery</h3>
            <div className='order-info'>
                <p>Selected Items: {cart.length} </p>
                <p>Total Price: ${total} </p>
                <p>Shipping Charge: ${totalShipping} </p>
                <p>Tax: ${tax} </p>
                <h5>Grand Total: ${} </h5>
            </div>
        </div>
    );
};

export default Card;