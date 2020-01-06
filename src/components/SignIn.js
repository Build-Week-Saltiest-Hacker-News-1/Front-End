import React from 'react';
import { Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
    
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
            url: 'https://salty-hacker-news.herokuapp.com/api/auth/login',
            data: values,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            // Do Login Here
            console.log(res)
          })
        },
      });

    return (
        <div>
            <Row>&nbsp;</Row>
            <Row>
                <Col xs='3'></Col>
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
                <Col xs='3'></Col>
            </Row>
        </div>
    )
}

export default SignIn