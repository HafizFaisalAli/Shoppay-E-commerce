import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main id='main-layout'>
        <Container className='py-3'>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
