import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Images } from "../assets/Themes/index";
import {WebView} from "react-native-webview";


const DetailedSong = ({ navigation, route }) => {
  console.log(route)
  const { url } = route.params.url

  return (
      <WebView source={{ uri: url }} />
  );
}

export default DetailedSong;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
});
