import React from 'react';
import { useSelector } from "react-redux"
import { Row, Col } from 'reactstrap'


import SavedCard from "./contentcard/SavedCard"

const SavedList = () => {
   
    const saved = useSelector(state => state.saved)
    console.log(saved);
    
    return(
        <>
        <Row>
            <Col xs="1"></Col>
            <Col xs="3"><h4 className="text-white">User</h4></Col>
            <Col xs="1"></Col>
            <Col xs="3"><h4 className="text-white">Comment</h4></Col>
            <Col xs="1"></Col>
            <Col xs="1"><h4 className="text-white">Score</h4></Col>
            <Col xs="1"><h4 className="text-white">Save</h4></Col>
            <Col xs="1"><h4 className="text-white">Tweet</h4></Col>
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