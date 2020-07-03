import React from "react";
import { Paragraph } from "react-native-paper";
import { View, StyleSheet, Image, Text } from "react-native";
import getTime from "../api/getTime";

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{item.headline}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Paragraph style={styles.summary}>{item.summary}</Paragraph>
      <Paragraph style={styles.time}>{getTime(item.createdAt)}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    flex: 0.4,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  headline: {
    paddingTop: 30,
    fontSize: 40,
    marginBottom: 16,
    fontWeight: "bold",
  },
  summary: {
    paddingTop: 30,
    fontSize: 20,
  },
  time: {
    ...this.summary,
    fontStyle: "italic",
  },
});

export default DetailScreen;
