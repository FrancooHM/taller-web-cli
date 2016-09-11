var TextComponent = React.createClass({
  displayName: "TextComponent",


  render: function () {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "h1",
        null,
        "Taller Web Javascript: "
      ),
      " ",
      React.createElement(
        "h2",
        null,
        this.props.text
      )
    );
  }
});

var ParentComponent = React.createClass({
  displayName: "ParentComponent",

  getInitialState: function () {
    return { text: "Estado inicial!" };
  },

  getData: function () {
    fetch('http://138.68.3.211:3000/example', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      console.debug('responseJson: ' + responseJson.data);
      this.setState({
        text: responseJson.data
      });
    }.bind(this));
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(TextComponent, { text: this.state.text }),
      React.createElement(
        "button",
        { onClick: this.getData },
        "HTTP GET"
      )
    );
  }
});

ReactDOM.render(React.createElement(ParentComponent, null), document.getElementById('container'));
