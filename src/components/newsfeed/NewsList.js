import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import UserCard from "./contentcard/UserCard";
const NewsList = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get('https://swapi.co/api/people') //replace with API for ranked by saltiness
            .then(res => {
                console.log(res)
                setNews(res.data.results)
            })
    }, [])
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
            {news.map(user => 
                    <UserCard user={ user } />    
                )
            }
        </>
    );
}
export default NewsList;