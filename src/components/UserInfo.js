import React, { useState } from "react";
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Label, Input } from "reactstrap";
import { useSelector } from "react-redux";


const UserInfo = () => {
  // Swap these two!
  const [editing, setEdit] = useState(false);
  const toggle = () => setEdit(!editing);

  //const userInfo = useSelector(state => state.userInfo);
  const userInfo = {
    user: "Sample Profile ",
    name: "sample name",
    email: "sample@sample.com",
    password: "12345"
  };
  return (
    <>
       <Card>
       <CardTitle style={{ margin: "auto", marginTop: "1rem", fontWeight: "bold" }}>
            {userInfo.user}
          </CardTitle>
          <hr/>
            <CardBody>
           
              <Label style={{ fontWeight: "bold" }}>Name</Label>
              <CardSubtitle>{userInfo.name}</CardSubtitle>
              <br />
              <Label style={{ fontWeight: "bold" }}>Email</Label>
              <CardText>{userInfo.email}</CardText>
              <Label style={{ fontWeight: "bold" }}>Password</Label>
              <CardText>{userInfo.password}</CardText>
            </CardBody>
          </Card>
    </>
  );
};

export default UserInfo;
