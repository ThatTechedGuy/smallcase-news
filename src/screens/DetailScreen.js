import React, { useContext } from "react";
import { Paragraph } from "react-native-paper";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import getTime from "../api/getTime";
import { Context as ViewContext } from "../context/ViewContext";

const DetailScreen = ({ route }) => {
  const {
    state: { news },
  } = useContext(ViewContext);
  const { id } = route.params;
  const item = news.find((i) => i._id === id);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.headline}>{item.headline}</Text>
      <Paragraph style={styles.summary}>
        {item.summary === undefined ? "Summary text" : item.summary}
      </Paragraph>
      <Paragraph style={styles.time}>{getTime(item.createdAt)}</Paragraph>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 16,
    textAlign: "center",
    marginVertical: 8,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 200,
  },
  headline: {
    marginHorizontal: 16,
    fontSize: 30,
    fontWeight: "bold",
  },
  summary: {
    marginHorizontal: 16,
    fontSize: 15,
  },
  time: {
    marginHorizontal: 16,
    fontStyle: "italic",
    fontSize: 16,
  },
});

export default DetailScreen;
