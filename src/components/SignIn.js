import React from 'react';
import { Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';

import { useDispatch} from 'react-redux'
import { postLogin } from './../actions'
import * as Yup from 'yup';

const SignIn = () => {

    const dispatch = useDispatch()

    const handleSubmitLogin = e => {
        e.preventDefault()
        dispatch(postLogin(signIn.values))
    }
    
    const signIn = useFormik({
        initialValues: {
          user: 'Username',
          password: 'Password'
        },
        validationSchema: Yup.object({
          user: Yup.string()
          .required('Required'),
          password: Yup.string()
          .required('Required')
        }),

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
                            <Form onSubmit={handleSubmitLogin}>
                                <FormGroup>
                                    <Label for='user'>Username</Label>
                                     <Col xs='12'>
                                        <Input
                                            id='user'
                                            name='user'
                                            type='textname'
                                            onChange={signIn.handleChange}
                                            onBlur={signIn.handleBlur}
                                            value={signIn.values.user}
                                        />
                                        {signIn.touched.user && signIn.errors.user ? <div>{signIn.errors.user}</div> : null}
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