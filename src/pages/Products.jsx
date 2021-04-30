import React from 'react';
import Layout from '../components/Layout';
import '../components/Products.css';


function Products() {
    return (
        <div>
            <Layout/>
            <div className='container'>
                <h1>Oferte promoționale:</h1>
                <p>Pentru un bilet dus-intors pe ruta București-Maldive avem la dispoziție doua bilete la jumătate de preț pentru cei dragi:</p>
                <div className='sejur-Maldive'>
                    <img src="https://i.imgur.com/uTI4wZv.jpg" alt="random" />
                    <img src="https://i.imgur.com/777EK1K.jpg" alt="random" />
                </div>
            </div>
        </div>
    );
}

export default Products
