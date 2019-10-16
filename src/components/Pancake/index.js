import { Header } from 'semantic-ui-react';
import React from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'
import threeQuarters from '../../images/3quarters.gif'

function Biscuit() {

    const steps = [
        {
            num: 1,
            text: 'Large Bowl',
            img: 'https://img.icons8.com/dusk/200/000000/salad-bowl.png'
        },
        {
            num: 2,
            text: '1 Cup Flour',
            img: 'https://img.icons8.com/cotton/200/000000/flour-of-rye--v2.png',
            img2: 'https://img.icons8.com/ios/100/000000/c.png',
        },
        {
            num: 3,
            text: '2 t Baking Powder',
            img: 'https://img.icons8.com/ultraviolet/200/000000/powder.png',
            img2: 'https://img.icons8.com/ultraviolet/200/000000/powder.png',
            img3: 'https://img.icons8.com/metro/100/000000/t-lowercase.png'
        },
        {
            num: 4,
            text: '2 T Sugar',
            img: 'https://img.icons8.com/officel/200/000000/sugar-cubes.png',
            img2: 'https://img.icons8.com/officel/200/000000/sugar-cubes.png',
            img3: 'https://img.icons8.com/ios/100/000000/t.png'
        },
        {
            num: 5,
            text: '1 t Salt',
            img: 'https://img.icons8.com/office/200/000000/salt-shaker.png',
            img2: 'https://img.icons8.com/metro/100/000000/t-lowercase.png',

        },
        {
            num: 6,
            text: '1 Egg',
            img: 'https://img.icons8.com/plasticine/200/000000/egg.png',
        },
        {
            num: 7,
            text: '1 cup Milk',
            img: 'https://img.icons8.com/office/200/000000/milk.png',
            img2: 'https://img.icons8.com/ios/100/000000/c.png',
        },
        {
            num: 8,
            text: 'Mix to Slightly Lumpy',
            img: 'https://img.icons8.com/officel/200/000000/mixer.png',
        },
        {
            num: 9,
            text: 'Cook - Flip when Bubbling',
            img: 'https://img.icons8.com/ios-glyphs/200/000000/frying-pan.png',
        },
        {
            num: 10,
            text: 'Toppings',
            img: 'https://img.icons8.com/officel/200/000000/peanuts.png',
            img2: 'https://img.icons8.com/dusk/200/000000/juice-bottle.png',
        },
        {
            num: 13,
            text: 'Eat!',
            img: "https://img.icons8.com/officel/480/000000/pancake.png"
        }

    ]

    const topBuffer = {
        marginTop: '140px'
    }


    return (

        <>
            <Progress fixed className='progressBar' stepCount={steps.length} indicating />

            < Header style={topBuffer} size='huge' > Pancakes</Header>
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