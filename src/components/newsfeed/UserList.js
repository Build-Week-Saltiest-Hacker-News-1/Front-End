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
                <Col xs="2"><h2 className="text-white">User</h2></Col>
                {/* <Col xs="1"></Col> */}
                <Col xs="3"><h3 className="text-white">Comment</h3></Col>
                <Col xs="3"></Col>
                <Col xs="1"></Col>
                <Col xs="1"><h3 className="text-white">Score</h3></Col>
                <Col xs="1"><h3 className="text-white">Save</h3></Col>
            </Row>
            {usersList.map((user, index) => 
                    <UserCard user={ user } id={ index } />    
                )
            }
        </>
    );
}

export default UserList;