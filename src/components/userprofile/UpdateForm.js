import React, { useState } from "react";
import { Card, CardTitle, CardBody, Button, Label, Input, Form } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { putEditedUser } from "../../actions/";
import Validate from "../Validate"

const initialState = {
  name: "",
  user: "",
  email: "",
};


const UpdateForm = (props) => {
  const dispatch = useDispatch();
  const [ done, setDone ] = useState(false);
  const [ values, setEdited] = useState(initialState);
  const [error, setErrors] = useState({});
  const id = localStorage.getItem('userid')
  
 
  const changeHandler = e => {
    setEdited({ ...values, [e.target.name]: e.target.value });
  };
 
  const onSubmit = e => {
    e.preventDefault();
    setErrors(Validate(values));
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      e.stopPropagation();
    } else {
      setDone(true);
    }
    dispatch(putEditedUser(id, values));
    setEdited(initialState);
} 
  const userEdit = useSelector(state => state.userEdit);
  console.log(userEdit)
  const resetForm = e => {
    e.preventDefault();
    setEdited(initialState);
    setDone(false);
  }

  return (
    <>
        
        <Card>
        <CardTitle style={{ margin: "auto", marginTop: "1rem", fontWeight: "bold", fontSize: "2rem" }}>
            {props.userInfo.user}
          </CardTitle>
          <hr/>
          { done ? <Label style={{ margin: "auto", fontSize: "1rem", fontWeight: "bold" }}>Profile Edited!</Label> : <Label style={{ margin: "auto", fontSize: "1rem", fontWeight: "bold" }}>Edit Your Profile</Label>}
          <CardBody>
            <Form onSubmit={onSubmit} >
            <Label for="name" style={{ fontWeight: "bold" }}>Name</Label>
            <Input required id='name' name='name' type='text' placeholder={props.userInfo.name} value={values.name} onChange={changeHandler}></Input>
            <br />
            <Label for="user" style={{ fontWeight: "bold" }}>Username</Label>
            <Input required  id='user' name='user' type='text' placeholder={props.userInfo.user} value={values.user} onChange={changeHandler} ></Input>
            {error.user && <p color="red" >{error.user}</p>}
            <br/>
            <Label style={{ fontWeight: "bold" }}>Email</Label>
            <Input required id='email'name='email'  placeholder={props.userInfo.email} value={values.email} onChange={changeHandler}></Input>
             {error.email && <p color="red" >{error.email}</p>}
            <br />
            {/* <Label style={{ fontWeight: "bold" }}>Password</Label>
            <Input  required id='password' name='password' type='password' placeholder="password" value={values.password} onChange={changeHandler}></Input>
            {error.password && <p color="red" >{error.password}</p>}
            <br /> */}
            <Button type="submit" style={{ width: "50%" }}>
              Submit Edit
            </Button>
            <Button onClick={resetForm} style={{ width: "50%" }}>
              Reset Default
            </Button>
            </Form>
          </CardBody>
        </Card>
     
  </>
  );
};

export default UpdateForm;
