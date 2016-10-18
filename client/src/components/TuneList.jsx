var React = require('react');

var TuneList = React.createClass({

  getTunes: function() {
    var individualTrack = this.props.tunes.map(function(tune, index) {
      return tune['im:name'];
    })
  },

  render: function() {
    var li = this.props.tunes.map(function(tune, index) {
      return <li key={index} value={index}>{index+1} : {tune.title.label}</li>
      console.log(this)
    })
    return(
      <ul start="1">
        {li}
      </ul>
    )
  }
})

module.exports = TuneList;