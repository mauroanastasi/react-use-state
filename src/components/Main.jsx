import React from 'react'
import languages from '../data/languages'
import ContentButton from './ContentButton'

const Main = () => {
    <languages />

    return (
        <>
            <div className="container">
                <div className='buttonMenu'>
                    <button className='button'>HTML</button>
                    <button className='button'>CSS</button>
                    <button className='button'>Javascript</button>
                    <button className='button'>Node.js</button>
                    <button className='button'>Express</button>
                    <button className='button'>ReactUs</button>
                </div>
                {languages.map(language => (
                    <ContentButton language={language} key={language.id} />
                ))}
            </div>

        </>
    )
}

export default Main
