import { StyleSheet, SafeAreaView } from "react-native";
import useSpotifyAuth from "./utils/useSpotifyAuth";
import { Themes } from "./assets/Themes/index";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";

import SpotifyAuthButton from "./components/spotifyAuthButton"
import SongList from "./components/songList"
import DetailedSongScreen from "./components/detailedSong"

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  let contentDisplayed = null

  if (!token) {
    contentDisplayed = <SpotifyAuthButton stateFunction={() => getSpotifyAuth()}/>
  }
  
  if (token && tracks) {
    console.log("navigation from app.js")
    console.log(navigation)
    contentDisplayed = <SongList navigation={navigation} tracks={tracks}/>
    // contentDisplayed = <SongList tracks={tracks}/>
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
        <Stack.Screen name="DetailedSong" component={DetailedSongScreen}/>
        {/* <Stack.Screen name="Home" component={} options={{headerShown: false}}/> */}
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
