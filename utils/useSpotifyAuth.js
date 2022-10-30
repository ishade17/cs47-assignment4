import getEnv from "./env";
import { Platform } from "react-native";
import { useState, useEffect } from "react";
import {
  ResponseType,
  useAuthRequest,
  makeRedirectUri,
} from "expo-auth-session";
import { getMyTopTracks, getAlbumTracks } from "./apiOptions";

import * as WebBrowser from "expo-web-browser";

const {
  REDIRECT_URI,
  SCOPES,
  CLIENT_ID,
  ALBUM_ID,
  SPOTIFY_API: { DISCOVERY },
} = getEnv();

// needed so that the browswer closes the modal after auth token
WebBrowser.maybeCompleteAuthSession();

const useSpotifyAuth = (ALBUM_ONLY = false) => {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  // console.log("authorizing...")
  const [_, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri:
        Platform.OS !== "web"
          ? REDIRECT_URI
          : makeRedirectUri({
              // scheme: null, // optional for web, mobile default: 'exp'
              preferLocalhost: true,
              isTripleSlashed: true,
              // useProxy: true, // not needed afaict, default: false
            }),
    },
    DISCOVERY
  );
  // console.log("token:")
  // console.log(token)
  console.log("token is set (in useSpotifyAuth)")
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
    if (Platform.OS === "web" && location.hash)
      setToken(location.hash.split("=")[1]);
  }, [response]);

  useEffect(() => {
    const fetchTracks = async () => {
      let res;
      switch (ALBUM_ONLY) {
        case true:
          res = await getAlbumTracks(ALBUM_ID, token);
          break;
        default:
          res = await getMyTopTracks(token);
          break;
      }
      setTracks(res);
    };

    if (token) {
      // Authenticated, make API request
      // console.log("fetching tracks")
      fetchTracks();
      // console.log(tracks)
      console.log("tracks are fetched (in useSpotifyAuth)")

    }
  }, [token]);

  const setLoggedIn = () => {
    console.log("authorization function called")
    promptAsync(
      Platform.OS === "web"
        ? { windowName: "_self" }
        : /* this is for forcing the popup to be created within the same window so needs same context */
          {}
    );
  };
  // TO DO: pick better naming conventions
  return { token: token ?? undefined, tracks, getSpotifyAuth: setLoggedIn };
};

export default useSpotifyAuth;