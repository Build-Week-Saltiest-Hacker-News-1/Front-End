import React from "react";
import { Card, CardTitle, CardBody, CardText, Label } from "reactstrap";

const UserInfo = (props) => { 
  
  
  return (
    <>
       <Card>
       <CardTitle style={{  margin: "auto", marginTop: "1rem",  fontWeight: "bold", fontSize: "2rem" }}>
            {props.userInfo.user}
          </CardTitle>
          <hr/>
            <CardBody>
              <Label style={{ marginTop: "1.8rem", fontWeight: "bold", fontSize: "1.5rem" }}>Name</Label>
              <CardText style={{  fontSize: "1.3rem" }} >{props.userInfo.name}</CardText>
              <br />
              <Label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Username</Label>
              <CardText style={{  fontSize: "1.3rem" }} >{props.userInfo.user}</CardText>
              <br/>
              <Label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Email</Label>
              <CardText  style={{  fontSize: "1.3rem", marginBottom: '1.4rem' }}  >{props.userInfo.email}</CardText>
              <br />
              {/* <Label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Password</Label>
              <CardText  style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}  >{}</CardText>
              <br /> */}
            </CardBody>
          </Card>
    </>
  );
};

export default UserInfo;
