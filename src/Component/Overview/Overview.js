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
                        <Form heading={"Book Your Site Visit"} btntxt={"Book A Site Visit"} />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>The apartments at Godrej Ashok Vihar New Delhi consist of large and well illuminated rooms accompanied by elegant interior designs. Every living space has well-finished and noble hardware and furniture, maximum glazing of rooms to receive daylight, and terraces or loggias with magnificent views. Single, couple or a family, there is a type of housing for everyone, choosing from the number of rooms and the size of the house. We make sure that no part of your home is left unattended, hence, every part of your home is as excellent as the other.                            </p>
                            <p>Prime Location the area enjoys Excellent Connectivity. Life in Godrej Ashok Vihar is all about location and connectivity, to its credit, it has both majestically. In terms of accessibility it is confirmed that the area is well connected to major roads, metro stations, and public transportation. Well established schools, hospitals, shopping malls and recreational facilities for entertainment are found with in this neighbourhood hence people can easily run their daily errands without too much hassle. Take advantage of the great environment of this culturally diverse locality and modern conveniences that guarantee the highest standard of living.                            </p>
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
