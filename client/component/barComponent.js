/**
 * Created by ramosy on 2016/7/22.
 */
    require("../less/style.less");
var React = require('react');
var barComponent = React.createClass({
    displayName: 'barComponent',
    render: function() {
        return (<h3 className="main-tit text-center">宝沃车联网运营平台</h3>);
    }
});
module.exports = barComponent;