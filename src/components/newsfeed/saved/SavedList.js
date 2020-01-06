import React, { useState, useEffect } from 'react';
import NewsCard from 'NewsCard';


const SavedList = (props) => {
    const [savedObjects, setSavedObjects] = useState([{}]);

    /*insert call function inside a useEffect to get information from react store or back end*/
    /*call the retrieval function*/

    return(
        <div className='feed-container'>
            {savedObjects.map(object => (
                <NewsCard />
            ))}
        </div>
    )
}

export default NewsList;


//Functionally the same as the NewsList component, but will only be fed items from the user's saved list.