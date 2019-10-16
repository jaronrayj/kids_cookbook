import React from 'react'
import { Header, Divider, Image } from 'semantic-ui-react'


export default function RecipeStep(props) {
    const imageStyle = {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    }

    return (
        <div id={props.num}>
            <Header>
                <Image src={props.numberImg} />
                {props.text}
            </Header>
            <Image.Group style={imageStyle} >
                <Image src={props.img} />
                <Image src={props.img2} />
                <Image src={props.img3} />
            </Image.Group>
            <Divider />
        </div>
    );
}