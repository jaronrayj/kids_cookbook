import { Header } from 'semantic-ui-react';
import React from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'
import threeQuarters from '../../images/3quarters.gif'

function Biscuit() {

    const steps = [
        {
            num: 1,
            text: 'Get Pot',
            img: 'https://img.icons8.com/dotty/200/000000/cooking-pot.png'
        },
        {
            num: 2,
            text: 'Rice',
            img: 'https://img.icons8.com/carbon-copy/200/000000/rice-bowl.png',
            img2: 'https://img.icons8.com/carbon-copy/200/000000/rice-bowl.png',
            img3: 'https://img.icons8.com/carbon-copy/200/000000/rice-bowl.png',
            img4: 'https://img.icons8.com/ios/100/000000/c.png',
        },
        {
            num: 3,
            text: 'Water',
            img: 'https://img.icons8.com/office/200/000000/water.png',
            img2: 'https://img.icons8.com/office/200/000000/water.png',
            img3: 'https://img.icons8.com/office/200/000000/water.png',
            img4: 'https://img.icons8.com/ios/100/000000/c.png',
        },
        {
            num: 4,
            text: 'Salt',
            img: 'https://img.icons8.com/office/200/000000/salt-shaker.png',
        },
        {
            num: 5,
            text: 'Olive Oil',
            img: 'https://img.icons8.com/office/200/000000/olive-oil.png',
        },
        {
            num: 6,
            text: 'Cook - Rice Setting (10)',
            img: 'https://img.icons8.com/dotty/200/000000/cooking-pot.png'
        },
        {
            num: 7,
            text: 'Wait! 10 more min',
            img: 'https://img.icons8.com/dotty/200/000000/cooking-pot.png'
        },
        {
            num: 8,
            text: 'Eat!',
            img: "https://img.icons8.com/plasticine/480/000000/rice-bowl.png"
            
        },

    ]

    const topBuffer = {
        marginTop: '140px'
    }


    return (

        <>
            <Progress fixed className='progressBar' stepCount={steps.length} indicating />

            < Header style={topBuffer} size='huge' > Rice</Header>
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