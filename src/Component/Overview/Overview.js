import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import gmy from "../../Assets/CAtegory/gymi.jpg"
import Basketball from "../../Assets/CAtegory/basketball.jpg"
import Swimming from "../../Assets/CAtegory/swimming.jpeg"
import banhall from "../../Assets/CAtegory/hall.jpg"
import spot from "../../Assets/CAtegory/joging.webp"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Godrej Ashok Vihar Apartments, on the other hand, are constructed on the new floor plan to obtain its premium benefit, and then the new structure and appealing services make it a top-notch residential address. With adherence to international standards and the incorporation of modern-day comforts and amenities, each of our products ensures the pinnacle of exquisite living. We have created a solid relationship with our customers as a result of our customer-centric strategy.</p>
                            <p>We strive hard to provide clients with high-quality residences on time. To ensure that the service is flawless, our quality control team inspects every procedure of apartment development. We have established ourselves as a well-known company that provides a diverse range of 2, 3, and 4 BHK exotic apartments in Delhi NCR.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={gmy} alt="Godrej Ashok Vihar Delhi" />
                                    <p>Gym</p>
                                </div>
                                <div className="category-card">
                                    <img src={Swimming} alt="Godrej Ashok Vihar" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={banhall} alt="Godrej Ashok Vihar Delhi price" />
                                    <p>multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={Basketball} alt="Godrej Ashok Vihar Delhi Expressway" />
                                    <p>Basketball Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={spot} alt="Godrej Ashok Vihar Delhi Plans" />
                                    <p>Jogging Track</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
