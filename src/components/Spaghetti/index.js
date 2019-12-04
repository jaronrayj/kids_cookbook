import { Header } from 'semantic-ui-react';
import React from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'

function Spaghetti() {


    const steps = [
        {
            num: 1,
            text: 'Get Pot',
            img: 'https://img.icons8.com/ios/200/000000/frying-pan.png'
        },
        {
            num: 2,
            text: 'Fill halfway with water',
            img: 'https://img.icons8.com/office/200/000000/water.png'
        },
        {
            num: 3,
            text: 'Salt (taste like tears)',
            img: 'https://img.icons8.com/office/200/000000/salt-shaker.png',
        },
        {
            num: 4,
            text: 'Boil water',
            img: 'https://img.icons8.com/dusk/200/000000/water-heater.png'
        },
        {
            num: 5,
            text: 'Add spaghetti',
            img: 'https://img.icons8.com/carbon-copy/200/000000/spaghetti.png',
        },
        {
            num: 6,
            text: 'Cook - until tender',
            img: 'https://img.icons8.com/ios/200/000000/frying-pan.png'
        },
        {
            num: 7,
            text: 'Add marinara',
            img: 'https://img.icons8.com/office/200/000000/ketchup.png'
        },
        {
            num: 8,
            text: 'Eat!',
            img: "https://img.icons8.com/color/480/000000/spaghetti.png"

        },

    ]

    const topBuffer = {
        marginTop: '140px'
    }


    return (

        <>
            <Progress stepCount={steps.length} />

            < Header style={topBuffer} size='huge' > Spaghetti</Header>
            {steps.map((step) =>
                <RecipeStep
                    numberImg={`https://img.icons8.com/carbon-copy/64/000000/${step.num}.png`}
                    text={step.text}
                    key={step.text}
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

export default Spaghetti;