import React from 'react'
import languages from '../data/languages'
import ContentButton from './ContentButton'
import Button from './button'

const Main = () => {
    <languages />

    return (
        <>
            <div className="container">
                <div className='buttonMenu'>
                    {languages.map(language => (
                        <Button title={language.title} key={language.id} />
                    ))}
                </div>
                <div className="contentDescr">
                    {languages.map(language => (
                        <ContentButton language={language} key={language.id} />
                    ))}
                </div>
            </div >

        </>
    )
}

export default Main