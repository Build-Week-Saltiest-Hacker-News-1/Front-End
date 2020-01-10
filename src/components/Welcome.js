import React, { useState, useEffect } from "react";
import { Row, Col, Jumbotron } from 'reactstrap'
import axios from 'axios'

import WelcomeCard from "./WelcomeCard";

const Welcome = () => {

    const [usersList, updateUsers] = useState([])

    useEffect(() => {
        axios
        .get("https://salty-hacker-news.herokuapp.com/api/feed")
        .then(res => {
            
            updateUsers(res.data.sort((a,b) => (a.saltyRank < b.saltyRank) ? 1: -1))
        })
        .catch(err => {
            console.log(err)
        })

        }, [])

    return (
        <Jumbotron className="myblue">
            <Row>
                <Col xs="1"></Col>
                <Col xs="3"><h4 className="text-white">User</h4></Col>
                <Col xs="1"></Col>
                <Col xs="5"><h4 className="text-white">Comment</h4></Col>
                <Col xs="1"></Col>
                <Col xs="1"><h4 className="text-white">Score</h4></Col>
            </Row>
            {usersList.map((user, index) => 
                    <WelcomeCard user={ user } place={ index } />    
                )
            }
        </Jumbotron>
    );
}

export default Welcome;