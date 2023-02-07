import React from 'react'
import "./styles/Locationinfo.css"

const Locationinfo = ({location}) => {

    return (
    <div>
        <section className='location_info'>
        <h2 className='locationInfo_title'>{location?.name}</h2>
        <ul className='locationInfo_list'>
            <li className='locationInfo_one'><span>Type:</span> {location?.type}</li>
            <li className='locationInfo_one'><span>Dimension:</span> {location?.dimension}</li>
            <li className='locationInfo_one'><span>Population:</span> {location?.residents.length}</li>
        </ul>
        </section>
    </div>
    )
}

export default Locationinfo
