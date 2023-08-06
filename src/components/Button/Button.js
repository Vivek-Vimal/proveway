import React from 'react'
import './Button.css'

const Button = (props) => {

    return (
        <button
            className='btn'
            {...props}
            type="button" 
        >
            {props?.Text ? props?.Text : "Default"}
        </button>
    )
    }
export default Button;