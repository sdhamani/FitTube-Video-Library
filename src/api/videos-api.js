import axios from "axios";

export default async function GetVideos() {
  const url = "http://localhost:3000/videos";
  try {
    const videosObj = await axios.get(url);
    if (videosObj.data.success) {
      return { success: true, videos: videosObj.data.Videos };
    } else {
      return { success: false, error: videosObj.data.message };
    }
  } catch (error) {
    console.log("Error while fetching products", error);
    return { success: false, error: error };
  }
}
