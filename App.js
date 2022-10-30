import { StyleSheet, SafeAreaView, Text, Pressable, Image } from "react-native";
import useSpotifyAuth from "./utils/useSpotifyAuth";
import { Images, Themes } from "./assets/Themes/index";
import SpotifyAuthButton from "./components/spotifyAuthButton"
import SongList from "./components/songList"
import { useState } from "react";

export default function App() {

  console.log("---- start ----")

  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  const [ passedToken, setToken] = useState(null)
  const [ passedTracks, setTracks ] = useState(null)

  const getSetTokenTracks = () => {
    getSpotifyAuth()
    setToken(token)
    setTracks(tracks)
  }

  console.log("first token:")
  console.log(token)

  let contentDisplayed = null

  console.log("1")

  if (!passedToken) {

    contentDisplayed = <SpotifyAuthButton stateFunction={() => getSetTokenTracks()}/>
    console.log("2")

  }

  console.log("3")
  
  if (passedToken && passedTracks) {
    console.log("4")
    console.log("passed token (second print)")
    console.log(passedToken)
    console.log("setting song list")

    contentDisplayed = <SongList tracks={passedTracks}/>
  }

  console.log("---- end ----\n")

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
