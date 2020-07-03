import React from "react";
import { View } from "react-native";
import { Button, Card, Title, Paragraph, Surface, TouchableRipple } from "react-native-paper";

const ListCard = ({ item }) => {
  return (
    <View style={{ paddingHorizontal: 8, paddingBottom: 8 }}>
      <Card>
        <Card.Content>
          <Title>{item.headline}</Title>
          <Paragraph>{item.summary}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.imageUrl }} />
        <Card.Actions>
          <TouchableRipple>
            <Button>Show more</Button>
          </TouchableRipple>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ListCard;
