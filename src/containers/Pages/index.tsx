import React from 'react';
// Page Containers
import { Home } from '../Home';
import { About } from '../About';
import { Blog } from '../Blog';
import { Contact } from '../Contact';
// Components
import Page from "../../components/Page";
// Queries
import Query from "../../components/Query";
import PAGES_QUERY from "../../queries/page/pages";

export const Pages = (props) => {
    // Remove all slashes from path
    const path = props.location.pathname.replace(/^\/|\/$/g, '');

    return(
        <Query query={PAGES_QUERY} slug={path}>
            {({ data: { pages } }) => {
                // Determine which page to query from the API
                {switch (path) {
                    case 'home':
                      return <Home page={pages} />;
                    case 'about':
                      return <About page={pages} />;
                    case 'blog':
                      return <Blog page={pages} />;
                    case 'contact':
                      return <Contact page={pages} />;
                    default:
                      return null;
                }}
            }}
        </Query>
    );

}
