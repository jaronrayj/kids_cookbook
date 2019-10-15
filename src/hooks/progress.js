import React, { useState } from 'react';
import { Progress, Button } from 'semantic-ui-react'

function ProgressBar(props) {
    const [progress, setProgress] = useState(0);
    const [buttonClass, setButtonClass] = useState('red')
    const [buttonText, setButtonText] = useState('Ready?')
    const [hrefCount, setHrefCount] = useState(1)

    function doneClick() {
        let increase = 100 / props.stepCount
        setButtonClass('blue')
        setButtonText(`Step ${hrefCount}!`)
        setProgress(progress + increase)
        // move to next step
        // window.location.href = `#kids_cookbook/pizza/${hrefCount}`
        if (hrefCount === props.stepCount + 1) {
            setButtonText('Thanks for Cooking!')
            setButtonClass('green')
        } else {
            setHrefCount(hrefCount + 1)
        }
    }

    return (
        <div className='progressBar'>
            <Progress percent={progress} indicating />
            <Button className={buttonClass} onClick={() => doneClick()} size='huge'>
                {buttonText}
            </Button>
        </div>
    );
}

export default ProgressBar;
