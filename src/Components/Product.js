import React from 'react'
import Rating from '../Icons/Rating';

function Product(props) {
    const {products} = props;

  return (
    <div className="grid grid-cols-4 justify-items-center">
    {products.map((product, index) => {
      return (
        <div
          className=" items-center w-80 border-2 border-gray-600 justify-between ml-5 mt-3"
          key={index}
        >
          <img className="w-80" src={product.img} alt={product.name} />
          <p className="text-center text-xl font-bold font-sans mt-2">
            {product.name}
          </p>
          <div className="grid justify-items-center mt-2">
            <Rating />
          </div>
          <p className="text-center text-lg font-bold font-sans mt-2">
            ${product.price}.00
          </p>
        </div>
      );
    })}
  </div>
  )
}

export default Product