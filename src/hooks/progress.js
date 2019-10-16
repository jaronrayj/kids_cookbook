import React, { useState } from 'react';
import { Progress, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

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
        // window.location.hash = `#kids_cookbook/pizza/${hrefCount}`
        if (hrefCount === props.stepCount + 1) {
            setButtonText('Thanks for Cooking!')
            setButtonClass('green')
        } else {
            setHrefCount(hrefCount + 1)
        }
    }

    const fixed = {
        position: 'fixed',
        width: '75%',
        top: '100px',
        zIndex: '100',
        height: '30px'
    }

    return (
        <div style={fixed} className='progressBar'>
            <Progress percent={progress} indicating />
            <Link href={hrefCount}>
                <Button className={buttonClass} onClick={() => doneClick()} size='huge'>
                    {buttonText}
                </Button>
            </Link>
        </div>
    );
}

export default ProgressBar;
