import React from "react";
import { Card, CardTitle, CardBody, CardText, Label } from "reactstrap";

const UserInfo = () => {
  
  const userInfo = {
    user: "Sample Profile ",
    name: "sample name",
    email: "sample@sample.com",
    password: "12345"
  };
  return (
    <>
       <Card>
       <CardTitle style={{ margin: "auto", marginTop: "1rem",  fontWeight: "bold", fontSize: "2rem" }}>
            {userInfo.user}
          </CardTitle>
          <hr/>
            <CardBody>
              <Label style={{ marginTop: "0.65rem", fontWeight: "bold", fontSize: "1.5rem" }}>Name</Label>
              <CardText style={{  fontSize: "1.2rem" }} >{userInfo.name}</CardText>
              <br />
              <Label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Username</Label>
              <CardText style={{  fontSize: "1.2rem" }} >{userInfo.user}</CardText>
              <br/>
              <Label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Email</Label>
              <CardText  style={{  fontSize: "1.2rem" }}  >{userInfo.email}</CardText>
              <br />
              <Label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Password</Label>
              <CardText  style={{  fontSize: "1.2rem" }}  >{userInfo.password}</CardText>
              <br />
            </CardBody>
          </Card>
    </>
  );
};

export default UserInfo;
