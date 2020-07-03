import React, { useContext } from "react";
import { Text } from "react-native-paper";
import { Context as ViewContext } from "../context/ViewContext";

const DetailScreen = ({navigation}) => {
  const {
    state: { data },
  } = useContext(ViewContext);

  const {id} = navigation.getParam('id');

};

export default DetailScreen;
