// Packages
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Assets
import logo from '../../../assets/images/logo.svg';
// Page Containers
import { Home } from '../Home';
import { Bio } from '../Bio';
import { Events } from '../Events';
import { Blog } from '../Blog';
import { Contact } from '../Contact';
import { NotFound } from '../NotFound';
// Other Containers
import { Posts } from "../../containers/Posts";
import { Post } from "../../containers/Post";
import { Event } from "../../containers/Event";
import { GetEvents } from "../../containers/GetEvents";
import { Category } from "../../containers/Category";
import { Categories } from "../../containers/Categories";
// Components
import { Header } from '../../components/Header';
import { getSiteOptions } from '../../utils/apiHelper';
import { Footer } from '../../components/Footer';
// Utilities
import { DocumentHead } from '../../utils/helpers';
// Queries
import { Query } from "../../components/Query";
import { SITEOPTIONS_QUERY } from "../../queries/site-options";

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

                            <div id="wrapper" className="flex-grow mb-60">

                                <section className="w-full">
                                    <Header toggleFunction={toggleVisibility} menuVisibility={menuVisibility} hideMenu={hideMenu} />
                                </section>

                                <Switch>

                                    <Route path="/" exact>
                                        <Home siteOptions={siteOptions} />
                                    </Route>

                                    <Route path="/bio" exact>
                                        <Bio />
                                    </Route>

                                    <Route path="/events" exact>
                                        <Events />
                                    </Route>

                                    <Route path="/event/:slug">
                                        <Event />
                                    </Route>

                                    <Route path="/blog" exact>
                                        <Blog />
                                    </Route>

                                    <Route path="/post/:slug">
                                        <Post />
                                    </Route>

                                    <Route path="/category/:slug">
                                        <Category />
                                    </Route>

                                    <Route path="/contact" exact>
                                        <Contact />
                                    </Route>

                                </Switch>

                            </div>

                            <Footer
                                siteOptions={siteOptions}
                                headingColor="white"
                                containerClasses="mx-auto"
                                headingClasses="text-center font-bold"
                            />

                        </React.Fragment>
                    </Router>
                )
            }}

        </Query>
    )

}
