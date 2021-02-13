// Packages
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Assets
import logo from '../../../assets/images/logo.svg';
// Page Containers
import { Home } from '../Home';
import { About } from '../About';
import { Blog } from '../Blog';
import { Contact } from '../Contact';
import { NotFound } from '../NotFound';
// Other Containers
import Posts from "../../containers/Posts";
import Post from "../../containers/Post";
import Category from "../../containers/Category";
import Categories from "../../containers/Categories";
// Components
import { Header } from '../../components/Header';
import { FooterScripts } from '../../utils/helpers';
import { getSiteOptions } from '../../utils/apiHelper';
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';
// Queries
import Query from "../../components/Query";
import PAGES_QUERY from "../../queries/page/pages";
import SITEOPTIONS_QUERY from "../../queries/site-options";

function App() {

    let path = window.location.pathname.replace(/^\/|\/$/g, '');

    if(path === '' ) {
        path='home';
    }
    let pageBag;
    let siteOptions;

    return(

        <Query query={SITEOPTIONS_QUERY}>

            {({ data: { siteOption } }) => {

                siteOptions = getSiteOptions(siteOption);

                return (

                    <Suspense fallback="Loading...">

                        <Router>

                            <React.Fragment>

                                <div id="wrapper">

                                    <section className="w-full">
                                        <Header />
                                    </section>

                                    <Query query={PAGES_QUERY} slug={path}>

                                        {({ data: { pages } }) => {

                                            pageBag = getPageData(pages[0]);

                                            return (

                                                <Switch>

                                                    <Route
                                                        path='/'
                                                        render={(props) => (
                                                            <DocumentHead {...props} title="Home" />
                                                            <Home {...props} siteOptions={siteOptions} />
                                                        )}
                                                    />

                                                    <Route
                                                        path='/about'
                                                        render={(props) => (
                                                            <DocumentHead {...props} title="About" />
                                                            <Pages {...props} siteOptions={siteOptions} />
                                                        )}
                                                    />

                                                    <Route
                                                        path='/blog'
                                                        render={(props) => (
                                                            <DocumentHead {...props} title="Blog" />
                                                            <Pages {...props} siteOptions={siteOptions} />
                                                        )}
                                                    />

                                                    <Route
                                                        path='/contact'
                                                        render={(props) => (
                                                            <DocumentHead {...props} title="Contact" />
                                                            <Pages {...props} siteOptions={siteOptions} />
                                                        )}
                                                    />

                                                    <Route
                                                        path='/post/:id'
                                                        render={(props) => (
                                                            <DocumentHead {...props} title="Blog" />
                                                            <Post {...props} siteOptions={siteOptions} />
                                                        )}
                                                    />

                                                    <Route
                                                        path='/category/:id'
                                                        render={(props) => (
                                                            <DocumentHead {...props} title="Blog Categories" />
                                                            <Category {...props} siteOptions={siteOptions} />
                                                        )}
                                                    />

                                                    <Route
                                                        path='/categories'
                                                        render={(props) => (
                                                            <DocumentHead {...props} title="Blog Category" />
                                                            <Categories {...props} siteOptions={siteOptions} />
                                                        )}
                                                    />

                                                </Switch>
                                            )

                                        }}
                                    </Query>

                                </div>

                                <FooterScripts />

                            </React.Fragment>

                        </Router>

                    </Suspense>
                )
            }}

        </Query>

    )
}

export default App;
