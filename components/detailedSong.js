import {WebView} from "react-native-webview";

const DetailedSong = ({ navigation, route }) => {
  return (
      <WebView source={{ uri: route.params.external_url }} />
  );
}

export default DetailedSong;
