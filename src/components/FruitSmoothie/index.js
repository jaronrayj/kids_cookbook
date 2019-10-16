import { Header } from 'semantic-ui-react';
import React from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'
import threeQuarters from '../../images/3quarters.gif'

function Biscuit() {

    const steps = [
        {
            num: 1,
            text: 'Get Blender Cup',
            img: 'https://img.icons8.com/dotty/200/000000/blender.png'
        },
        {
            num: 2,
            text: 'Strawberries',
            img: 'https://img.icons8.com/officel/200/000000/strawberry.png',
            img2: 'https://img.icons8.com/officel/200/000000/strawberry.png',
            img3: 'https://img.icons8.com/officel/200/000000/strawberry.png',
        },
        {
            num: 3,
            text: 'Banana',
            img: 'https://img.icons8.com/office/200/000000/banana.png',
        },
        {
            num: 4,
            text: 'Apple Juice',
            img: 'https://img.icons8.com/plasticine/200/000000/orange-juice.png',
        },
        {
            num: 5,
            text: 'Yogurt',
            img: 'https://img.icons8.com/dusk/200/000000/yogurt.png',
        },
        {
            num: 6,
            text: 'Powder',
            img: 'https://img.icons8.com/officel/200/000000/powder.png',
        },
        {
            num: 7,
            text: 'Blend',
            img: 'https://img.icons8.com/dotty/200/000000/blender.png'
        },
        {
            num: 8,
            text: 'Drink!',
            img: "https://img.icons8.com/color/480/000000/milkshake--v2.png"
            
        },

    ]

    const topBuffer = {
        marginTop: '140px'
    }


    return (

        <>
            <Progress fixed className='progressBar' stepCount={steps.length} indicating />

            < Header style={topBuffer} size='huge' > Fruit Smoothie</Header>
            {steps.map((step) =>
                <RecipeStep
                    numberImg={`https://img.icons8.com/carbon-copy/64/000000/${step.num}.png`}
                    text={step.text}
                    key={step.text}
                    quant={step.quant}
                    img={step.img}
                    img2={step.img2}
                    img3={step.img3}
                    img4={step.img4}
                    num={step.num}
                />

            )}
        </>
    );
}

export default Biscuit;