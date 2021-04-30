import React from 'react';

function TravelsItem(props) {
    const{ image,flight,company,price,currency,time,hotels,imageHotels }=props;
    return (
        <div className='col-6 mt-3'>
            <h3>Imagini sejur</h3>
            <img src={image} alt="random" className='w-100'/>
            <h3>Detalii sejur</h3>  
            <h1>Ruta:{flight}</h1>
            <p>Compania aeriana:{company}</p>
            <p>Prețul:{price}</p>
            <p>Tarif Romania:{currency}</p>
            <p>Durata de timp:{time}</p>
            <h1>Hotel:{hotels}</h1>
            <h3>Imagini hoteluri</h3>
            <img src={imageHotels} alt="random" className='w-100'/>
        </div>
    );
}

export default TravelsItem;
