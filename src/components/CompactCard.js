import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Paragraph, TouchableRipple, Title } from "react-native-paper";

/* 
* Similar input, similar output. Shallow comparison in ComponentDidUpdate can be afforded
  because the list is long and future state is appended instead of being reconstructed.
*/
class CompactCard extends React.PureComponent {
  constructor(props) {
    super(props);
    // initial state
    this.state = { showMore: false };
  }

  /* Returns the time with an appropriate metric as an understandable string. */
  getTime = () => {
    const {
      item: { createdAt },
    } = this.props;
    const dateObj = new Date(createdAt);
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    return `Created at : ${day}/${month}/${year}`;
  };

  handleShow = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    const {
      item: { headline, imageUrl },
    } = this.props;
    const { showMore } = this.state;
    return (
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: imageUrl }} />
          <Card.Content>
            <Paragraph numberOfLines={showMore ? null : 2} style={styles.title}>
              {headline}
            </Paragraph>
          </Card.Content>
          {showMore ? (
            <Card.Content>
              <Paragraph>{this.getTime()}</Paragraph>
              <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
                <Button onPress={() => this.handleShow()}>
                  Details
                </Button>
              </TouchableRipple>
            </Card.Content>
          ) : null}
          <Card.Actions>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
              <Button onPress={() => this.handleShow()}>
                {showMore ? "Show less" : "Show more"}
              </Button>
            </TouchableRipple>
          </Card.Actions>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flex: 1,
  },
  content: {
    marginVertical: 10,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
  },
  time: {
    marginTop: 10,
    fontStyle: "italic",
  },
});

export default CompactCard;
