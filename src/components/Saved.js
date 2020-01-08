import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux"
import { getSavedFeed } from '../actions/index';


const Saved = (props) => {
    
    const dispatch = useDispatch();

    /*insert call function inside a useEffect to get information from react store or back end*/
    /*call the retrieval function*/
    useEffect(() => {
        dispatch(getSavedFeed());
    },[])
    const saved = useSelector(state => state.saved)
    console.log(saved);

    
    
    return(
        <div className='feed-container'>
            {/* loop over saved*/}
            <h1>Hi there</h1>
        </div>
    )
}

export default Saved;


//Functionally the same as the NewsList component, but will only be fed items from the user's saved list.