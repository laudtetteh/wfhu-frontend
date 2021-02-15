// Packages
import React from 'react';
// Queries
// import SITEOPTIONS_QUERY from "../../queries/site-options";
// import Query from "../../components/Query";

export const getPageData = props => {

    let no_of_posts = 0;
    let pageData = {};
    let intro_cta = {};

    if( props.description !== undefined ) {
        pageData["description"] = props.description;
    }

    if( props.dynamic_fields !== undefined ) {

        if( Array.isArray( props.dynamic_fields) ) {

            props.dynamic_fields.map((group) => {

                if( group.__component == "page.no_of_posts" ) {
                    pageData['no_of_posts'] = group;
                }

                if( group.__component == "page.page.intro-cta" ) {
                    pageData['intro_cta'] = group;
                }
            })
        }
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
