import React, { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Rating from "../Icons/Rating";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{loading, error, products},dispatch] = useReducer(logger(reducer), {loading : true, error : '', products: []})
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try{
        const result = await axios.get("/api/products");
        dispatch({type: 'FETCH_SUCCESS',payload : result.data});
      }
      catch(err) {
        dispatch({type: 'FETCH_FAIL',payload : err.message});
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container-fluid font-bold text-3xl mt-3">
        Featured Products
      </div>
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
    </div>
  );
}

export default HomeScreen;
