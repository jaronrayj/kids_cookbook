import React, {Component} from 'react';
import {Card} from 'semantic-ui-react'
import FoodCard from "./components/Card"

class App extends Component {

    foods = [
        {
            name: "Pancakes",
            link: "/kids_cookbook/#/pancakes",
            img: "https://img.icons8.com/officel/480/000000/pancake.png"
        }, {
            name: "Pizza",
            link: "/kids_cookbook/#/pizza",
            img: "https://img.icons8.com/officel/480/000000/pizza.png"
        }, {
            name: "Smoothie",
            link: "/kids_cookbook/#/smoothie",
            img: "https://img.icons8.com/color/480/000000/milkshake--v2.png"
        }, {
            name: "Biscuits",
            link: "/kids_cookbook/#/biscuits",
            img: "https://img.icons8.com/dusk/480/000000/biscuits.png"
        }, {
            name: "Cookies",
            link: "/kids_cookbook/#/cookies",
            img: "https://img.icons8.com/plasticine/480/000000/cookie.png"
        }, {
            name: "Rice",
            link: "/kids_cookbook/#/rice",
            img: "https://img.icons8.com/plasticine/480/000000/rice-bowl.png"
        }, {
            name: "Spaghetti",
            link: "/kids_cookbook/#/spaghetti",
            img: "https://img.icons8.com/color/480/000000/spaghetti.png"
        }, {
            name: "Tacos",
            link: "/kids_cookbook/#/tacos",
            img: "https://img.icons8.com/plasticine/480/000000/taco.png"
        }, {
            name: "Peanut Butter and Jelly",
            link: "/kids_cookbook/#/pbandj",
            img: "https://img.icons8.com/color/480/000000/sandwich.png"
        }
    ]
    render() {
        return (
                <Card.Group>
                    {this.foods.map(food => <FoodCard key={food.name} name={food.name} img={food.img} link={food.link}/>)}
                </Card.Group>
        );
    }
}

export default App;
