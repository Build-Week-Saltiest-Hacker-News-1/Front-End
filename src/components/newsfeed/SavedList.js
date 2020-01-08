import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux"
import { getDashboard } from '../../actions';
import UserCard from "./contentcard/UserCard";

const SavedList = (props) => {

    const saved = useSelector(state => state.saved)
    console.log(saved);
    
    return(
        <div className='feed-container'>
            {saved.map(user => (
                <UserCard user={user} />
            ))}
        </div>
    )
}

export default SavedList;


//Functionally the same as the NewsList component, but will only be fed items from the user's saved list.