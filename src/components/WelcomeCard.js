import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faMedal, faBiohazard} from '@fortawesome/free-solid-svg-icons'
const WelcomeCard = (props) => {
    const { user, place } = props;

    const placeDisplay = () => {
        if (place < 3) {
            switch(place) {
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
                    <h4>{ place + 1 }</h4>
                </div>
            );
        }
    };
    
    return(
        <div>
            <div style={{backgroundColor: "#ccc", paddingTop: "1rem", paddingBottom: "1rem", borderRadius: "1rem"}}>
                <Row>    
                    <Col xs="1">{ placeDisplay() }</Col>
                    <Col xs="3"><h4 className="text-primary">{user.name}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="5"><h4 className="text-primary">{user.homeworld}</h4></Col>
                    <Col xs="1"></Col>
                    <Col xs="1"><h4 className="text-primary">{user.height}</h4></Col>
                </Row>
            </div>
            <Row>&nbsp;</Row>
        </div>
    );
}

export default WelcomeCard;