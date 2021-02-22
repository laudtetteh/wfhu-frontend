// Packages
import React from 'react';
import ReactMarkdown from "react-markdown";

export const getPageData = props => {

    let pageData = {};

    let no_of_posts = 0;
    let name = '';
    let description = '';
    let category = {};
    let image = {};
    let intro_cta = {};
    let connect_cta = {};

    if( props.name !== undefined ) {
        name = props.name;
    }

    if( props.description !== undefined ) {
        description = <ReactMarkdown source={props.description} />;
    }

    if( props.category !== undefined ) {
        category = props.category;
    }

    if( props.image !== undefined ) {
        image = props.image;
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
            })
        }
    }

    pageData["name"] = name;
    pageData["description"] = description;
    pageData["category"] = category;
    pageData["image"] = image;
    pageData['no_of_posts'] = no_of_posts;
    pageData['intro_cta'] = intro_cta;
    pageData['connect_cta'] = connect_cta;

    return pageData;
}

export const getSiteOptions = props => {

    let optionsData = {};

    if( props.social !== undefined ) {
        optionsData["social"] = props.social;
    }

    return optionsData;
}
