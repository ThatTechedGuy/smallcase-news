import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from "react-native";
import api from "../api/newsApi";
import ListCard from "../components/Card";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      console.log("FETCHING DATA");
      setLoading(true);
      const response = await api.get("/getNews", { params: { count: 20, offset } });
      const { data } = response.data;
      const requiredData = data.map((item) => {
        const { _id, headline, summary, createdAt, imageUrl } = item;
        return { _id, headline, summary, createdAt, imageUrl };
      });
      setLoading(false);
      setData(requiredData);
    };

    fetchData();
  }, [offset]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ListCard item={item} />}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
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
