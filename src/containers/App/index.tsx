// Packages
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Assets
import logo from '../../../assets/images/logo.svg';
// Page Containers
import { PageHome } from '../PageHome';
import { PageBio } from '../PageBio';
import { PageEvents } from '../PageEvents';
import { PageBlog } from '../PageBlog';
import { PageContact } from '../PageContact';
import { PageNotFound } from '../PageNotFound';
// Other Containers
import { SinglePost } from "../../containers/SinglePost";
import { SingleEvent } from "../../containers/SingleEvent";
import { SingleCategory } from "../../containers/SingleCategory";
// Components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
// Utilities
import { getSiteOptions } from '../../utils/apiHelper';
import { DocumentHead } from '../../utils/helpers';
// Queries
import { Query } from "../../components/Query";
import { SITEOPTIONS_QUERY } from "../../queries";

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
                                        <PageHome siteOptions={siteOptions} />
                                    </Route>

                                    <Route path="/bio" exact>
                                        <PageBio />
                                    </Route>

                                    <Route path="/events" exact>
                                        <PageEvents />
                                    </Route>

                                    <Route path="/event/:slug">
                                        <SingleEvent />
                                    </Route>

                                    <Route path="/blog" exact>
                                        <PageBlog />
                                    </Route>

                                    <Route path="/post/:slug">
                                        <SinglePost />
                                    </Route>

                                    <Route path="/category/:slug">
                                        <SingleCategory />
                                    </Route>

                                    <Route path="/contact" exact>
                                        <PageContact />
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
