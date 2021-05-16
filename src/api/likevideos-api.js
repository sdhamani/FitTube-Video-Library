import axios from "axios";

export default async function getLikeVideos(token) {
  const url = "https://fittube.herokuapp.com/likeVideos";

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const likeVideosObj = await axios.get(url, config);

    if (likeVideosObj.data.success) {
      return likeVideosObj.data.likedVideos;
    } else {
      return likeVideosObj.data.message;
    }
  } catch (error) {
    console.log("error while getting likeVideos", error);
    return error;
  }
}

export async function ToggleLikeVideosAPI(token, videoId) {
  const url = ` https://fittube.herokuapp.com/likeVideos/${videoId}`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const likeVideosObj = await axios.post(url, null, config);

    if (likeVideosObj.data.success) {
      return {
        success: true,
        updatedLikeVideos: likeVideosObj.data.UpdatedlikedVideos,
      };
    } else {
      return { success: false, message: likeVideosObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
