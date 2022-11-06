import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function getDurationMinSec(durationMilli) {
  return millisToMinutesAndSeconds(durationMilli)
}

// export default function songItem ({ navigation, external_url, albumImageURL, songTitle, artist, albumName, songDuration }) {  
export default function songItem ({ preview_url, external_url, albumImageURL, songTitle, artist, albumName, songDuration }) {  

  const navigation = useNavigation();

  return (

    <Pressable style={styles.itemContainer} onPress={() => {
      navigation.navigate("DetailedSong", {
        external_url: external_url
      });
    }}> 

      <Pressable style={styles.playButtonContainer} onPress={() => {
        navigation.navigate("PreviewSong", {
          preview_url: preview_url
        });
      }}> 
        <Ionicons name="play-circle" size={25} color="#1DB954" />
      </Pressable>
        
      <View style={styles.albumContainer}>
        <Image source={{uri: albumImageURL}} style={styles.albumImage}/>
      </View>
        
      <View style={styles.songTitleArtistContainer}>
        <Text style={styles.brightText} numberOfLines={1}>{songTitle}</Text>
        <Text style={styles.fadeText} numberOfLines={1}>{artist}</Text>
      </View>

      <View style={styles.albumNameContainer}>
        <Text style={styles.brightText} numberOfLines={1}>{albumName}</Text>
      </View>

      <View style={styles.durationContainer}>
        <Text style={styles.brightText} numberOfLines={1}>{getDurationMinSec(songDuration)}</Text>
      </View>
        
    </Pressable>

  );
}


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    height: 70
  },
  playButtonContainer: {
    alignItems: "center",
    height: "100%",
    width: "10%",
    justifyContent: "center"
  },
  albumContainer: {
    alignItems: "center",
    height: "100%",
    width: "18%",
  },
  songTitleArtistContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",
    width: "30%",
    justifyContent: "center",
    marginLeft: "3%",
    marginRight: "3%",
  },
  albumNameContainer: {
    alignItems: "flex-start",
    height: "100%",
    width: "20%",
    justifyContent: "center",
    marginRight: "3%"
  },
  durationContainer: {
    alignItems: "flex-start",
    height: "100%",
    width: "25%",
    justifyContent: "center"
  },
  albumImage: {
    height: "100%",
    aspectRatio: 1
  },
  brightText: {
    fontSize: 14,
    color: "white",
  },
  fadeText: {
    fontSize: 12,
    color: "grey"
  },

});
