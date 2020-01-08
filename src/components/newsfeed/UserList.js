import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from "./contentcard/UserCard";
import { getAllFeed } from "../../actions";

const UserList = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllFeed())
    }, [])

    const usersList = useSelector(state => state.feed)

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
            {usersList.map((user, index) => 
                    <UserCard user={ user } place={ index } />    
                )
            }
        </>
    );
}

export default UserList;