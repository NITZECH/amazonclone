import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                alt="homeimage"
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            
            <div className="home__row">
            <Product
            title="HP Elite Dragonfly Notebook PC"
            price={1550.81}
            image="https://images-na.ssl-images-amazon.com/images/I/51VCr1nOsXL._AC_SL1200_.jpg"
            rating={5} />
            
            <Product 
             title="AC Power Adapter Charger for Lenovo Yoga 4 Pro Yoga 700 Yoga 900"
             price={12.99}
             image="http://ecx.images-amazon.com/images/I/41gnTz47O3L.jpg"
             rating={3}/>

            <Product 
             title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A8, Black)"
             price={749.99}
             image="https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SL1500_.jpg"
             rating={5}/>
           
            </div>
            <div className="home__row">
            
            <Product
             title="Kingston 240GB A400 SATA 3 2.5 Internal SSD SA400S37/240G - HDD Replacement for Increase Performance"
             price={85.99}
             image="https://images-na.ssl-images-amazon.com/images/I/91RL%2BMhTWbL._AC_SL1500_.jpg"
             rating={5} />
            
            </div>
            <div className="home__row">
            <Product
             title="Giantex Portable Mini Compact Twin Tub Washing Machine 17.6lbs Washer Spain Spinner Portable Washing Machine, Blue+ White"
             price={400}
             image="https://images-na.ssl-images-amazon.com/images/I/61ydHx1s19L._AC_SL1500_.jpg"
             rating={2} />
            <Product 
             title="Lindt LINDOR Milk Chocolate Truffles, 25.4 oz, 60 Count"
             price={17}
             image="https://images-na.ssl-images-amazon.com/images/I/818QhmsDlhL._SL1500_.jpg"
             rating={4}/>
            </div>
            <div className="home__row">
            <Product
             title="The lean python"
             price={29.99}
             image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
             rating={5} />
            </div>
            
            </div>
        </div>
    )
}

export default Home
