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

function App() {

    return (

        <Suspense fallback="Loading...">

            <Router>

                <React.Fragment>

                    <div id="wrapper">

                        <section className="w-full">
                            <Header />
                        </section>

                        <Switch>
                            <Route exact path="/" component={Pages} />
                            <Route exact path="/about" component={Pages} />
                            <Route exact path="/blog" component={Pages} />
                            <Route exact path="/contact" component={Pages} />
                            <Route exact path="/post/:id" component={Post} />
                            <Route exact path="/category/:id" component={Category} />
                            <Route exact path="/categories" component={Categories} />
                        </Switch>

                    </div>

                    <FooterScripts />

                </React.Fragment>

            </Router>

        </Suspense>
    );
}

export default App;
