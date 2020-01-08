import React, { useState } from "react";
import { Card, CardTitle, CardBody, Button, Label, Input } from "reactstrap";

const UpdateForm = (props) => {
  const [editing, setEdit] = useState(false);
 
  const userInfo = {
    user: "Sample Profile ",
    name: "sample name",
    email: "sample@sample.com",
    password: "12345"
  };
  return (
    <>
        
        <Card>
          <CardTitle style={{ margin: "auto", fontWeight: "bold" }}>
            {userInfo.user}
          </CardTitle>
          <hr/>
          <CardBody>
            <Label style={{ fontWeight: "bold" }}>Name</Label>
            <Input placeholder={userInfo.name} ></Input>
            <br />
            <Label style={{ fontWeight: "bold" }}>Email</Label>
            <Input placeholder={userInfo.email}></Input>
            <br />
            <Label style={{ fontWeight: "bold" }}>Password</Label>
            <Input placeholder={userInfo.password}></Input>
            <br />
            <Button onClick={() => {props.setEdit(!editing)}} style={{ width: "50%" }}>
              Submit Edit
            </Button>
            <Button onClick={() => {props.setEdit(!editing)}} style={{ width: "50%" }}>
              Reset Default
            </Button>
          </CardBody>
        </Card>
     
  </>
  );
};

export default UpdateForm;
