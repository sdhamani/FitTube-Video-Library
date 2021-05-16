import axios from "axios";

export default async function getPlaylist(token) {
  const url = "https://fittube.herokuapp.com/playlist";

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const playlistsObj = await axios.get(url, config);

    if (playlistsObj.data.success) {
      return playlistsObj.data.playlist;
    } else {
      return playlistsObj.data.message;
    }
  } catch (error) {
    console.log("error while getting likeVideos", error);
    return error;
  }
}

export async function updatePlaylistAPI(token, videoId, playlistName) {
  const playlist = {
    playlistName: playlistName,
  };

  const url = ` https://fittube.herokuapp.com/playlist/create/${videoId}`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const playlistObj = await axios.post(url, playlist, config);

    if (playlistObj.data.success) {
      return {
        success: true,
        updatedPlaylist: playlistObj.data.playlist,
      };
    } else {
      return { success: false, message: playlistObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function renamePlaylistAPI(token, playlistName, newName) {
  const playlist = {
    playlistName: playlistName,
    newName: newName,
  };

  const url = ` https://fittube.herokuapp.com/playlist/rename`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const playlistObj = await axios.post(url, playlist, config);

    if (playlistObj.data.success) {
      return {
        success: true,
        updatedPlaylist: playlistObj.data.playlist,
      };
    } else {
      return { success: false, message: playlistObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
