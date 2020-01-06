import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NewsCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width='100%' src='props.src' alt='props.alt' />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>Placeholder{/*Depends on data shape*/}</CardSubtitle>
                    <CardText>Placeholder{/*Depends on data shape*/}</CardText>
                    <Button>Save</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default NewsCard;