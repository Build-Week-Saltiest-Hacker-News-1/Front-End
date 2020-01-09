import React from 'react';
import { Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';

import { useDispatch } from 'react-redux'
import { postRegister } from './../../actions'

import * as Yup from 'yup';

const SignUp = (props) => {

  const dispatch = useDispatch()

  const handleSignUp = e => {
    e.preventDefault()
    const validValue = {
      name: signUp.values.name,
      user: signUp.values.user,
      email: signUp.values.email,
      password: signUp.values.password
    } 
    const values = { name: signUp.values.name,
      user: signUp.values.user }
    dispatch(postRegister(validValue))
  }

  const signUp = useFormik({
    initialValues: {
      name: 'Your Full Name',
      user: 'Username',
      email: 'Your Email Address',
      password: 'Your Password'
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .max(25, 'must be 25 characters or less')
      .required('Required'),
      user: Yup.string()
      .max(20, 'must be 20 characters or less')
      .required('Required'),
      email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
      password: Yup.string()
      .min(8, 'must be 8 characters or more')
      .required('Required'),
      confirm: Yup.string().when("pass", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
          [Yup.ref("pass")],
          "Both passwords need to be the same"
          )
      }),  
      accepted: Yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms and conditions.')
    })
  });

  return (
      <div>
          <Row>&nbsp;</Row>
          <Row>
            <Col xs='3'></Col>
            <Col xs='6'>
              <Card>
                <CardTitle>Sign Up:</CardTitle>
                <Col xs='12'>
                  <Form onSubmit={handleSignUp}>
                    <FormGroup>
                      <Label for='name'>Name</Label>
                      <Col xs='12'>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.name}
                        />
                        {signUp.touched.name && signUp.errors.name ? <div>{signUp.errors.name}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='user'>Username</Label>
                      <Col xs='12'>
                        <Input
                            id='user'
                            name='user'
                            type='text'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.user}
                        />
                        {signUp.touched.user && signUp.errors.user ? <div>{signUp.errors.user}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='email'>Email</Label>
                      <Col xs='12'>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.email}
                        />
                        {signUp.touched.email && signUp.errors.email ? <div>{signUp.errors.email}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='password'>Password</Label>
                      <Col xs='12'>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.password}
                        />
                        {signUp.touched.password && signUp.errors.password ? <div>{signUp.errors.password}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='confirm'>Confirm Password</Label>
                      <Col xs='12'>
                        <Input
                            id='confirm'
                            name='confirm'
                            type='password'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.confirm}
                        />
                        {signUp.touched.confirm && signUp.errors.confirm ? <div>{signUp.errors.confirm}</div> : null}
                      </Col>
                    </FormGroup>
                    <Row>
                      <Col xs='12'>
                        <FormGroup check>
                          <Label check>
                            <Input 
                            id='accepted'
                            name='accepted'
                            type='checkbox'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.accepted}
                            />{' '}
                            Agree to terms of Service?
                          </Label>
                        </FormGroup>
                        <br />
                      </Col>
                    </Row>
                    <Col xs='12'>
                      <Button type='submit'>Submit</Button>
                    </Col>
                    <br />
                  </Form>
                </Col>
              </Card>
            </Col>
            <Col xs='3'></Col>
          </Row>
      </div>
    )
  }

  export default SignUp