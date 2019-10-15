import { Header } from 'semantic-ui-react';
import React, { useState } from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'

function Pizza() {
    // const [progress, setProgress] = useState(0);


    const steps = [
        {
            num: 1,
            text: 'Set Oven to 425°',
            img: 'https://img.icons8.com/officel/200/000000/cooker.png'
        },
        {
            num: 2,
            text: 'Dough',
            img: 'https://img.icons8.com/officel/200/000000/bread.png'
        },
        {
            num: 3,
            text: 'Sauce',
            img: 'https://img.icons8.com/officel/200/000000/ketchup.png'
        },
        {
            num: 4,
            text: 'Cheese',
            img: 'https://img.icons8.com/officel/200/000000/cheese.png'
        },
        {
            num: 5,
            text: 'Bacon',
            img: 'https://img.icons8.com/officel/200/000000/bacon.png'
        },
        {
            num: 6,
            text: 'Tomato',
            img: 'https://img.icons8.com/officel/200/000000/tomato.png'
        },
        {
            num: 7,
            text: 'Anything Else?',
            img: 'https://img.icons8.com/officel/200/000000/question-mark.png'
        },
        {
            num: 8,
            text: 'Cook!',
            img: 'https://img.icons8.com/officel/200/000000/cooker.png'
        },
        {
            num: 9,
            text: 'Cut',
            img: 'https://img.icons8.com/officel/200/000000/pizza-cutter--v2.png'
        },
        {
            num: 10,
            text: 'Eat!',
            img: 'https://img.icons8.com/officel/200/000000/pizza.png'
        }

    ]


    return (

        <>
            <Progress fixed className='progressBar' stepCount={10} indicating />

            < Header size='huge' > Pizza, Pizza, Pizza!!</Header>
            {steps.map((step) =>
                <RecipeStep
                    number={`https://img.icons8.com/carbon-copy/64/000000/${step.num}.png`}
                    text={step.text}
                    key={step.text}
                    img={step.img}
                    num={step.num}
                />

            )}
        </>
    );
}

export default Pizza;