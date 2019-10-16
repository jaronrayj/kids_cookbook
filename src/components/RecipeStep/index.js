import React from 'react'
import { Header, Divider, Image } from 'semantic-ui-react'


export default function RecipeStep(props) {
    const image = {
        zIndex: '-10'
    }

    return (
        <div id={props.num}>
            <Header>
                <Image style={image} src={props.number} />
                {props.text}
            </Header>
            <Image centered src={props.img} />
            <Divider />
        </div>
    );
}