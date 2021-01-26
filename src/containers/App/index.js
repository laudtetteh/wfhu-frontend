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
// Other Containers
import Posts from "../../containers/Posts";
import Post from "../../containers/Post";
import Category from "../../containers/Category";
import Categories from "../../containers/Categories";
// Components
import { Header } from '../../components/Elements/Header';
import Query from "../../components/Query";
// Queries
import TOPMENU_QUERY from "../../queries/top-menu/top-menu";

function App() {

    return (

        <Suspense fallback="Loading...">

            <Router>
                <React.Fragment>
                    <div id="wrapper">

                        <Query query={TOPMENU_QUERY}>
                            {({ data: { topMenu } }) => {
                              return <Header links={topMenu.link} />;
                            }}
                        </Query>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/contact" component={Contact} />
                            <Route path="/post/:id" component={Post} exact />
                            <Route path="/category/:id" component={Category} exact />
                            <Route path="/categories" component={Categories} exact />
                        </Switch>

                    </div>
                </React.Fragment>
            </Router>
        </Suspense>
    );
}

export default App;
