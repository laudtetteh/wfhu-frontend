/// <reference path='./index.d.ts'/>
// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from '../apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';

// Containers
import { App } from './App'

// CSS
import '../assets/css/index.css'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'),
);
