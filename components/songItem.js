import { StyleSheet, Text, View, Image } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds"


function getDurationMinSec(durationMilli) {
  return millisToMinutesAndSeconds(durationMilli)
}

export default function songItem ({ listIndex, albumImageURL, songTitle, artist, albumName, songDuration }) {


  return (

    <View style={styles.itemContainer}>

      <View style={styles.indexContainer}>
        <Text style={styles.fadeText} numberOfLines={1}>{listIndex}</Text>
      </View>
        
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
        
    </View>

  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    height: 70
  },
  indexContainer: {
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
