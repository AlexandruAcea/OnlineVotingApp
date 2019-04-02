import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "./components/ListItem";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Voturi",
    headerTitleStyle: {
      fontWeight: "normal"
    }
  };

  rowPressed = () => {
    const { navigate } = this.props.navigation;
    navigate("DetailsScreen");
  };

  renderRow(item) {
    return <ListItem titlu={item.titlu} func={this.rowPressed} />;
  }

  render() {
    const { textStyle, containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <FlatList
          data={list}
          renderItem={({ item }) => this.renderRow(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const list = [{ titlu: "Europarlamentare" }, { titlu: "Prezidentiale" }];

const styles = {
  containerStyle: {
    height: "80%",
    flex: 1,
    paddingTop: 30
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
