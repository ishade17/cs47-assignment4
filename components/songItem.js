import { StyleSheet, Text, View, Image } from "react-native";
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds"


function getDurationMinSec(durationMilli) {
  return millisToMinutesAndSeconds(durationMilli)
}

export default function songItem ({ listIndex, albumImageURL, songTitle, artist, albumName, songDuration }) {


  return (

    <View style={styles.itemContainer}>

      <Text style={styles.fadeText}>{listIndex}</Text>

      <Image source={albumImageURL} style={styles.albumImage}/>

      <View style={styles.songTitleArtist}>

        <Text style={styles.brightText}>{songTitle}</Text>
        <Text style={styles.fadeText}>{artist}</Text>

      </View>

      <Text style={styles.brightText}>{albumName}</Text>

      <Text style={styles.brightText}>{getDurationMinSec(songDuration)}</Text>

    </View>

  );
}



const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
  albumImage: {

  },
  songTitleArtist: {

  },
  brightText: {

  },
  fadeText: {

  }

});
