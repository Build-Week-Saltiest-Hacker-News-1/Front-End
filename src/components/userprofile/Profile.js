import React, { useState, useEffect } from "react";
import  {  Row, Col, Button} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import UpdateForm from "./UpdateForm";
import UserInfo from "./UserInfo";
import { getUserData } from "../../actions/index";


const Profile = () => {
  const id = localStorage.getItem('userid')
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUserData(id));
  },[])
  
  const [editing, setEdit] = useState(false);

 
  const userInfo = useSelector(state => state.userInfo);
  console.log(userInfo)

  return (
    <>
      <Row>&nbsp;</Row>
      <Row>
        <Col xs="3"></Col>
        <Col xs="6">
        <Button onClick={() => {setEdit(!editing)}} style={{ width: "100%" }}>
             { editing ? 'Cancel' : 'Edit Profile' } 
            </Button>
        { editing ?  <UpdateForm userInfo={userInfo} /> :  <UserInfo userInfo={userInfo} /> }
        <br/>
        </Col>
        <Col xs="3"></Col>
      </Row>
    </>
  );
};

export default Profile;
