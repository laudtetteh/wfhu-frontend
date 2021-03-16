// Packages
import React from 'react';

export const getPageData = props => {

    let pageData = {};

    let name = '';
    let description = '';
    let excerpt = '';
    let intro_paragraph = '';
    let connect_cta_paragraph = '';
    let paragraph = '';
    let category = {};
    let image = {};
    let intro_cta = {};
    let connect_cta = {};
    let row_of_gifs = {};
    let row_of_posts = {};
    let row_of_reviews = {};
    let row_of_events = {};
    let profile_pic = {};

    if( props.name !== undefined ) {
        name = props.name;
    }

    if( props.description !== undefined ) {
        description = props.description;
    }

    if( props.excerpt !== undefined ) {
        excerpt = props.excerpt;
    }

    if( props.paragraph !== undefined ) {
        paragraph = <span className="paragraph font-roboto" dangerouslySetInnerHTML={{__html: props.paragraph}} />
    }

    if( props.category !== undefined ) {
        category = props.category;
    }

    if( props.image !== undefined ) {
        image = props.image;
    }

    if( props.IntroCTA ) {

        intro_cta = props.IntroCTA;

        if( props.IntroCTA.intro_paragraph !== undefined ) {
            intro_cta.intro_paragraph = <span className="intro_paragraph font-roboto" dangerouslySetInnerHTML={{__html: props.IntroCTA.intro_paragraph}} />
        }
    }

    if( props.row_of_gifs ) {
        row_of_gifs = props.row_of_gifs
    }

    if( props.dynamic_fields !== undefined ) {

        if( Array.isArray( props.dynamic_fields) ) {

            props.dynamic_fields.map((group) => {

                if( group.__typename == "ComponentPageConnectCta" ) {
                    connect_cta = group;

                    if( connect_cta.paragraph !== undefined ) {
                        connect_cta_paragraph = <span className="paragraph font-roboto" dangerouslySetInnerHTML={{__html: connect_cta.paragraph}} />
                    }
                }

                if( group.__typename == "ComponentPageRowOfPosts" ) {
                    row_of_posts = group.posts;
                }

                if( group.__typename == "ComponentPageRowOfReviews" ) {
                    row_of_reviews = group.reviews;
                }


                if( group.__typename == "ComponentPageRowOfEvents" ) {
                    row_of_events = group.events;
                }

                if( group.__typename == "ComponentPageSingleImage" ) {
                    profile_pic = group;
                }
            })
        }
    }

    pageData["name"] = name;
    pageData["description"] = description;
    pageData["excerpt"] = excerpt;
    pageData["paragraph"] = paragraph;
    pageData["intro_paragraph"] = intro_paragraph;
    pageData["connect_cta_paragraph"] = connect_cta_paragraph;
    pageData["category"] = category;
    pageData["image"] = image;
    pageData['intro_cta'] = intro_cta;
    pageData['connect_cta'] = connect_cta;
    pageData['row_of_gifs'] = row_of_gifs;
    pageData['row_of_posts'] = row_of_posts;
    pageData['row_of_reviews'] = row_of_reviews;
    pageData['row_of_events'] = row_of_events;
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
