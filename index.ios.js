// Import needed code
var React = require('react-native');
var Moment = require('moment');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

var DayItem = require('./src/day-item');

// Create a react Component
var Weekdays = React.createClass({
  render: function(){
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>Days of the Week:</Text>
        {this.days()}
      </View>
    );
  },

  days: function(){
    var dayItems = [];

    for(var i=0; i< 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(<DayItem day={day} daysUntil={i}/>)
    }

    return dayItems
  }
});

// Style the react Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    fontSize: 30
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){return Weekdays})
