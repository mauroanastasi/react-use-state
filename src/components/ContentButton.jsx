import React from 'react'

const ContentButton = (props) => {
    const { language } = props
    return (
        <>
            <h3>{language.title}</h3>
            <p>{language.description}</p>
        </>

    )
}

export default ContentButton