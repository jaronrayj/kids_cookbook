import React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import "./style.css"
import { Link } from 'react-router-dom'

const FoodCard = props => (
    <Card href={props.link}>
        <Link to={props.link}>
            <Card.Content>
                <Header>{props.name}</Header>
                <Image rounded src={props.img} />
            </Card.Content>
        </Link>
    </Card>
)

export default FoodCard