import React from 'react'
import languages from '../data/languages'
import { useState } from 'react';

const Main = () => {
    const [selectedButton, setSelectedButton] = useState(languages[0]);
    return (
        <>
            <languages />
            <div className="container">
                <div className="buttonMenu">
                    {languages.map((languages) => (
                        <button onClick={() => setSelectedButton(languages)} className='button' key={languages.id}>
                            {languages.title}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <div className="contentDescr">
                    <h5>{selectedButton.title}</h5>
                    <p>{selectedButton.description}</p>
                </div>
            </div>
        </>

    )
}

export default Main

