import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Context as ViewContext } from "./../context/ViewContext";
import useNews from "../hooks/useNews";
import { COMFY } from "../constants";

import ListView from "../containers/ListView";
import ComfyCard from "../components/ComfyCard";
import CompactCard from "../components/CompactCard";

const HomeScreen = ({ navigation }) => {
  const [offset, setOffset] = useState(0);
  /* To know the current view type */
  const {
    state: { viewType },
  } = useContext(ViewContext);

  const [news] = useNews(offset);

  const handleListEnd = () => setOffset(offset + 1);

  const handleNavigation = (id) => navigation.navigate("Detail", { id });

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
