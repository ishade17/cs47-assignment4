import { StyleSheet, SafeAreaView } from "react-native";
import useSpotifyAuth from "./utils/useSpotifyAuth";
import { Themes } from "./assets/Themes/index";
import SpotifyAuthButton from "./components/spotifyAuthButton"
import SongList from "./components/songList"

export default function App() {

  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  let contentDisplayed = null

  if (!token) {
    contentDisplayed = <SpotifyAuthButton stateFunction={() => getSpotifyAuth()}/>
  }
  
  if (token && tracks) {
    contentDisplayed = <SongList tracks={tracks}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
