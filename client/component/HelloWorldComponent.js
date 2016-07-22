/**
 * Created by ramosy on 2016/7/22.
 */
var React = require('react');
var  ReactDOM = require('react-dom');
var HelloWorldComponent = React.createClass({
    displayName: 'HelloWorldComponent',
    render: function() {
        return (<div>Hello world</div>);
    }
});
ReactDOM.render(
    <HelloWorldComponent />,
    document.getElementById('content')
);
module.exports = HelloWorldComponent;