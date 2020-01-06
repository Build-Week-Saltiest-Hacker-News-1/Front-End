import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NewsCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.user}</CardSubtitle>
                    <CardText>
                        {<p>{props.comment}</p>}
                        {<p>{props.ranking}</p>}
                    </CardText>
                    <Button>Add to Saved</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default NewsCard;