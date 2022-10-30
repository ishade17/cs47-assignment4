import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Images, Themes } from "../assets/Themes/index";
import SongItem from "./songItem"


const renderSongItem = ({ item, index }) => (
  <SongItem
    listIndex={index}
    albumImageURL={item.songName} //change
    songTitle={item.songName} //change
    artist={item.songName} //change
    albumName={item.songName} //change
    songDuration={item.songName} //change
  />
);

const songList = (tracks) => {

  return (
    <View style={styles.container}>

      <View style={styles.titleRow}>
        <Image source={Images.spotify} style={styles.spotifyIcon}/>
        <Text style={styles.titleText}>My Top Tracks</Text>
      </View>

      <FlatList
        data={tracks} // the array of data that the FlatList displays
        renderItem={(item) => renderSongItem(item)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
      />

    </View>    
 
  );
}


export default songList;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignItems: "center",
  },
  spotifyIcon: {
    width: 30,
    height: 30,
    margin: 5
  },
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
  }
});
