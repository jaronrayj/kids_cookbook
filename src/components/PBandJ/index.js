import { Header } from 'semantic-ui-react';
import React from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'

function Pizza() {

    const steps = [
        {
            num: 1,
            text: 'Slice of Bread',
            img: 'https://img.icons8.com/officel/200/000000/bread.png'
        },
        {
            num: 2,
            text: 'Peanut Butter',
            img: 'https://img.icons8.com/officel/200/000000/peanuts.png',
        },
        {
            num: 3,
            text: 'Slice of Bread',
            img: 'https://img.icons8.com/officel/200/000000/bread.png'
        },
        {
            num: 4,
            text: 'Jelly',
            img: 'https://img.icons8.com/pastel-glyph/200/000000/jellyfish.png'
        },
        {
            num: 5,
            text: 'Cut',
            img: 'https://img.icons8.com/dusk/200/000000/knife.png',
        },
        {
            num: 6,
            text: 'Eat!',
            img: "https://img.icons8.com/color/480/000000/sandwich.png"
        }

    ]

    const topBuffer = {
        marginTop: '140px'
    }


    return (

        <>
            <Progress stepCount={steps.length} />

            < Header style={topBuffer} size='huge' > Peanut Butter and Jelly Sandwich</Header>
            {steps.map((step) =>
                <RecipeStep
                    numberImg={`https://img.icons8.com/carbon-copy/64/000000/${step.num}.png`}
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