import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveComment, deleteSaved } from "./../../../actions"

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAward, faMedal, faBiohazard} from '@fortawesome/free-solid-svg-icons'

const UserCard = (props) => {

    const dispatch = useDispatch()
    const { user, id } = props;
    const userId = localStorage.getItem("userid")

    const [ value ] = useState({
        user_id: parseInt(userId),
        saltyComment: user.saltyComment,
        saltyRank: user.saltyRank,
        saltyUsername: user.saltyUsername
    })

    const handleSave = e => {
        e.preventDefault()
        dispatch(saveComment(value, userId))
    }

    const handleUnSave = e => {
        e.preventDefault()
        dispatch(deleteSaved(id, userId))
    }


    const idDisplay = () => {
        if (id < 3) {
            switch(id) {
                case 0:
                    return (
                        <div style={{textAlign: "center"}}>
                            <FontAwesomeIcon icon={ faBiohazard } color="yellowGreen" size="2x" />
                        </div>
                    );
                case 1:
                    return (
                        <div style={{textAlign: "center"}}>
                            <FontAwesomeIcon icon={ faMedal } color="red" size="2x" />
                        </div>                    
                    );
                case 2:
                    return (
                        <div style={{textAlign: "center"}}>
                            <FontAwesomeIcon icon={ faAward } color="yellow" size="2x" />
                        </div>                    
                    );
                default:
                return (
                    <div>Oops.</div>
                )
            }
        }
        else {
            return(
                // eslint-disable-next-line jsx-a11y/heading-has-content
                <div style={{textAlign: "center"}}>
                    <h4>{ id + 1 }</h4>
                </div>
            );
        }
    };
    
    return(
        <div>
            <div style={{backgroundColor: "#ccc", paddingTop: "1rem", paddingBottom: "1rem", borderRadius: "1rem"}}>
                <Row>    
                    <Col xs="1">{ idDisplay() }</Col>
                    <Col xs="3"><h4 className="text-primary">{user.saltyUsername}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="4"><h4 className="text-primary">{user.saltyComment}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="1"><h4 className="text-primary">{user.saltyRank}</h4></Col>
                    {
                        user.isSaved ?
                        <Col xs="1"><FontAwesomeIcon icon={ faStar } onClick={handleUnSave} color="gold" size="2x" /></Col> :
                        <Col xs="1"><FontAwesomeIcon icon={ faStar } onClick={handleSave} color="gray" size="2x" /></Col>
                    }
                    
                </Row>
            </div>
            <Row>&nbsp;</Row>
        </div>
    );
}

export default UserCard;