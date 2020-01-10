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

    const saltyScore = Math.round(user.saltyRank * 100)
    
    return(
        <div>
            <div style={{backgroundColor: "#ccc", paddingTop: "1rem", paddingBottom: "1rem", borderRadius: "1rem"}}>
                <Row>
                    <Col xs="1"></Col>
                    <Col xs="3"><h5 className="myorange-text">{user.saltyUsername}</h5></Col>
                    <Col xs="1"></Col>
                    <Col xs="3"><h5 className="text-primary">{user.saltyComment}</h5></Col>
                    <Col xs="1"></Col>
                    <Col xs="1"><h5 className="text-primary">{saltyScore}</h5></Col>
                    <Col xs="1"><FontAwesomeIcon icon={ faStar } onClick={handleDelete} color="gold" size="2x" /></Col>
                    <Col xs="1"><a className="twitter-share-button" href={tweetURL}>Tweet!</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></Col>
                </Row>
            </div>
            <Row>&nbsp;</Row>
        </div>
    );
}

export default SavedCard;

//<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>