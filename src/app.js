import React from 'react';
import { render } from 'react-dom'
import { IndexRoute,Router, Route,hashHistory} from 'react-router';

/**
 * Component imports
 */
import Index from './components/index.js';

/**
 * First App component (to be moved in a separate page)
 */
const App = React.createClass({
    render() {
        return (
            <section id="app">
                {this.props.children}
            </section>
        )
    }
});


/**
 * Create the routes and it is important to specify a history type (cf browserHistory etc.)
 * @type {XML}
 */
let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
        </Route>
    </Router>
);

/**
 * Initialize the router
 */
render((routes), document.getElementById("root"));