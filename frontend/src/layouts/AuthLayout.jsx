import { Card, Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div id='auth-layout' className='d-flex align-items-center bg-info'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={6}>
            <Card>
              <Outlet />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthLayout;
