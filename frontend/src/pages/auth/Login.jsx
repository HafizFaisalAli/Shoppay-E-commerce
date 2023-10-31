import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "../../components/TextField";
import * as yup from "yup";
import apiclient from "../../services/api-service";
import AlertMessage from "../../components/AlertMessage";
import { addUserInfo } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be atleast 6 charactor long")
    .max(20, "Password should be atmost 20 charactor long")
    .matches(/[a-z]/, "Password should contain atleast one lowercase")
    .matches(/[A-Z]/, "Password should contain atleast one uppercase")
    .matches(/[0-9]/, "Password should contain atleast one numaric"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await apiclient.post("/auth/login", values);
      dispatch(addUserInfo(data));
      setRes(data);
    } catch (err) {
      const message = err.response.data
        ? err.response.data.message
        : err.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card.Header>
        <Card.Title className='text-center'>Login</Card.Title>
      </Card.Header>
      <Card.Body>
        {error && <AlertMessage>{error}</AlertMessage>}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <TextField name='email' label='Email' />
            <TextField name='password' type='password' label='Password' />
            <Button type='submit' variant='primary'>
              {loading ? "Loading..." : "Login"}
            </Button>
          </Form>
        </Formik>
      </Card.Body>
      <Card.Footer>
        Don't have an account? <Link to='/auth/register'>Register Now!</Link>
      </Card.Footer>
    </>
  );
};

export default Login;
