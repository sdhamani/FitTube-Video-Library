import axios from "axios";

export default async function getWatchVideos(token) {
  const url = "https://fittube.herokuapp.com/watchlater";

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const watchLaterObj = await axios.get(url, config);

    if (watchLaterObj.data.success) {
      return watchLaterObj.data.watchLater;
    } else {
      return watchLaterObj.data.message;
    }
  } catch (error) {
    console.log("error while getting likeVideos", error);
    return error;
  }
}

export async function ToggleWatchLaterAPI(token, videoId) {
  const url = `https://fittube.herokuapp.com/watchlater/${videoId}`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const watchLaterObj = await axios.post(url, null, config);

    if (watchLaterObj.data.success) {
      return {
        success: true,
        updatedWatchLater: watchLaterObj.data.UpdatedwatchLater,
      };
    } else {
      return { success: false, message: watchLaterObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
