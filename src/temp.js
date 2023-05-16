import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      {
        products.map((data) => {
          return (
            <div className="container">
              <div class="row row-cols-3">
                <div class="col">
                  <div class="card">
                    <img src={data.images[0]} class="card-img-top" width="50px" height="100px"
                      alt="Hollywood Sign on The Hill" />
                    <div class="card-body">
                      <h5 class="card-title">{data?.title}</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          )
        })
      }
      {/* Render the fetched product data */}
      <ul>

      </ul>
    </div>
  );
};

export default ProductList;
