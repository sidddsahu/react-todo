import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

function Home({ handleLogout, userData }) {
  const [products, setProducts] = useState([]); // Array to store products
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering

  // Optionally uncomment and implement logic to fetch initial products from an API
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('your-api-endpoint');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // useEffect(() => {
  //   const storedProducts = localStorage.getItem('products');
  //   setProducts(storedProducts)
  // }, []);


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []); // Empty dependency array to run only once on component mount

  const handleAddProduct = (product) => {
    const existingProduct = products.find((p) => p.name === product.name);
    if (!existingProduct) {
      setProducts([...products, product]);
      localStorage.setItem('products', JSON.stringify([...products, product]));
    } else {
      console.warn('Product already exists:', product.name);
    }
  };

  // const handleAddProduct = (product) => {
  //   const existingProduct = products.find((p) => p.name === product.name);
  //   if (!existingProduct) {
  //     const updatedProducts = [...products, product]
  //     setProducts(updatedProducts);
  //     localStorage.setItem('products', JSON.stringify(updatedProducts));
  //   } else {
  //     // Handle product duplication (e.g., display an error message)
  //     alert('Product already exists:', product.name);
  //   }
  // };


  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase()); // Ensure case-insensitive search
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );


  const handleDeleteProduct = (productName) => {
    const filteredProducts = products.filter(
      (product) => product.name !== productName
    );
    setProducts(filteredProducts);

    // Optional: Update local storage if you're saving products there
    localStorage.setItem('products', JSON.stringify(filteredProducts));
  };

  return (
    <>
    <h1 className='text-center text-3xl mb-1 font-bold'>Welcome to your Dashboard</h1>
      <div className=' home-main w-full flex justify-center  ' >

<div className='home bg-slate-300 p-5 rounded-lg flex flex-wrap justify-between '>

  <div className='me-5 '>

      <button className='logout border px-12 py-2 mt-3 mb-2 hover:bg-pink-500 font-semibold bg-black text-white'  onClick={handleLogout}>Logout</button>
      <ProductForm onAddProduct={handleAddProduct} />

  </div>

      <div >
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} onDeleteProduct={handleDeleteProduct} setProducts={setProducts} />
      </div>

</div>


    </div>
    </>


  );
}

export default Home;
