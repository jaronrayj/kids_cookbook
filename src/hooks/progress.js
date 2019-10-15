import React, {useState} from 'react';
import {Progress} from 'semantic-ui-react'

function Bar() {
    const [progress, setProgress] = useState(0);

    return (
        <div className='progress'>
            <Progress percent={progress} indicating/>
            <p>You clicked {progress}
                times</p>
            <button onClick={() => setProgress(progress + 10)}>
                Click me
            </button>
        </div>
    );
}

export default Bar;