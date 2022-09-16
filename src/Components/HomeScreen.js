import React, { useEffect, useReducer} from "react";
import axios from "axios";
import logger from 'use-reducer-logger'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{loading, error, product},dispatch] = useReducer(logger(reducer), {loading : true, error : '', product: []})
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try{
        const result = await axios.get("/api/product");
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
      <h1>Featured Products</h1>
      <div className="products">
        {product.map((product, index) => {
          return (
            <div className="product" key={index}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
