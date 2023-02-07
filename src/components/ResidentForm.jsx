import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {

    return (
    <form className='formulario' onSubmit={handleSubmit}>
        <input className='formulario_input' type="text" id='idLocation' placeholder='type a location id' />
        <button className='form_button'>Search</button>
    </form>
    )
}

export default ResidentForm
