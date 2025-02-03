import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://anbbea-t5u8.onrender.com/vk/");
        const products = await response.json();

        console.log("Fetched Products:", products); // Debugging: Check API response

        if (componentMounted.current) {
          setData(products);
          setFilter(products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        if (componentMounted.current) {
          setLoading(false);
        }
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      ))}
    </>
  );

  const filterProduct = (category) => {
    let filteredList = [];

    switch (category) {
      case "long-grain rice":
        filteredList = data.filter((item) => item.id >= 1 && item.id <= 4);
        break;
      case "short-grain rice":
        filteredList = data.filter((item) => item.id >= 5 && item.id <= 8);
        break;
      case "traditional rice":
        filteredList = data.filter((item) => item.id >= 9 && item.id <= 14);
        break;
      case "medium-grain rice":
        filteredList = data.filter((item) => item.id >= 15 && item.id <= 20);
        break;
      default:
        filteredList = data;
        break;
    }

    setFilter(filteredList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
          All
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("long-grain rice")}>
          Long-Grain Rice
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("medium-grain rice")}>
          Medium-Grain Rice
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("short-grain rice")}>
          Short-Grain Rice
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("traditional rice")}>
          Traditional/Indigenous Rice
        </button>
      </div>

      <div className="row">
        {filter.length === 0 ? (
          <p className="text-center">No products found</p>
        ) : (
          filter.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img className="card-img-top p-3" src={product.image} alt="Product" height={300} />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                  <p className="card-text">{product.description.substring(0, 90)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
