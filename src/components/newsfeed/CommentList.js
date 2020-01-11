import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import CommentCard from "./contentcard/CommentCard"
const CommentList = () => {

    const usersList = useSelector(state => state.finaldata2)
    console.log(usersList)

    //react 1 MVP
    // useEffect(() => {
    //     axios.get('https://swapi.co/api/people') //replace with API for ranked by saltiness
    //         .then(res => {
    //             console.log(res.data.result)
    //             setNews(res.data.results)
    //         })
    // }, [])

  
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
                    <CommentCard user={ user } id={ index } />    
                )
            }
        </>
    );
}

export default CommentList;