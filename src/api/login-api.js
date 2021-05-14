import axios from "axios";

export default async function LoginUser(emailId, password) {
  const url = "http://localhost:3000/user/login";
  try {
    const userObj = {
      email: emailId,
      password: password,
    };

    const loginObj = await axios.post(url, userObj);
    console.log({ loginObj });
    if (loginObj.data.success) {
      return loginObj.data;
    } else {
      return loginObj.data.message;
    }
  } catch (error) {
    console.log("error while signing user", error);
  }
}
