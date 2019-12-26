import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Auth = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
  }
  
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
  })

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
  })

  

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
              <h4>&nbsp;Log In:</h4>
            </Col>
          </Row>
          <Row>
            <Col xs='6'>
              <Card>

              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col xs='6'></Col>
            <Col xs='6'>
              <h4>Sign Up:</h4>
            </Col>
          </Row>
          <Row>
            <Col xs='6'></Col>
            <Col xs='6'>
              <Card>

              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Auth;