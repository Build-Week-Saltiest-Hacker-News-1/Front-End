import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardBody, CardHeader, CardSubtitle, CardText, Row, Col } from 'reactstrap';
import { useSelector } from "react-redux";
const Profile = () => {
    // Swap these two!
    //const userInfo = useSelector(state => state.counter.userInfo);
    const userInfo = { user: 'sample', name: 'sample name', email: 'sample@sample.com'};
    return (
        <>
            <Row>&nbsp;</Row>
            <Row>
                <Col xs='3'></Col>
                <Col xs='6'>
                    <Card>
                        <CardTitle>{ userInfo.user }</CardTitle>
                        <CardBody>
                            <CardSubtitle>{ userInfo.name }</CardSubtitle>
                            <CardText>{ userInfo.email }</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs='3'></Col>
            </Row>
        </>
    );
}

export default Profile;