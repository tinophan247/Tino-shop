import React from 'react'
import data from '../data'

function HomeScreen() {
  return (
    <div >
    <h1>Featured Products</h1>
    <div className='products'>
        {data.product.map((product, index) => {
            return <div className='product' key={index}>
                <img src={product.img} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        })}
    </div>
</div>  )
}

export default HomeScreen