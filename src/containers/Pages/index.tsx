import React from 'react';
// Page Containers
import { Home } from '../Home';
import { About } from '../About';
import { Blog } from '../Blog';
import { Contact } from '../Contact';
import { NotFound } from '../NotFound';
// Queries
import Query from "../../components/Query";
import PAGES_QUERY from "../../queries/page/pages";
import SITEOPTIONS_QUERY from "../../queries/site-options";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Pages = (props) => {
    // Remove all slashes from path
    let path = props.location.pathname.replace(/^\/|\/$/g, '');
    let pageBag;


    if(path === '' ) {
        path='home';
    }

    return(

        <Query query={PAGES_QUERY} slug={path}>

            {({ data: { pages } }) => {

                pageBag = getPageData(pages[0]);

                // Determine which page to query from the API
                {switch (path) {

                    case 'home':
                        return (
                            <React.Fragment>
                                <DocumentHead title="Home" />
                                <Home pageBag={pageBag} />
                            </React.Fragment>
                        )
                    case 'about':
                        return (
                            <React.Fragment>
                                <DocumentHead title="About" />
                                <About pageBag={pageBag} />
                            </React.Fragment>
                        )
                    case 'blog':
                        return (
                            <React.Fragment>
                                <DocumentHead title="Blog" />
                                <Blog pageBag={pageBag} />
                            </React.Fragment>
                        )
                    case 'contact':
                        return (
                            <React.Fragment>
                                <DocumentHead title="Contact" />
                                <Contact pageBag={pageBag} />
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
