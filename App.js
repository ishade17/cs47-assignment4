import { StyleSheet, SafeAreaView } from "react-native";
import useSpotifyAuth from "./utils/useSpotifyAuth";
import { Themes } from "./assets/Themes/index";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";

import SpotifyAuthButton from "./components/spotifyAuthButton"
import SongList from "./components/songList"
import DetailedSongScreen from "./components/detailedSong"
import PreviewSongScreen from "./components/previewSong"

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  let contentDisplayed = null

  if (!token) {
    contentDisplayed = <SpotifyAuthButton stateFunction={() => getSpotifyAuth()}/>
  }
  
  if (token && tracks) {
    contentDisplayed = <SongList navigation={navigation} tracks={tracks}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DetailedSong" component={DetailedSongScreen}
          options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTintColor: "white", title: "Song Details"}} />
        <Stack.Screen name="PreviewSong" component={PreviewSongScreen}
          options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTintColor: "white", title: "Song Preview"}} />
      </Stack.Navigator>
    </NavigationContainer>
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
