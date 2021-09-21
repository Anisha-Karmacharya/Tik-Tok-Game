import React from 'react'

const Square = ({ value, onClick }) => (

        <button onClick={onClick} className="btn">
            {value}
        </button>

)
export default Square;
