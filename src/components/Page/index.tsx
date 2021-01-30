import React from 'react';

const test = ({page}) => {
// console.log(page[0].slug);
    return(
        <div>{`"the current page is ${page[0].name}"`}</div>
    )
}

export default test;
