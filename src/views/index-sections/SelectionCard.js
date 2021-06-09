import React from 'react'
import PropTypes from 'prop-types'

function SelectionCard ({title,image,description,price}) {
    return (       
        <div className="card">
            <div className="card-body">
                <img src={image} alt="" />
                <h4 className="card-title">{title}</h4>
                <p>{description}</p>
                <span><b>{price}</b></span>
            </div>
        </div>     
    )
}
export default SelectionCard


SelectionCard.propTypes={
    title: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price:PropTypes.string.isRequired
}