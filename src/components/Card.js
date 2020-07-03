import React, { useState } from "react";
import { View } from "react-native";
import { Button, Card, Title, Paragraph, TouchableRipple } from "react-native-paper";

const ListCard = ({ item }) => {
  const [showMore, setShowMore] = useState(false);
  const title = showMore ? "Show less" : "Show more";
  1;
  return (
    <View style={{ paddingHorizontal: 8, paddingBottom: 8 }}>
      <Card>
        <Card.Content>
          <Title numberOfLines={showMore ? null : 2}>{item.headline}</Title>
          <Paragraph numberOfLines={showMore ? null : 3}>{item.summary}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.imageUrl }} />
        <Card.Actions>
          <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={() => console.log("Pressed")}>
            <Button onPress={() => setShowMore(!showMore)}>{title}</Button>
          </TouchableRipple>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ListCard;
