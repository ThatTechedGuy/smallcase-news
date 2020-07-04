import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph, TouchableRipple } from "react-native-paper";
import getTime from "./../api/getTime";
import ContainedButton from "./DetailButton";
import ShowMoreButton from "./ShowMoreButton";

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
          <Card.Content>
            <Title numberOfLines={titleLines}>{headline}</Title>
            <Paragraph numberOfLines={summaryLines} style={styles.content}>
              {summary}
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: imageUrl }} />
          {showMore ? (
            <View style={styles.row}>
              <Card.Content>
                <Paragraph style={styles.time}>{getTime(createdAt)}</Paragraph>
              </Card.Content>
              <ContainedButton text="Details" handlePress={() => handleNavigation(item)} />
            </View>
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
  container: { paddingHorizontal: 8, paddingBottom: 8 },
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
