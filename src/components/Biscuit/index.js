import { Header } from 'semantic-ui-react';
import React from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'
import threeQuarters from '../../images/3quarters.gif'
import { Link } from "react-router-dom";

function Biscuit() {

    const steps = [
        {
            num: 1,
            text: 'Set Oven to 425°',
            img: 'https://img.icons8.com/officel/200/000000/cooker.png'
        },
        {
            num: 2,
            text: '2 Cups Flour',
            img: 'https://img.icons8.com/cotton/200/000000/flour-of-rye--v2.png',
            img3: 'https://img.icons8.com/ios/100/000000/c.png',
            img2: 'https://img.icons8.com/cotton/200/000000/flour-of-rye--v2.png'
        },
        {
            num: 3,
            text: '1 T Baking Powder',
            img: 'https://img.icons8.com/ultraviolet/200/000000/powder.png',
            img2: 'https://img.icons8.com/ios/100/000000/t.png'
        },
        {
            num: 4,
            text: '1 T Sugar',
            img: 'https://img.icons8.com/officel/200/000000/sugar-cube.png',
            img2: 'https://img.icons8.com/ios/100/000000/t.png'
        },
        {
            num: 5,
            text: '1 t Salt',
            img: 'https://img.icons8.com/office/200/000000/salt-shaker.png',
            img2: 'https://img.icons8.com/metro/100/000000/t-lowercase.png',

        },
        {
            num: 6,
            text: '6 T Butter',
            img: 'https://img.icons8.com/color/200/000000/butter.png',
            img3: 'https://img.icons8.com/ios/100/000000/t.png',
            img2: 'https://img.icons8.com/color/150/000000/6-circle.png',
        },
        {
            num: 7,
            text: 'Mix',
            img: 'https://img.icons8.com/officel/200/000000/mixer.png',
        },
        {
            num: 8,
            text: '3/4 Cup Milk',
            img2: threeQuarters,
            img: 'https://img.icons8.com/office/200/000000/milk.png',
            img3: 'https://img.icons8.com/ios/100/000000/c.png',
        },
        {
            num: 9,
            text: 'Mix',
            img: 'https://img.icons8.com/officel/200/000000/mixer.png',
        },
        {
            num: 10,
            text: 'Roll w/Lots of Flour',
            img: 'https://img.icons8.com/dusk/200/000000/rolling-pin.png',
        },
        {
            num: 11,
            text: 'Cut',
            img: 'https://img.icons8.com/dusk/200/000000/knife.png',
        },
        {
            num: 12,
            text: 'Cook - 12 min or Golden Brown',
            img: 'https://img.icons8.com/officel/200/000000/cooker.png'
        },
        {
            num: 13,
            text: 'Eat!',
            img: 'https://img.icons8.com/dusk/480/000000/biscuits.png'
        }

    ]

    const topBuffer = {
        marginTop: '140px'
    }


    return (

        <>
            <Progress stepCount={steps.length} />

            < Header style={topBuffer} size='huge' > Biscuits</Header>
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

export default Biscuit;