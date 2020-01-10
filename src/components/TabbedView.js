import React, { useState, useEffect } from "react";
import { useDispatch} from 'react-redux'
import { getDashboard } from './../actions' 
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Jumbotron } from 'reactstrap';
import classnames from 'classnames';

import UserList from "./newsfeed/UserList";
import CommentList from './newsfeed/CommentList';
import SavedList from "./newsfeed/SavedList";
import Profile from "./userprofile/Profile";

const TabbedView = () => {

    const dispatch = useDispatch()
    const userid = localStorage.getItem("userid")
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        dispatch(getDashboard(userid));
    },[dispatch])

    return (
        <div>
            <Row><h1>&nbsp;</h1></Row>
            {/* <div style={{ textAlign: 'center', marginBottom: '5%'}} ><h1 >SALTY THINGS</h1></div> */}
            <Nav tabs >
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
                        <Jumbotron style={{backgroundImage: 'linear-gradient(#04519b, #033C73 60%, #02325f)'}}>
                            <UserList />
                        </Jumbotron>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <Jumbotron style={{backgroundImage: 'linear-gradient(#6d94bf, #446E9B 50%, #3e648d)'}}>
                            <CommentList />
                        </Jumbotron>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="3">
                <Row>
                    <Col sm='12'>
                        <Jumbotron style={{backgroundImage: 'linear-gradient(#ff6707, #DD5600 60%, #c94e00)'}} >
                            <SavedList />
                        </Jumbotron>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="4">
                <Row>
                    <Col sm="12">
                        <Jumbotron style={{backgroundImage: 'linear-gradient(#54b4eb, #2FA4E7 60%, #1d9ce5)'}}>
                            <Profile />
                        </Jumbotron>
                    </Col>
                </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TabbedView;
