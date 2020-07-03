import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Card, Paragraph, TouchableRipple, Title } from "react-native-paper";
import getTime from "../api/getTime";
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

  handleShow = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    const {
      item: { headline, imageUrl, createdAt },
      handleNavigation,
    } = this.props;

    const { item } = this.props;
    const { showMore } = this.state;

    return (
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: imageUrl }} />
          <Card.Content>
            <Text numberOfLines={showMore ? null : 2} style={styles.title}>
              {headline}
            </Text>
          </Card.Content>
          {showMore ? (
            <>
              <Card.Content>
                <Paragraph style={{ fontStyle: "italic" }}>{getTime(createdAt)}</Paragraph>
              </Card.Content>
              <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
                <Button
                  mode="contained"
                  onPress={() => handleNavigation(item)}
                  style={{ margin: 8 }}
                >
                  Details
                </Button>
              </TouchableRipple>
            </>
          ) : null}
          <Card.Actions>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
              <Button
                onPress={() => this.handleShow()}
                style={{ alignSelf: "flex-start", right: 5 }}
              >
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
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1,
  },
  content: {
    marginVertical: 10,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 8,
  },
  time: {
    marginTop: 10,
    fontStyle: "italic",
  },
});

export default CompactCard;
