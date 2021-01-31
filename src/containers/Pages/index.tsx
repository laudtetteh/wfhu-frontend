import React from 'react';
// Page Containers
import { Home } from '../Home';
import { About } from '../About';
import { Blog } from '../Blog';
import { Contact } from '../Contact';
import { NotFound } from '../NotFound';
import Query from "../../components/Query";
import PAGES_QUERY from "../../queries/page/pages";
// Utilities
import { DocumentHead } from '../../utils/helpers';

export const Pages = (props) => {
    // Remove all slashes from path
    let path = props.location.pathname.replace(/^\/|\/$/g, '');

    if(path === '' ) {
        path='home';
    }

    return(

        <Query query={PAGES_QUERY} slug={path}>

            {({ data: { pages } }) => {
                // Determine which page to query from the API
                {switch (path) {
                    case 'home':
                        return (
                            <React.Fragment>
                                <DocumentHead title="Home" />
                                <Home pageLoad={pages[0]} />
                            </React.Fragment>
                        )
                    case 'about':
                        return (
                            <React.Fragment>
                                <DocumentHead title="About" />
                                <About pageLoad={pages[0]} />
                            </React.Fragment>
                        )
                    case 'blog':
                        return (
                            <React.Fragment>
                                <DocumentHead title="Blog" />
                                <Blog pageLoad={pages[0]} />
                            </React.Fragment>
                        )
                    case 'contact':
                        return (
                            <React.Fragment>
                                <DocumentHead title="Contact" />
                                <Contact pageLoad={pages[0]} />
                            </React.Fragment>
                        )

                    default:

                        return (
                            <React.Fragment>
                                <DocumentHead title="404 - Page Not Found" />
                                <NotFound />
                            </React.Fragment>
                        )
                }}
            }}
        </Query>
    );

}
