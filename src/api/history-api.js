import axios from "axios";

export default async function getHistory(token) {
  const url = "http://localhost:3000/history";

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const historyObj = await axios.get(url, config);

    if (historyObj.data.success) {
      return historyObj.data.history;
    } else {
      return historyObj.data.message;
    }
  } catch (error) {
    console.log("error while getting history", error);
    return error;
  }
}

export async function updateHistoryAPI(token, videoId) {
  const url = `http://localhost:3000/history/${videoId}`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const historyObj = await axios.post(url, null, config);

    if (historyObj.data.success) {
      return {
        success: true,
        updatedHistory: historyObj.data.Updatedhistory,
      };
    } else {
      return { success: false, message: historyObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
