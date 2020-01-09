import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import UserCard from "./contentcard/UserCard";

const NewsList = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        /*
        axios.get('https://swapi.co/api/people') //replace with API for ranked by saltiness
            .then(res => {
                console.log(res)
                setNews(res.data.results)
            })
            */
        axiosWithAuth()
        .get('/url')
        .then(res => {
            setNews(res.data)
        })
        .catch(err => {
            console.log(err)
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
            {news.map(user => 
                    <UserCard user={ user } />    
                )
            }
        </>
    );
}

export default NewsList;