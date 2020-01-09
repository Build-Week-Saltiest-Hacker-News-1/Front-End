import React, { useState, useEffect } from "react";
import { Row, Col, Jumbotron } from 'reactstrap'
import axios from 'axios'

import WelcomeCard from "./WelcomeCard";

const Welcome = () => {

    const [usersList, updateUsers] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(res => {
                console.log(res)
                updateUsers(res.data.results)
            })
    }, [])

    return (
        <Jumbotron className="bg-info">
            <Row>
                <Col xs="1"></Col>
                <Col xs="3"><h4 className="text-primary">User</h4></Col>
                <Col xs="1"></Col>
                <Col xs="5"><h4 className="text-primary">Comment</h4></Col>
                <Col xs="1"></Col>
                <Col xs="1"><h4 className="text-primary">Score</h4></Col>
            </Row>
            {usersList.map((user, index) => 
                    <WelcomeCard user={ user } place={ index } />    
                )
            }
        </Jumbotron>
    );
}

export default Welcome;