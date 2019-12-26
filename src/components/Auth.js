import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
  };
  
  const signUp = useFormik({
    initialValues: {
      name: 'Your Full Name',
      user: 'Username',
      email: 'Your Email Address',
      password: 'Your Password',
      confirm: 'Retype Password',
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
      pass: Yup.string()
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
    }),
    onSignUp: values => {
      axios({
        method: 'post',
        url: 'api/url/here',
        data: values,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        // Do Action After Sign up, do we automatically log in?
      })
    }
  });

  const signIn = useFormik({
    initialValues: {
      username: 'Username',
      password: 'Password'
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .required('Required'),
      password: Yup.string()
      .required('Required')
    }),
    onSignIn: values => {
      axios({
        method: 'post',
        url: 'api/url/here',
        data: values,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        // Do Login Here
      })
    },
  });

  return (
    <div>
      <Nav tabs>
        <NavItem style={{width: '50%'}}>
            <NavLink 
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            >Log In</NavLink>
        </NavItem>
        <NavItem style={{width: '50%'}}>
            <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            >Sign Up</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col xs='6'>
              <Card>
                <CardTitle>Sign In:</CardTitle>
                <Col xs='12'>
                  <Form onSubmit={signIn.onSignIn}>
                    <FormGroup>
                      <Label for='username'>Username</Label>
                      <Col xs='12'>
                        <Input
                            id='username'
                            name='username'
                            type='textname'
                            onChange={signIn.handleChange}
                            onBlur={signIn.handleBlur}
                            value={signIn.values.username}
                        />
                        {signIn.touched.username && signIn.errors.username ? <div>{signIn.errors.username}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='password'>Pasword</Label>
                      <Col xs='12'>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            onChange={signIn.handleChange}
                            onBlur={signIn.handleBlur}
                            value={signIn.values.password}
                        />
                        {signIn.touched.password && signIn.errors.password ? <div>{signIn.errors.password}</div> : null}
                      </Col>
                    </FormGroup>
                    <Col xs='12'>
                      <Button type='submit'>Submit</Button>
                    </Col>
                    <br />
                  </Form>
                </Col>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col xs='6'></Col>
            <Col xs='6'>
              <Card>
                <CardTitle>Sign Up:</CardTitle>
                <Col xs='12'>
                  <Form onSubmit={signUp.onSignUp}>
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
                            type='text'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.email}
                        />
                        {signUp.touched.email && signUp.errors.email ? <div>{signUp.errors.email}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='pass'>Password</Label>
                      <Col xs='12'>
                        <Input
                            id='pass'
                            name='pass'
                            type='password'
                            onChange={signIn.handleChange}
                            onBlur={signIn.handleBlur}
                            value={signIn.values.pass}
                        />
                        {signIn.touched.pass && signIn.errors.pass ? <div>{signIn.errors.pass}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='confirm'>Confirm Password</Label>
                      <Col xs='12'>
                        <Input
                            id='confirm'
                            name='confirm'
                            type='password'
                            onChange={signIn.handleChange}
                            onBlur={signIn.handleBlur}
                            value={signIn.values.confirm}
                        />
                        {signIn.touched.confirm && signIn.errors.confirm ? <div>{signIn.errors.confirm}</div> : null}
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
                            onChange={signIn.handleChange}
                            onBlur={signIn.handleBlur}
                            value={signIn.values.accepted}
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
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Auth;