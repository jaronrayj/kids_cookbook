import React from 'react'
import { Header, Divider, Image } from 'semantic-ui-react'
import DoneButton from '../DoneButton';


export default function RecipeStep(props) {
    function progressClick() {
        
    }

    return (
        <>
            <Header>
                <Image src={props.number} />
                {props.text}
            </Header>
            <Image centered src={props.img} />
            <DoneButton onClick={() => progressClick()} />
            <Divider />
        </>
    );
}