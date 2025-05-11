import React from 'react'

const ContentDescr = ({ selectedButton }) => {
    return (
        <div className="contentDescr">
            <h5>{selectedButton.title}</h5>
            <p>{selectedButton.description}</p>
        </div>
    )
}

export default ContentDescr
