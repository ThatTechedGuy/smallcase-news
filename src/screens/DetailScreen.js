import React from "react";
import { Headline, Paragraph } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../constants";

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Headline style={styles.headline}>{item.headline}</Headline>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Paragraph style={styles.summary}>{item.summary}</Paragraph>
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
    fontWeight: 'bold'
  },
  summary: {
    paddingTop: 30,
    fontSize: 20,
  },
});

export default DetailScreen;
