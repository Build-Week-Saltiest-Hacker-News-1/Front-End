import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import UserList from "./UserList";
import Feed from "./Feed";
import Saved from "./Saved";
import Profile from "./Profile";

const TabbedView = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Row><h1>&nbsp;</h1></Row>
            <Nav tabs>
                <NavItem style={{width: "25%"}}>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Salty Users
                    </NavLink>
                </NavItem>
                <NavItem style={{width: "25%"}}>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Salty Comments
                    </NavLink>
                </NavItem>
                <NavItem style={{width: "25%"}}>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Saved Feed
                    </NavLink>
                </NavItem>
                <NavItem style={{width: "25%"}}>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        My Profile
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <UserList />
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <Feed />
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="3">
                <Row>
                    <Col sm="12">
                        <Saved />
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="4">
                <Row>
                    <Col sm="12">
                        <Profile />
                    </Col>
                </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TabbedView;
