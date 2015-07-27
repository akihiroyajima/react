var Hello = React.createClass({
  render() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
});

React.render(<Hello name="React" />, document.getElementById("app"));
