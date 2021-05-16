import axios from "axios";

export default async function SignupUser(userName, emailId, password) {
  const url = "https://fittube.herokuapp.com/user";
  try {
    const userObj = {
      name: userName,
      email: emailId,
      password: password,
    };

    const signupObj = await axios.post(url, userObj);

    if (signupObj.data.success) {
      return signupObj.data;
    } else {
      return signupObj.data.errorMessage;
    }
  } catch (error) {
    return error;
  }
}
