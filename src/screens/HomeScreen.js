import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import useNews from "../hooks/useNews";
import { COMFY } from "../constants";

import ListView from "../components/ListView";
import ComfyCard from "../components/ComfyCard";
import CompactCard from "../components/CompactCard";

const HomeScreen = ({ navigation }) => {
  const [offset, setOffset] = useState(0);
  /* returns data and viewtype in which it will be displayed. */
  const [news, viewType] = useNews(offset);
  /* On reaching the list end, more data is fetched. */
  const handleListEnd = () => setOffset(offset + 1);
  /* Navigate to the details screen on button press. */
  const handleNavigation = (item) => navigation.navigate("Detail", { id: item._id });
  /* Render the particular cards based on the mode. */
  const renderComfy = (item) => <ComfyCard item={item} handleNavigation={handleNavigation} />;
  const renderCompact = (item) => <CompactCard item={item} handleNavigation={handleNavigation} />;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {viewType === COMFY ? (
        <ListView
          key={"1"}
          news={news}
          handleListEnd={handleListEnd}
          renderListItem={renderComfy}
        />
      ) : (
        <ListView
          key={"2"}
          news={news}
          handleListEnd={handleListEnd}
          renderListItem={renderCompact}
          columns={2}
        />
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
