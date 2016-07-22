/**
 * Created by ramosy on 2016/7/22.
 */
var React = require('react');
var  ReactDOM = require('react-dom');
var  BarComponent = require('./BarComponent.js');
var HelloWorldComponent = React.createClass({
    displayName: 'ancestorView',
    render: function() {
        return <BarComponent />;
    }
});
ReactDOM.render(
    <HelloWorldComponent />,
    document.getElementById('content')
);
module.exports = HelloWorldComponent;