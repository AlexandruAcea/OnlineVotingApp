import React, { Component } from "react";
import { View, Text } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Voturi",
    headerTitleStyle: {
      fontWeight: "normal"
    }
  };

  render() {
    const { textStyle, containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>
          Momentan nu exista niciun vot,{"\n"}va rugam reveniti!
        </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%"
  },

  textStyle: {
    fontSize: 20,
    color: "black",
    marginRight: 20,
    marginLeft: 20,
    textAlign: "center"
  }
};

export default HomeScreen;
