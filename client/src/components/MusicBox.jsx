var React = require('react');
var TuneList = require('./TuneList');

var MusicBox = React.createClass({
  getInitialState: function() {
    return { tunes: []}
  },

  componentDidMount: function() {
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      var tunes = data.feed.entry;
      this.setState({tunes: tunes})
      console.log(tunes);
    }.bind(this)
    request.send();
  },

  setFocusTune: function(index) {
    var newTune = this.state.tunes[index];
    this.setState({focusTune: newTune});
    console.log(newTune)
  },

  render: function() {
    console.log(this.state.tunes);
    return(
      <div>
        <h1>THIS WEEKS TOP BANGERZ</h1>
        <TuneList tunes={this.state.tunes}></TuneList>

      </div>
    )

  }

})

module.exports = MusicBox;