import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Card.Header>
        <Card.Title className='text-center'>Register</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
        Already have an account? <Link to='/auth/login'>Login Now!</Link>
      </Card.Footer>
    </>
  );
};

export default Register;
