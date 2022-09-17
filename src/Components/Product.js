import React from 'react'
import Rating from '../Icons/Rating';
import AddToCart from './cart/AddToCart';

const Product = (props) => {
    const { products } = props;

    return (
        <div className=" grid grid-cols-4 justify-items-center">
            {products.map((product, index) => {
                return (
                    <div
                        className="cursor-pointer rounded-xl relative items-center w-80 border-2 border-gray-600 hover:bg-gray-200 group justify-between ml-5 mt-3"
                        key={index}
                    >
                        <article>
                            <img className="w-80 rounded-xl group-hover:saturate-200" src={product.img} alt={product.name} />
                            <p className=" cursor-pointer text-center text-xl font-bold font-sans mt-2 text-black group-hover:text-red-700">
                                {product.name}
                            </p>
                            <div className="grid justify-items-center mt-2">
                                <Rating />
                            </div>
                            <p className="text-center text-lg font-bold font-sans ">
                                ${product.price}.00
                            </p>
                            <div className='grid justify-items-center mt-2'>
                                <AddToCart width={20}/>
                            </div>
                        </article>
                    </div>
                );
            })}
        </div>
    )
}

export default Product