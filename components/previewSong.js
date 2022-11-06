import {WebView} from "react-native-webview";

const PreviewSong = ({ navigation, route }) => {
  return (
      <WebView source={{ uri: route.params.preview_url }} />
  );
}

export default PreviewSong;
