import React, { useState, useEffect } from "react";
import { Row, Col, Jumbotron, Button } from 'reactstrap'
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
               <Jumbotron  >
        <h1 className="display-3">Hacker News Salt Mine!</h1>
        <p className="lead">Your source the saltiest and most triggered troll comments from Hacker News!</p>
        <hr className="my-2" />
        <p>This sodium rich display you see below you is only a taste of the veritable salt lick we have inside! If you're new to the site click the button below to get salty! </p>
        <p>
        <p>If you're new to the site click the button below to get salty!</p>
          <Button color="primary" href="/signup" >Click to Sign Up!</Button>
        </p>
      </Jumbotron>

            <Row>
                <Col xs="1"></Col>
                <Col xs="3"><h4 className="text-white">User</h4></Col>
                <Col xs="1"></Col>
                <Col xs="5"><h4 className="text-white">Comment</h4></Col>
                <Col xs="1"></Col>
                <Col xs="1"><h4 className="text-white">Score</h4></Col>
            </Row>
            {usersList.map((user, index) => 
                    <WelcomeCard key={user.id} user={ user } place={ index } />    
                )
            }
        </Jumbotron>
    );
}

export default Welcome;