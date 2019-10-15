import React, { useState } from 'react';
import { Progress, Button } from 'semantic-ui-react'

function ProgressBar(props) {
    const [progress, setProgress] = useState(0);
    const [buttonClass, setButtonClass] = useState()
    const [buttonText, setButtonText] = useState('Done?')
    function doneClick() {
        setButtonClass('blue')
        setButtonText('Done!')
        setProgress(progress + props.add)
        // progress bar
        // move to next step
    }

    return (
        <div className='progress'>
            <Progress percent={progress} indicating />
            <Button className={buttonClass} onClick={() => doneClick()} size='huge'>
                {buttonText}
            </Button>
        </div>
    );
}

export default ProgressBar;
