import React, { useState } from "react";
import { Card, CardTitle, CardBody, Button, Label, Input } from "reactstrap";

const UpdateForm = () => {
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
        <CardTitle style={{ margin: "auto", marginTop: "1rem", fontWeight: "bold", fontSize: "2rem" }}>
            {userInfo.user}
          </CardTitle>
          <hr/>
          <CardBody>
            <Label for="name" style={{ fontWeight: "bold" }}>Name</Label>
            <Input  id='name' name='name' type='text' placeholder={userInfo.name} ></Input>
            <br />
            <Label for="user" style={{ fontWeight: "bold" }}>Username</Label>
            <Input  id='user' name='user' type='text' placeholder={userInfo.user} ></Input>
            <br/>
            <Label style={{ fontWeight: "bold" }}>Email</Label>
            <Input  id='email'name='email'  placeholder={userInfo.email}></Input>
            <br />
            <Label style={{ fontWeight: "bold" }}>Password</Label>
            <Input   id='password' name='password' type='password' placeholder={userInfo.password}></Input>
            <br />
            <Button onClick={() => {setEdit(!editing)}} style={{ width: "50%" }}>
              Submit Edit
            </Button>
            <Button onClick={() => {setEdit(!editing)}} style={{ width: "50%" }}>
              Reset Default
            </Button>
          </CardBody>
        </Card>
     
  </>
  );
};

export default UpdateForm;
