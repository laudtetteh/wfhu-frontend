// Packages
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Assets
import logo from '../../../assets/images/logo.svg';
// Page Containers
// import { Home } from '../Home';
// import { About } from '../About';
// import { Blog } from '../Blog';
// import { Contact } from '../Contact';
import { Pages } from '../Pages';
// Other Containers
import Posts from "../../containers/Posts";
import Post from "../../containers/Post";
import Category from "../../containers/Category";
import Categories from "../../containers/Categories";
// Components
import { Header } from '../../components/Elements/Header';
import { FooterScripts } from '../../utils/helpers';

function App() {

    return (

        <Suspense fallback="Loading...">

            <Router>
                <React.Fragment>

                    <div id="wrapper" className="container mx-auto">

                        <Header />

                        <Switch>
                            <Route exact path="/" component={Pages} />
                            <Route exact path="/about" component={Pages} />
                            <Route exact path="/blog" component={Pages} />
                            <Route exact path="/contact" component={Pages} />
                            <Route path="/post/:id" component={Post} exact />
                            <Route path="/category/:id" component={Category} exact />
                            <Route path="/categories" component={Categories} exact />
                        </Switch>
                    </div>

                    <FooterScripts />

                </React.Fragment>
            </Router>
        </Suspense>
    );
}

export default App;
