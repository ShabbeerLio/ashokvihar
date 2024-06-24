import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.876703856984!2d77.18022682087717!3d28.69333462758402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0213ccb6190d%3A0x4d83ad89d593189f!2sChaudhary%20Gulab%20Singh%20Marg%2C%20Ashok%20Vihar%20III%2C%20Ashok%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719228008832!5m2!1sen!2sin" ></iframe>
            </div>
        </div>
    )
}

export default Location
