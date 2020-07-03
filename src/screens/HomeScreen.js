import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { Button, Text, ActivityIndicator } from "react-native-paper";

import api from "../api/newsApi";
import ListCard from "../components/Card";

const HomeScreen = () => {
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/getNews", { params: { count: 20, offset: offset * 20 } });
      const { data } = response.data;
      const requiredData = data.map((item) => {
        const { _id, headline, summary, createdAt, imageUrl } = item;
        return { _id, headline, summary, createdAt, imageUrl };
      });
      setNews(news.concat(requiredData));
    };

    fetchData();
  }, [offset]);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListCard item={item} />}
        onEndReachedThreshold={0.1}
        onEndReached={() => setOffset(offset + 1)}
        ListFooterComponent={() => <ActivityIndicator size="small" />}
      />
      <StatusBar style="auto" />
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
