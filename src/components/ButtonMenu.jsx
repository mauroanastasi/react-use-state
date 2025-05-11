import React from 'react'

const ButtonMenu = ({ languages, setSelectedButton }) => {
    return (
        <div className="buttonMenu">
            {languages.map((languages) => (
                <button onClick={() => setSelectedButton(languages)} className='button' key={languages.id}>
                    {languages.title}
                </button>
            ))}
        </div>
    )
}

export default ButtonMenu
