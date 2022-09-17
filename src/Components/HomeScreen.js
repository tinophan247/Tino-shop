import React, { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Product from "./Product";

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
      <div>
        <Product products={products}/>
      </div>
    </div>
  );
}

export default HomeScreen;
