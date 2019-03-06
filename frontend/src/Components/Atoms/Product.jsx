import React from 'react'

const Product = (props) => (
    <figure className="image is-4by3" onClick={props.click}>
        <img src={props.img} alt="img1" />
        
    </figure>
)

export default Product