import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import { save } from "../../dummy"
import CommentCard from "./contentcard/CommentCard"
const CommentList = () => {

    const saved = useSelector(state => state.saved)
    const [news, setNews] = useState(save)


    //react 1 MVP
    useEffect(() => {
        axios.get('https://swapi.co/api/people') //replace with API for ranked by saltiness
            .then(res => {
                console.log(res.data.result)
                setNews(res.data.results)
            })
    }, [])

    const finalcomment = save.map(el => { return { ...el, isSaved: JSON.stringify(saved).includes(JSON.stringify(el))}})
    console.log(finalcomment)

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
            {finalcomment.map((user, index) => 
                    <CommentCard user={ user } id={ index } />    
                )
            }
        </>
    );
}
export default CommentList;