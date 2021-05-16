import axios from "axios";

export default async function LoginUser(emailId, password) {
  const url = "https://fittube.herokuapp.com/user/login";
  try {
    const userObj = {
      email: emailId,
      password: password,
    };

    const loginObj = await axios.post(url, userObj);

    if (loginObj.data.success) {
      return loginObj.data;
    } else {
      return loginObj.data.message;
    }
  } catch (error) {
    console.log("error while signing user", error);
  }
}
