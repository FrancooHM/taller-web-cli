var TextComponent = React.createClass({

  render: function() {
    return (
      <div className="row">
        <h1>Taller Web Javascript: </h1> <h2>{this.props.text}</h2>
      </div>
    )
  }
});

var ParentComponent = React.createClass({
  getInitialState: function() {
  return {text: "Estado inicial!"};
  },

  getData: function () {
    fetch('http://138.68.3.211:3000/example', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(responseJson) {
      console.debug('responseJson: ' + responseJson.data);
      this.setState({
        text: responseJson.data
      });
    }.bind(this))
  },

  render: function() {
    return (

      <div className="row">
        <TextComponent text={this.state.text}/>
        <button onClick={this.getData}>
          HTTP GET
        </button>
      </div>
    )
  }
});

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('container')
);
