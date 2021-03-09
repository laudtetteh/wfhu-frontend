// Packages
import React from 'react';
import ReactMarkdown from "react-markdown";

export const getPageData = props => {

    let pageData = {};

    let name = '';
    let description = '';
    let category = {};
    let image = {};
    let intro_cta = {};
    let connect_cta = {};
    let row_of_gifs = {};
    let row_of_posts = {};
    let profile_pic = {};

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

                if( group.__typename == "ComponentPageIntroCta" ) {
                    intro_cta = group;
                }

                if( group.__typename == "ComponentPageConnectCta" ) {
                    connect_cta = group;
                }

                if( group.__typename == "ComponentPageRowOfGifs" ) {
                    row_of_gifs = group.gifs_component;
                }

                if( group.__typename == "ComponentPageRowOfPosts" ) {
                    row_of_posts = group.posts;
                }

                if( group.__typename == "ComponentPageSingleImage" ) {
                    profile_pic = group;
                }
            })
        }
    }

    pageData["name"] = name;
    pageData["description"] = description;
    pageData["category"] = category;
    pageData["image"] = image;
    pageData['intro_cta'] = intro_cta;
    pageData['connect_cta'] = connect_cta;
    pageData['row_of_gifs'] = row_of_gifs;
    pageData['row_of_posts'] = row_of_posts;
    pageData['profile_pic'] = profile_pic;

    return pageData;
}

export const getSiteOptions = props => {

    let optionsData = {};

    if( props.social !== undefined ) {
        optionsData["social"] = props.social;
    }

    return optionsData;
}
