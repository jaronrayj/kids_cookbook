import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import FoodCard from "./components/Card"

class App extends Component {

    foods = [
        {
            name: "Pancakes",
            link: "/pancakes",
            img: "https://img.icons8.com/officel/480/000000/pancake.png"
        },
        {
            name: "Pizza",
            link: "/pizza",
            img: "https://img.icons8.com/officel/480/000000/pizza.png"
        },
        {
            name: "Smoothie",
            link: "/smoothie",
            img: "https://img.icons8.com/color/480/000000/milkshake--v2.png"
        },
        {
            name: "Biscuits",
            link: "/biscuits",
            img: "https://img.icons8.com/dusk/480/000000/biscuits.png"
        },
        {
            name: "Cookies",
            link: "/cookies",
            img: "https://img.icons8.com/plasticine/480/000000/cookie.png"
        },
        {
            name: "Rice",
            link: "/rice",
            img: "https://img.icons8.com/plasticine/480/000000/rice-bowl.png"
        },
        {
            name: "Spaghetti",
            link: "/spaghetti",
            img: "https://img.icons8.com/color/480/000000/spaghetti.png"
        },
        {
            name: "Tacos",
            link: "/tacos",
            img: "https://img.icons8.com/plasticine/480/000000/taco.png"
        },
        {
            name: "Peanut Butter and Jelly",
            link: "/pbandj",
            img: "https://img.icons8.com/color/480/000000/sandwich.png"
        }
    ]
    render() {
        return (
            <Card.Group>
                {this.foods.map(food =>
                    <FoodCard
                        key={food.name}
                        name={food.name}
                        img={food.img}
                        link={food.link}
                    />)}
            </Card.Group>
        );
    }
}

export default App;
