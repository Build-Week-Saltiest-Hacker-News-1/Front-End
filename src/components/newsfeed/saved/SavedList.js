import React, { useState, useEffect } from 'react';
import NewsCard from 'NewsCard';
import {useDispatch, useSelector } from "react-redux"
import { getSavedFeed } from '../../../actions';


const SavedList = (props) => {
    
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
            {saved.map(object => (
                <NewsCard object={object} />
            ))}
        </div>
    )
}

export default SavedList;


//Functionally the same as the NewsList component, but will only be fed items from the user's saved list.