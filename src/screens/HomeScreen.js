import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { Context as ViewContext } from "./../context/ViewContext";
import ListCard from "../components/Card";
import useNews from "../hooks/useNews";
import { COMFY } from "../constants";

const HomeScreen = () => {
  const [offset, setOffset] = useState(0);
  const {
    state: { viewType },
  } = useContext(ViewContext);
  
  const [news] = useNews(offset);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {viewType === COMFY ? (
        <FlatList
          data={news}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <ListCard item={item} />}
          onEndReachedThreshold={0.02} // Declaring the offset before for faster and more responsive fetching.
          onEndReached={() => setOffset(offset + 1)}
          ListFooterComponent={() => <ActivityIndicator size="small" />}
        />
      ) : (
        <Text>Hello</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  row: {
    flex: 0.5,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 0.5,
    margin: 8,
  },
});

export default HomeScreen;
