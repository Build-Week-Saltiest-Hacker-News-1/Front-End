import React from "react";
import {
  Card,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { postLogin } from "./../../actions";
import * as Yup from "yup";

const SignIn = props => {
  const dispatch = useDispatch();

  const handleSubmitLogin = e => {
    e.preventDefault();
    const values = signIn.values;
    dispatch(postLogin({ props, values }));
  };

  const signIn = useFormik({
    initialValues: {
      user: "",
      password: ""
    },
    validationSchema: Yup.object({
      user: Yup.string().required("Required"),
      password: Yup.string().required("Required")
    })
  });

  return (
    <div>
      <Row>&nbsp;</Row>
      <Row>
        <Col xs="3"></Col>
        <Col xs="6">
          <Card>
            <CardTitle style={{ margin: 'auto', fontWeight: 'bold', marginTop: '1rem', fontSize: '2rem' }}  >Sign In</CardTitle>
            <Col xs="12">
              <Form onSubmit={handleSubmitLogin}>
                <FormGroup>
                  <Label for="user" style={{fontSize: '1.1rem'}}>Username</Label>
                  <Col xs="12">
                    <Input
                      required
                      id="user"
                      name="user"
                      type="textname"
                      placeholder="Enter Username"
                      onChange={signIn.handleChange}
                      onBlur={signIn.handleBlur}
                      value={signIn.values.user}
                    />
                    {signIn.touched.user && signIn.errors.user ? (
                      <div>{signIn.errors.user}</div>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="password" style={{fontSize: '1.1rem'}} >Password</Label>
                  <Col xs="12">
                    <Input
                      required
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      onChange={signIn.handleChange}
                      onBlur={signIn.handleBlur}
                      value={signIn.values.password}
                    />
                    {signIn.touched.password && signIn.errors.password ? (
                      <div>{signIn.errors.password}</div>
                    ) : null}
                  </Col>
                </FormGroup>
                <Col xs="12">
                  <Button type="submit">Submit</Button>
                </Col>
                <br />
              </Form>
            </Col>
          </Card>
        </Col>
        <Col xs="3"></Col>
      </Row>
    </div>
  );
};

export default SignIn;
