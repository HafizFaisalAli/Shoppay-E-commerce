import React, { useState } from "react";
import { useEffect } from "react";
import apiClient from "../services/api-service";
import AlertMessage from "../components/AlertMessage";
import Loader from "../components/Loader";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    apiClient
      .get("/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        const message = err.response.data
          ? err.response.data.message
          : err.message;
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <AlertMessage>
        <h2>Alert!</h2>
        <p>{error}</p>
      </AlertMessage>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Row>
      {products.map((product) => (
        <Col xl={3} lg={4} sm={6} xs={12} key={product._id} className='mb-3'>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
