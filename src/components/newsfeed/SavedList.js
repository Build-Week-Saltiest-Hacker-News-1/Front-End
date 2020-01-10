import React from 'react';
import {useDispatch, useSelector } from "react-redux"
import { Row, Col } from 'reactstrap'

import SavedCard from "./contentcard/SavedCard"

const SavedList = () => {
   
    const saved = useSelector(state => state.saved)
    console.log(saved);
    
    return(
        <>
        <Row>
            <Col xs="1"></Col>
            <Col xs="1"><h2 className="text-white">User</h2></Col>
            <Col xs="1"></Col>
            <Col xs="4"><h3 className="text-white">Comment</h3></Col>
            <Col xs="2"></Col>
            <Col xs="1"><h3 className="text-white">Score</h3></Col>
            {/* <Col xs="1"></Col> */}
            <Col xs="1"><h3 className="text-white">Save</h3></Col>
            <Col style={{width: '150%'}} xs="1"><h3 className="text-white">Tweet</h3></Col>
        </Row>
        { saved.map(user => 
                <SavedCard key={user.id} user={ user } />    
            )
        }
    </>
    )
}

export default SavedList;


//Functionally the same as the NewsList component, but will only be fed items from the user's saved list.

// <div className='feed-container'>
// {saved.map(user => (
//     <SavedCard key={user.id} user={user} />
// ))}
// </div>