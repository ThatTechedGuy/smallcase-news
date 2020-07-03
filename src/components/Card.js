import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph, TouchableRipple } from "react-native-paper";
import { min } from "react-native-reanimated";

const ListCard = ({ item }) => {
  const [showMore, setShowMore] = useState(false);
  const title = showMore ? "Show less" : "Show more";

  // Returns the appropriate time as an understandable string.
  const getTime = () => {
    let str = "";
    const minutes = new Date(item.createdAt).getMinutes();
    if (minutes > 60) {
      // Need to calculate hours as minutes are too long.
      const hours = (minutes / 60);
      if(hours > 24){
        const days = hours / 24;
        return `Created ${days} days ago`;
      } else return `Created ${hours} hours ago`;
    } else return `Created ${minutes} minutes ago`;
  };
  return (
    <View style={{ paddingHorizontal: 8, paddingBottom: 8 }}>
      <Card>
        <Card.Content>
          <Title numberOfLines={showMore ? null : 2}>{item.headline}</Title>
          <Paragraph numberOfLines={showMore ? null : 3} style={styles.content}>
            {item.summary}
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.imageUrl }} />
        {showMore ? (
          <Card.Content>
            <Paragraph numberOfLines={1} style={styles.time}>
              {getTime()}
            </Paragraph>
          </Card.Content>
        ) : null}
        <Card.Actions>
          <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={() => console.log("Pressed")}>
            <Button onPress={() => setShowMore(!showMore)}>{title}</Button>
          </TouchableRipple>
        </Card.Actions>
      </Card>
    </View>
  );
};

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
