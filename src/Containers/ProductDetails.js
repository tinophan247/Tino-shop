import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import AddToCart from '../Components/cart/AddToCart'
import Rating from '../Icons/Rating'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const ProductDetails = () => {
    const params = useParams();
    const { slug } = params;

    const [{ product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [slug]);

    return (
        <div>
            <div className="flex justify-evenly">
                <div className="cursor-pointer relative mt-10">
                    <img className=" rounded-xl w-400" src={product.img} alt={product.name} />
                </div>
                <div>
                    <div className='mt-10 text-2xl font-bold text-gray-500'>
                        {product.name}
                    </div>
                    <div className='mt-2'>
                        <Rating />
                    </div>
                    <div className='mt-2 text-gray-400 border-t-2 border-b-2 border-gray-400  '>
                        Product ID : {product.id}
                    </div>
                    <div>
                        Brand : {product.brand}
                    </div>
                    <div>
                        Size : {product.size}
                    </div>
                    <div className='text-3xl text-red-500 font-bold font-serif'>
                        ${product.price}.00
                    </div>
                    <div className='mt-5'>
                        {product.inStock > 0
                            ?
                            <button className='bg-green-400 text-black w-20 text-bold rounded-md'> In Stock </button>
                            :
                            <button className='bg-red-600 text-black w-20 text-bold rounded-md'> Sold Out</button>
                        }

                    </div>
                    <div className='mt-5'>
                        Qty :
                        <button className='text-blue-400 hover:bg-blue-400 hover:text-white hover: text-2xl font-bold border border-black w-10 h-10 ml-2'> + </button>
                        <button className='text-blue-400 text-2xl border border-black w-20 h-10' > 1 </button>
                        <button className='text-blue-400 hover:bg-blue-400 hover:text-white text-2xl font-bold border border-black w-10 h-10'> - </button>
                    </div>
                    <div className='grid justify-items-center mt-5'>
                        <AddToCart width={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails