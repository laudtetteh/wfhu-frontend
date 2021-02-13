// Packages
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Assets
import logo from '../../../assets/images/logo.svg';
// Pages Container
import { Pages } from '../Pages';
// Other Containers
import Posts from "../../containers/Posts";
import Post from "../../containers/Post";
import Category from "../../containers/Category";
import Categories from "../../containers/Categories";
// Components
import { Header } from '../../components/Header';
import { FooterScripts } from '../../utils/helpers';
import { getSiteOptions } from '../../utils/apiHelper';
// Queries
import Query from "../../components/Query";
import SITEOPTIONS_QUERY from "../../queries/site-options";

function App() {

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

                                    <Switch>

                                        <Route
                                            path='/'
                                            render={(props) => (
                                                <Pages {...props} siteOptions={siteOptions} />
                                            )}
                                        />

                                        <Route
                                            path='/about'
                                            render={(props) => (
                                                <Pages {...props} siteOptions={siteOptions} />
                                            )}
                                        />

                                        <Route
                                            path='/blog'
                                            render={(props) => (
                                                <Pages {...props} siteOptions={siteOptions} />
                                            )}
                                        />

                                        <Route
                                            path='/contact'
                                            render={(props) => (
                                                <Pages {...props} siteOptions={siteOptions} />
                                            )}
                                        />

                                        <Route
                                            path='/post/:id'
                                            render={(props) => (
                                                <Post {...props} siteOptions={siteOptions} />
                                            )}
                                        />

                                        <Route
                                            path='/category/:id'
                                            render={(props) => (
                                                <Category {...props} siteOptions={siteOptions} />
                                            )}
                                        />

                                        <Route
                                            path='/categories'
                                            render={(props) => (
                                                <Categories {...props} siteOptions={siteOptions} />
                                            )}
                                        />

                                    </Switch>

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
