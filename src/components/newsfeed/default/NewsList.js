import React, { useState, useEffect } from 'react';
import NewsCard from 'NewsCard';


const NewsList = (props) => {
    const [feedObjects, setFeedObjects] = useState([{}]);

    /*insert call function inside a useEffect to get information from react store or back end*/
    /*call the retrieval function*/

    return(
        <div className='feed-container'>
            {feedObjects.map(object => (
                <NewsCard />
            ))}
        </div>
    )
}

export default NewsList;
