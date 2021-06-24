import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
        <div className="home-container">
            <img
            className="home-image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="banner" 
             />
             <div className="home-row">
                 <Product
                 id="1"
                 title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses
"
                 price={29.99}
                 image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY436_FMwebp_QL65_.jpg" 
                 rating={10}
                 />
                 <Product
                 id="2"
                  title="COSTWAY Stand Mixer, 6-Speed 7.5 QT Tilt-head Electric Kitchen Food Mixer 660W with Stainless Steel Bowl, Dough Hook, Beater, Whisk"
                 price={117.99}
                 image="https://m.media-amazon.com/images/I/71H5zQcb0sL._AC_UY436_FMwebp_QL65_.jpg" 
                 rating={3} /> 

             </div>
             <div className="home-row">
                 <Product
                 id="3"
                 title="All-new Echo (4th Gen) and 6 months of Amazon Music Unlimited FREE w/ auto-renewal - Charcoal"
                 price={74.99}
                 image="https://m.media-amazon.com/images/I/61+tSvjijyL._AC_UY436_FMwebp_QL65_.jpg" 
                 rating={4} />
                 <Product 
                     id="4"
                 title="All-new Echo (4th Gen) and 6 months of Amazon Music Unlimited FREE w/ auto-renewal - Charcoal"
                 price={74.99}
                 image="https://m.media-amazon.com/images/I/61MWn6iC4WS._AC_UL640_FMwebp_QL65_.jpg" 
                 rating={3}
                 />
                 <Product
                 id="5"
                 title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray"
                 price={1099.00 }
                 image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY436_FMwebp_QL65_.jpg" 
                 rating={6} />

             </div>
             <div className="home-row">
             <Product 
                 id="6"
                 title="SAMSUNG CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty C49J890DKN"
                 price={986}
                 image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY436_FMwebp_QL65_.jpg" 
                 rating={4}
             />
             </div>



        </div>
        </div>
    )
}

export default Home;
