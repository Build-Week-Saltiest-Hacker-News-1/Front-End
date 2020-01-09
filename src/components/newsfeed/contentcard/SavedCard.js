import React, { useState } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAward, faMedal, faBiohazard} from '@fortawesome/free-solid-svg-icons'

const SavedCard = (props) => {

    //id is supposed to be rank, but we'll just go with id for now
    const { user, id } = props;
    // const [ toSave, setToSave ] = useState({
    //     id: user.id,
    //     user_id: user.user_id,
    //     saltyUsername: user.saltyUsername,
    //     saltyComment: user.saltyComment,
    //     saltyRank: user.saltyRank,
    //     isSaved: user.isSaved
    // })
    // const [ save, setSave ] = useState(user.isSaved)

    // const saveClick = e => {
    //     e.preventDefault()
    //     axiosWithAuth().post(`api/comments`, {
    //         id: user.id,
    //         user_id: user.user_id,
    //         saltyUsername: user.saltyUsername,
    //         saltyComment: user.saltyComment,
    //         saltyRank: user.saltyRank})
    // }

    // const unSaveClick = e => {
    //     e.preventDefault()
    // }
   

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
                        <Col xs="1"><FontAwesomeIcon icon={ faStar } color="gold" size="2x" /></Col> :
                        <Col xs="1"><FontAwesomeIcon icon={ faStar } color="gray" size="2x" /></Col>
                    }
                    
                </Row>
            </div>
            <Row>&nbsp;</Row>
        </div>
    );
}

export default SavedCard;