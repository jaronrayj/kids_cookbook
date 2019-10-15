import React from 'react'
import { Header, Divider, Image } from 'semantic-ui-react'


export default function RecipeStep(props) {

    return (
        <>
            <Header>
                <Image src={props.number} />
                {props.text}
            </Header>
            <Image centered src={props.img} />
            <Divider />
        </>
    );
}