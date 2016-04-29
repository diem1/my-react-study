var Hello = React.createClass({
    render: function() {
        return React.DOM.div({}, 'Hello ' + this.props.name);
    }
  });
  Hello = React.createFactory(Hello);

  ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('contnent'));
