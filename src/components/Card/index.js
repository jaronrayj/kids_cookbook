import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import "./style.css"

const FoodCard = props => (
    <Card href={props.link}>
        <Card.Content>
            <Image src={props.img}/>
            <Card.Header>{props.name}</Card.Header>
        </Card.Content>
    </Card>
)

export default FoodCard