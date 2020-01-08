import React, { useState, useEffect } from "react";
import axios from "axios";
import  { Card, CardTitle, CardBody, CardSubtitle, CardText, Row, Col, Button} from "reactstrap";
import { useSelector } from "react-redux";
import UpdateForm from "./UpdateForm";
import UserInfo from "./UserInfo";


const Profile = () => {

    const [editing, setEdit] = useState(false);
  
    

  // Swap these two!
  //const userInfo = useSelector(state => state.userInfo);
  const userInfo = {
    user: "sample",
    name: "sample name",
    email: "sample@sample.com"
  };
  return (
    <>
      
      <Row>&nbsp;</Row>
      <Row>

        <Col xs="3"></Col>
        <Col xs="6">
        <Button onClick={() => {setEdit(!editing)}} style={{ width: "100%" }}>
             { editing ? 'Cancel' : 'Edit Profile' } 
            </Button>
        { editing ?  <UpdateForm setEdit={setEdit} editing={editing}  /> : <UserInfo /> }
        <br/>
        </Col>
        <Col xs="3"></Col>
      </Row>
    </>
  );
};

export default Profile;
