// Packages
import React from 'react';
// Queries
// import SITEOPTIONS_QUERY from "../../queries/site-options";
// import Query from "../../components/Query";

export const getPageData = props => {

    let pageData = {};

    if( props.description !== undefined ) {
        pageData["description"] = props.description;
    }

    if( props.dynamic_fields !== undefined
        && props.dynamic_fields[0] !== undefined ) {

        pageData["noOfPosts"] = props.dynamic_fields[0].no_of_posts;
    }

    return pageData;
}

export const getSiteOptions = props => {

    let optionsData = {};

    if( props.social !== undefined ) {
        optionsData["social"] = props.social;
    }

    return optionsData;
}
