import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import UserCard from "./contentcard/UserCard";
import { save } from "../../dummy"
const NewsList = () => {
    // const [news, setNews] = useState(save)
    // useEffect(() => {
    //     axios.get('https://swapi.co/api/people') //replace with API for ranked by saltiness
    //         .then(res => {
    //             console.log(res)
    //             setNews(res.data.results)
    //         })
    // }, [])
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
            {save.map((user, index) => 
                    <UserCard user={ user } id={ index } />    
                )
            }
        </>
    );
}
export default NewsList;