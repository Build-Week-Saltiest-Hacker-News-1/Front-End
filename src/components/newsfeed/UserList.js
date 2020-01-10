import React from "react";
import { Row, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from "./contentcard/UserCard";

const UserList = () => {

    const usersList = useSelector(state => state.finaldata)
    console.log(usersList)

    return (
        <>
            <Row>
                <Col xs="1"></Col>
                <Col xs="3"><h4 className="text-white">User</h4></Col>
                <Col xs="1"></Col>
                <Col xs="4"><h4 className="text-white">Comment</h4></Col>
                <Col xs="1"></Col>
                <Col xs="1"><h4 className="text-white">Score</h4></Col>
                <Col xs="1"><h4 className="text-white">Save</h4></Col>
            </Row>
            {usersList.map((user, index) => 
                    <UserCard user={ user } id={ index } />    
                )
            }
        </>
    );
}

export default UserList;