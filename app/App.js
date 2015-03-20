var React = require('react');
var AppComponent = require('./AppComponent');
require('./styles.css');

var App = React.createClass({
    render: function() {
        return (
        <div id="background">
            <img src={require('./hello-world.jpg')} alt="Hello World" />
            <AppComponent />
        </div>
        )
    }
});

React.render(
    <App />,
    document.getElementById('app')
)