import React from 'react'
import languages from '../data/languages'
import { useState } from 'react';
import ButtonMenu from './ButtonMenu';
import ContentDescr from './contentDescr';

const Main = () => {
    const [selectedButton, setSelectedButton] = useState(languages[0]);
    return (
        <>
            <languages />
            <div className="container">
                <ButtonMenu languages={languages} setSelectedButton={setSelectedButton} />
                <ContentDescr selectedButton={selectedButton} />
            </div >
        </>

    )
}

export default Main

