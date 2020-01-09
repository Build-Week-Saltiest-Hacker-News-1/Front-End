import React from "react";
import { useDispatch } from "react-redux"
import { deleteSaved, getDashboard } from "./../../../actions"

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SavedCard = (props) => {

    const dispatch = useDispatch()
    const { user } = props;
    const comment = `Look at this comment from Salty Hacker News: "${user.saltyComment}"`;
    const tweetURL = `http://twitter.com/intent/tweet?text=${comment}`;

    const handleDelete = e => {
        e.preventDefault()
        dispatch(deleteSaved(user.id, user.user_id))
    }

    
    return(
        <div>
            <div style={{backgroundColor: "#ccc", paddingTop: "1rem", paddingBottom: "1rem", borderRadius: "1rem"}}>
                <Row>
                    <Col xs="1"></Col>
                    <Col xs="3"><h4 className="text-primary">{user.saltyUsername}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="3"><h4 className="text-primary">{user.saltyComment}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="1"><h4 className="text-primary">{user.saltyRank}</h4></Col>
                    <Col xs="1"><FontAwesomeIcon icon={ faStar } onClick={handleDelete} color="gold" size="2x" /></Col>
                    <Col xs="1"><a class="twitter-share-button" href={tweetURL}>Tweet</a></Col>
                </Row>
            </div>
            <Row>&nbsp;</Row>
        </div>
    );
}

export default SavedCard;