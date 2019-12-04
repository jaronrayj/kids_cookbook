import { Header } from 'semantic-ui-react';
import React from 'react';
import RecipeStep from '../RecipeStep'
import Progress from '../../hooks/progress'

function Marinara() {


    const steps = [
        {
            num: 1,
            text: 'Get Pot',
            img: 'https://img.icons8.com/ios/200/000000/frying-pan.png'
        },
        {
            num: 2,
            text: 'Add oil',
            img: 'https://img.icons8.com/office/200/000000/olive-oil.png',
            img2: 'https://img.icons8.com/ios/100/000000/c.png',
        },
        {
            num: 3,
            text: 'Chop onion and add to pot',
            img: 'https://img.icons8.com/emoji/200/000000/onion.png',
        },
        {
            num: 4,
            text: 'Chop 1 T garlic and add to pot',
            img: 'https://img.icons8.com/emoji/200/000000/garlic.png',
            img2: 'https://img.icons8.com/ios/100/000000/t.png'
        },
        {
            num: 5,
            text: 'Cut 4 tomatoes and add to pot',
            img: 'https://img.icons8.com/emoji/200/000000/tomato.png',
            img2: 'https://img.icons8.com/emoji/200/000000/tomato.png',
            img3: 'https://img.icons8.com/emoji/200/000000/tomato.png',
            img4: 'https://img.icons8.com/emoji/200/000000/tomato.png',
        },
        {
            num: 6,
            text: 'Basil and spicy',
            img: 'https://img.icons8.com/doodle/200/000000/potted-plant--v2.png',
            img2: 'https://img.icons8.com/color/200/000000/paprika.png',
        },
        {
            num: 7,
            text: 'Cook until tender',
            img: 'https://img.icons8.com/ios/200/000000/frying-pan.png'
        },
        {
            num: 8,
            text: 'Blend until smooth',
            img: "https://img.icons8.com/dotty/200/000000/blender.png"
        },
        {
            num: 9,
            text: 'Mix with spaghetti and eat!',
            img: "https://img.icons8.com/color/480/000000/spaghetti.png"
        },

    ]

    const topBuffer = {
        marginTop: '140px'
    }


    return (

        <>
            <Progress stepCount={steps.length} />

            < Header style={topBuffer} size='huge' > Marinara</Header>
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

export default Marinara;