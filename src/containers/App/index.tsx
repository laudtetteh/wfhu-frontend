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
import { DocumentHead } from '../../utils/helpers';

export const App = () => {

    const [menuVisibility, setMenuVisibility] = useState(false);

    const toggleVisibility = () => {
        setMenuVisibility(!menuVisibility);
    }

    const hideMenu = () => {
        setMenuVisibility(false);
    }

    return (

        <Router>

            <React.Fragment>

                <div id="wrapper" className="flex-grow mb-60">

                    <section className="w-full">
                        <Header toggleFunction={toggleVisibility} menuVisibility={menuVisibility} hideMenu={hideMenu} />
                    </section>

                    <Switch>

                        <Route path="/" exact>
                            <PageHome />
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
                    headingColor="white"
                    containerClasses="mx-auto"
                    headingClasses="text-center font-bold"
                >
                </Footer>

            </React.Fragment>
        </Router>
    )

}
