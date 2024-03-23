import React, { useEffect } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
function ProductList({ products ,setProducts, onDeleteProduct }) {



  return (
    <div className=' list bg-zinc-200 p-4'>
   <h2 className='text-2xl font-bold mb-4'> Your Products</h2>
    <div className='list-div' >

      {products.length > 0 ? (
        <ul className='mb-4 '>
          {products.map((product) => (
            <li className='mb-3 flex justify-between px-8 bg-white py-3' key={product.name}>
              <p> {product.name} - ₹{product.price}</p>
              
              <button className='text-red-700 ms-5' onClick={() => onDeleteProduct(product.name)}>
              <RiDeleteBin6Fill />
              </button>
            </li>

          ))}
        </ul>
      ) : (
        <p className='text-2xl font-bold px-3 mb-4'>No products found.......</p>
      )}
    </div>
    </div>

  );
}

export default ProductList;
