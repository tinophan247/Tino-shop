import React, { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Product from "./Product";
import { Helmet } from 'react-helmet-async';

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
  const [{ products},dispatch] = useReducer(logger(reducer), {loading : true, error : '', products: []})
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
      <Helmet>
        <title>Tino Shop</title>
      </Helmet>
      <div className="container-fluid font-bold text-3xl mt-3 ml-10">
        Featured Products
      </div>
      <div>
        <Product products={products}/>
      </div>
    </div>
  );
}

export default HomeScreen;
