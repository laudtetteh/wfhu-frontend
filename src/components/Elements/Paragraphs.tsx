// Packages
import React from 'react';

export const Paragraphs = props => {

    return (
        <div className={`description description font-roboto ${props.classes}`} dangerouslySetInnerHTML={{__html: props.text}}></div>
    )
}
