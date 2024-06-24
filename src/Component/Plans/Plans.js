import React, { useState } from 'react'
import "./Plans.css"
import FormFloat from '../Navbar/FormFloat'

const Plans = () => {

    const [formopen, setFormopen] = useState(false);
    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };
    return (
        <div className='Plans'>
            <div className='Plans-main'>
                <h3>Floor Plans & Pricing</h3>
                <div className="plans-box">
                    <div className="plans-card">
                        {/* <img src={floor1} alt="GODREJ JARDINIA Sector 146" onClick={formIsOpen} /> */}
                        <div className="plans-card-title">
                            <p>3.5 BHK 2500 square feet</p>
                            <span>@ ₹7.50 cr*</span>
                        </div>
                    </div>
                    <div className="plans-card">
                        {/* <img src={floor2} alt="GODREJ JARDINIA NOIDA" onClick={formIsOpen} /> */}
                        <div className="plans-card-title">
                            <p>4.5 BHK + servant 3700 square foot </p>
                            <span>@ ₹11.00 cr*</span>
                        </div>
                    </div>
                    <div className="plans-card">
                        {/* <img src={floor3} alt="GODREJ JARDINIA NOIDA, Sector 146" onClick={formIsOpen} /> */}
                        <div className="plans-card-title">
                            <p>5.5BHK + servant penthouse 6200 square foot </p>
                            <span>@ ₹21.70 cr*</span>
                        </div>
                    </div>
                </div>
            </div>
            {formopen && (
                <>
                    <FormFloat formIsClose={formIsClose} />
                </>
            )}
        </div>
    )
}

export default Plans
