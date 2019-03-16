import React from 'react'

/**
 * Product is the class component that represents a "product" in the market 
 * by its image.
 * @param {*} props : Are the component properties.
 */
const Product = (props) => (
    <figure className="image is-4by3" onClick={props.click}>
        <img src={props.img} alt="img1" />
    </figure>
)

export default Product
