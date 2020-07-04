import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Card, Paragraph, TouchableRipple, Title } from "react-native-paper";
import getTime from "../api/getTime";
import ContainedButton from "./DetailButton";
import ShowMoreButton from "./ShowMoreButton";
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
    const { handleNavigation } = this.props;
    const { item } = this.props;
    const { headline, summary, createdAt, imageUrl } = item;

    const { showMore } = this.state;
    const titleLines = showMore ? null : 2;
    const showMoreText = showMore ? "Show less" : "Show more";
    const summaryLines = showMore ? null : 3;

    return (
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: imageUrl }} />
          <Card.Content>
            <Text numberOfLines={titleLines} style={styles.title}>
              {headline}
            </Text>
          </Card.Content>
          {showMore ? (
            <>
              <Card.Content>
                <Paragraph style={{ fontStyle: "italic" }}>{getTime(createdAt)}</Paragraph>
              </Card.Content>
              <ContainedButton text="Details" handlePress={() => handleNavigation(item)} />
            </>
          ) : null}
          <Card.Actions>
            <ShowMoreButton text={showMoreText} handlePress={() => this.handleShow()} />
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
