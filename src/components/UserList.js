import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap'
import axios from 'axios'

import UserCard from "./UserCard";

const UserList = () => {
    const [usersList, updateUsers] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(res => {
                console.log(res)
                updateUsers(res.data.results)
            })
    }, [])

    return (
        <>
            <Row>
                <Col xs="1"></Col>
                <Col xs="3"><h4 className="text-primary">User</h4></Col>
                <Col xs="1"></Col>
                <Col xs="4"><h4 className="text-primary">Comment</h4></Col>
                <Col xs="1"></Col>
                <Col xs="1"><h4 className="text-primary">Score</h4></Col>
                <Col xs="1"><h4 className="text-primary">Save</h4></Col>
            </Row>
            {usersList.map(user => 
                    <UserCard user={ user } />    
                )
            }
        </>
    );
}

export default UserList;