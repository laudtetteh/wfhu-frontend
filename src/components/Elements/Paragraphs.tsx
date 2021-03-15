// Packages
import React from 'react';

function trimText(text, limit) {

    let trimmed = '';

    if(text.length > limit) {

        trimmed = text.substring(0,limit) + '...';

    } else if(text.length == limit) {

        trimmed = text.substring(0,limit);

    }

    return trimmed;
}

export const Paragraphs = props => {

    if(props.limit) {

        const trimmedText = trimText(props.text, props.limit);

        return (
            <div className={`description description page-content font-roboto ${props.classes}`} dangerouslySetInnerHTML={{ __html: trimmedText }}></div>
        )
    }

    return (
        <div className={`description description page-content font-roboto ${props.classes}`} dangerouslySetInnerHTML={{ __html: props.text }}></div>
    )
}
