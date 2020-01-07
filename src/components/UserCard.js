import React from "react";
import { Row, Col, Table } from "reactstrap";
const UserCard = (props) => {
    const { user } = props;
    return(
        <div>
            <div className="bg-secondary">
                <Row>    
                    <Col xs="1"></Col>
                    <Col xs="3"><h4 className="text-primary">{user.name}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="4"><h4 className="text-primary">{user.homeworld}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="1"><h4 className="text-primary">{user.height}</h4></Col>
                    <Col xs="1"><h4 className="text-primary">Save</h4></Col>
                </Row>
            </div>
            <Row>&nbsp;</Row>
        </div>
    );
}

export default UserCard;