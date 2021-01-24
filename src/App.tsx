// Packages
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Assets
import logo from '../assets/logo.svg';

// Containers
import { Home } from './containers/Home';
import { About } from './containers/About';
import { Blog } from './containers/Blog';
import { Contact } from './containers/Contact';

// Components
import { Header } from './components/Header';

export function App() {

  return (

    <Suspense fallback="Loading...">
      <Router>

        <div id="wrapper">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>

        </div>

      </Router>
    </Suspense>
  );
}
