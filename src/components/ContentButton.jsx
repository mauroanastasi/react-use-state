import React from 'react'

const ContentButton = (props) => {
    const { language } = props
    return (
        <div className="contentDescr">
            <h3>{language.title}</h3>
            <p>{language.description}</p>
        </div>
    )
}

export default ContentButton
