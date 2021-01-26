// Packages
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Assets
import logo from '../../../assets/images/logo.svg';

// Containers
import { Home } from '../Home';
import { About } from '../About';
import { Blog } from '../Blog';
import { Contact } from '../Contact';

// Components
import { Header } from '../../components/elements/Header';
import Posts from "../../containers/Posts";
import Post from "../../containers/Post";
import Category from "../../containers/Category";

const topMenu = [
    { name: 'About', URL: '/about' },
    { name: 'Blog', URL: '/blog' },
    { name: 'Contact', URL: '/contact' }
];

function App() {

    return (

        <Suspense fallback="Loading...">

            <Router>

                <div id="wrapper">

                    <Header links={topMenu}/>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/blog" component={Blog} posts={Posts} />
                        <Route exact path="/contact" component={Contact} />

                        <Route path="/post/:id" component={Post} exact />
                        <Route path="/category/:id" component={Category} exact />
                    </Switch>

                </div>

            </Router>

        </Suspense>
    );
}

export default App;
