import React from "react";
import { FlatList } from "react-native";
import ListCard from "../components/Card";
import { ActivityIndicator } from "react-native-paper";

const ListView = ({ news, handleListEnd, renderListItem, columns = null}) => {
  return (
    <FlatList
      data={news}
      numColumns={columns}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => renderListItem(item)}
      onEndReachedThreshold={0.02} // Declaring the offset before for faster and more responsive fetching.
      onEndReached={handleListEnd}
      ListFooterComponent={() => <ActivityIndicator size="small" />}
    />
  );
};

export default ListView;
