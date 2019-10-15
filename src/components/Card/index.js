import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import "./style.css"
import {Link} from 'react-router-dom'

const FoodCard = props => (
    <Card href={props.link}>
        <Link to={props.link}>
        <Card.Content>
            <Image src={props.img}/>
            <Card.Header>{props.name}</Card.Header>
        </Card.Content>
        </Link>
    </Card>
)

export default FoodCard