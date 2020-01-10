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

    const [ save, setSave ] = useState({isSaved: false})

    
    const handleSave = e => {
        e.preventDefault()
        dispatch(saveComment(value, userId))
        setSave({ ...save, isSaved: true})
    }

    const handleUnSave = e => {
        e.preventDefault()
        dispatch(deleteSaved(id, userId))
        setSave({ ...save, isSaved: false})
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
            <Row>&nbsp;</Row>
            <div style={{width: '100%', backgroundColor: '#e9ecef', paddingTop: "1rem", paddingBottom: "1rem", borderRadius: "1rem"}}>
                <Row  >    
                    <Col xs="1">{ idDisplay() }</Col>
                    <Col xs="1"><h5 className="myblue-text">{user.saltyUsername}</h5></Col>
                    <Col xs="1"></Col>
                    <Col xs="7"><p  className="text-primary">{user.saltyComment}</p></Col>
                    {/* <Col xs="1"></Col> */}
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