import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph, TouchableRipple } from "react-native-paper";
import getTime from "./../api/getTime";

/* 
* Similar input, similar output. Shallow comparison in ComponentDidUpdate can be afforded
  because the list is long and future state is appended instead of being reconstructed.
*/
class ListCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { showMore: false };
  }

  handleShow = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    return (
      <View style={{ paddingHorizontal: 8, paddingBottom: 8 }}>
        <Card>
          <Card.Content>
            <Title numberOfLines={this.state.showMore ? null : 2}>{this.props.item.headline}</Title>
            <Paragraph numberOfLines={this.state.showMore ? null : 3} style={styles.content}>
              {this.props.item.summary}
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: this.props.item.imageUrl }} />
          {this.state.showMore ? (
            <View style={styles.row}>
              <Card.Content>
                <Paragraph style={styles.time}>{getTime(this.props.item.createdAt)}</Paragraph>
              </Card.Content>
              <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
                <Button
                  mode="contained"
                  onPress={() => handleNavigation(this.props.item)}
                  style={{ margin: 8 }}
                >
                  Details
                </Button>
              </TouchableRipple>
            </View>
          ) : null}
          <Card.Actions>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
              <Button onPress={() => this.handleShow()}>
                {this.state.showMore ? "Show less" : "Show more"}
              </Button>
            </TouchableRipple>
          </Card.Actions>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 10,
  },
  row: { flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "space-between" },
  time: {
    marginTop: 10,
    fontStyle: "italic",
  },
});

export default ListCard;
