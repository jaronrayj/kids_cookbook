import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

export default function DoneButton(props) {
    const [buttonClass, setButtonClass] = useState()
    const [buttonText, setButtonText] = useState('Done?')
    function doneClick() {
        setButtonClass('disabled blue')
        setButtonText('Done!')
        // progress bar
        // move to next step
    }
    return (
        <Button className={buttonClass} onClick={() => doneClick()} size='huge'>
            {buttonText}
        </Button>
    )
}