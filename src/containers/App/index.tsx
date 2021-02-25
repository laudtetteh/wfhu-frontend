// Packages
import React, { Component, useState } from 'react';
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
import { Posts } from "../../containers/Posts";
import { PostSingle } from "../../containers/Post";
import { Category } from "../../containers/Category";
import { Categories } from "../../containers/Categories";
// Components
import { Header } from '../../components/Header';
import { getSiteOptions } from '../../utils/apiHelper';
// Utilities
import { DocumentHead } from '../../utils/helpers';
// Queries
import Query from "../../components/Query";
import SITEOPTIONS_QUERY from "../../queries/site-options";

export const App = () => {

    const [menuVisibility, setMenuVisibility] = useState(false);

    const toggleVisibility = () => {
        setMenuVisibility(!menuVisibility);
    }

    const hideMenu = () => {
        setMenuVisibility(false);
    }

    return  (

        <Query query={SITEOPTIONS_QUERY}>

            {({ data: { siteOption } }) => {

                const siteOptions = getSiteOptions(siteOption);

                return (

                    <Router>

                        <React.Fragment>

                            <div id="wrapper" className="flex-grow">

                                <section className="w-full">
                                    <Header toggleFunction={toggleVisibility} menuVisibility={menuVisibility} hideMenu={hideMenu} />
                                </section>

                                <Switch>

                                    <Route path="/" exact>
                                        <Home siteOptions={siteOptions} />
                                    </Route>

                                    <Route path="/about" exact>
                                        <About siteOptions={siteOptions} />
                                    </Route>

                                    <Route path="/blog" exact>
                                        <Blog siteOptions={siteOptions} />
                                    </Route>

                                    <Route path="/contact" exact>
                                        <Contact siteOptions={siteOptions} />
                                    </Route>

                                    <Route path="/post/:slug">
                                        <PostSingle siteOptions={siteOptions} />
                                    </Route>

                                    <Route path="/category/:slug">
                                        <Category siteOptions={siteOptions} />
                                    </Route>

                                </Switch>

                            </div>

                        </React.Fragment>
                    </Router>
                )
            }}

        </Query>
    )

}
