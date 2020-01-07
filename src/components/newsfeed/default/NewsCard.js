import React from "react";
import { Row, Col, Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

const NewsCard = (props) => {
    const { user } = props;
    return (
        <div>
            <div style={{backgroundColor: "#ccc", paddingTop: "1rem", paddingBottom: "1rem", borderRadius: "1rem"}}>
                <Row>    {/*Update with correct props based on data passed from React II*/}
                    <Col xs="1"></Col>
                    <Col xs="3"><h4 className="text-primary">{user.name}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="4"><h4 className="text-primary">{user.homeworld}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="1"><h4 className="text-primary">{user.height}</h4></Col>
                    <Col xs="1"><FontAwesomeIcon icon={ faStar } color="gold" size="2x" /></Col>
                </Row>
            </div>
            <Row>&nbsp;</Row>
        </div>
    )
};

export default NewsCard;