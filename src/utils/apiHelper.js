// Packages
import React from 'react';

export const getPageData = props => {
    let pageData = {};

    let no_of_posts = 0;
    let intro_cta = {};
    let connect_cta = {};

    if( props.description !== undefined ) {
        pageData["description"] = props.description;
    }


    if( props.dynamic_fields !== undefined ) {

        if( Array.isArray( props.dynamic_fields) ) {

            props.dynamic_fields.map((group) => {

                if( group.__typename == "ComponentPageNoOfPostsToShow" ) {
                    no_of_posts = group;
                }

                if( group.__typename == "ComponentPageIntroCta" ) {
                    intro_cta = group;
                }

                if( group.__typename == "ComponentPageConnectCta" ) {
                    connect_cta = group;
                }

                pageData['no_of_posts'] = no_of_posts;
                pageData['intro_cta'] = intro_cta;
                pageData['connect_cta'] = connect_cta;
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
