import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response?.data?.products, "data");
        setProducts(response?.data?.products
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className='row'>

        {

          products.map((data) => {
            return (


              <div class="column">
                <div class="card">
                  <img src={data.images[0]} class="card-img-top" width="100" height="100px"
                    alt="Hollywood Sign on The Hill" />
                  <h3>{data?.title}</h3>
                  <p>Rs. {data?.price}</p>
                  <p>{data?.brand}</p>
                  <button className='button'>Add to Card </button>
                </div>

              </div>


            )
          })
        }
      </div>
    </div>
  );
};

export default ProductList;
