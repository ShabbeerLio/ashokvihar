import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
            <iframe title='location'  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14000.094511786807!2d77.1758667!3d28.6889398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0356764de24b%3A0x94e91a5fc7909eaf!2sGodrej%20Ashok%20Vihar!5e0!3m2!1sen!2sin!4v1721991814970!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
