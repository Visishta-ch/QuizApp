import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.onClick} style={props.style} className="button">
            {props.buttonName}
        </button>
    </div>
    
    )
}

export default Button