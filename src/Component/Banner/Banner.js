import React from 'react'
import bannerimg from "../../Assets/banner.jpeg"
import "./Banner.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="Godrej Ashok Vihar" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>Godrej Ashok Vihar</h2>
                        <h5>At Ashok Vihar , Delhi</h5>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        <p>Premium 3.5 / 4.5 / 5.5 BHK Residence | Price Starts <span> ₹7.50 Cr*</span> </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
