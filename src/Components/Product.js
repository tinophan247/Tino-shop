import React, { useState } from 'react'
import Cart from '../Icons/Cart';
import Rating from '../Icons/Rating';

const Product = (props) => {
    const { products } = props;

    return (
        <div className=" grid grid-cols-4 justify-items-center">
            {products.map((product, index) => {
                return (
                    <div
                        className="cursor-pointer relative items-center w-80 border-2 border-gray-600 hover:bg-gray-200 group justify-between ml-5 mt-3"
                        key={index}
                    >
                        <article>
                            <img className="w-80 group-hover:saturate-200" src={product.img} alt={product.name} />
                            <p className=" cursor-pointer text-center text-xl font-bold font-sans mt-2 text-black group-hover:text-red-700">
                                {product.name}
                            </p>
                            <div className="grid justify-items-center mt-2">
                                <Rating />
                            </div>
                            <p className="text-center text-lg font-bold font-sans mt-2">
                                ${product.price}.00
                            </p>
                            <div className='grid justify-items-center mt-2'>
                                <button className="px-6 py-2 transition ease-in-out duration-300 uppercase rounded-full group-hover:bg-red-700 group-hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                </button>
                            </div>
                        </article>
                    </div>
                );
            })}
        </div>
    )
}

export default Product