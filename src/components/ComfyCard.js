import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph, TouchableRipple } from "react-native-paper";

/* 
* Similar input, similar output. Shallow comparison in ComponentDidUpdate can be afforded
  because the list is long and future state is appended instead of being reconstructed.
*/
class ListCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { showMore: false };
  }

  /* Returns the time with an appropriate metric as an understandable string. */
  getTime = () => {
    const minutes = new Date(this.props.item.createdAt).getMinutes();
    if (minutes > 60) {
      // Need to calculate hours as minutes are too long.
      const hours = minutes / 60;
      if (hours > 24) {
        const days = hours / 24;
        return `Created ${days} days ago`;
      } else return `Created ${hours} hours ago`;
    } else return `Created ${minutes} minutes ago`;
  };

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
            <Card.Content>
              <Paragraph numberOfLines={1} style={styles.time}>
                {this.getTime()}
              </Paragraph>
            </Card.Content>
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
  time: {
    marginTop: 10,
    fontStyle: "italic",
  },
});

export default ListCard;
