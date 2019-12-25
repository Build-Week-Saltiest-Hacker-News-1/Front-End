import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
  }
  
  const onLogIn = () => {

  }

  const onSignUp = () => {

  }

  return (
    <div>
      <Nav tabs>
        <NavItem style={{width: '50%'}}>
            <NavLink 
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            >Log In</NavLink>
        </NavItem>
        <NavItem style={{width: '50%'}}>
            <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            >Sign Up</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col xs='6'>
              <h4>&nbsp;Log In:</h4>
            </Col>
          </Row>
          <Row>
            <Col xs='6'>
              <Card>

              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col xs='6'></Col>
            <Col xs='6'>
              <h4>Sign Up:</h4>
            </Col>
          </Row>
          <Row>
            <Col xs='6'></Col>
            <Col xs='6'>
              <Card>

              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Auth;