import axios from "axios";

export class AuthService {
  static async login(username: string, password: string, email: string) {
    try {
      return await axios.post("http://localhost:3000/api/v1/login", {
        username,
        password,
        email,
      });
    } catch (error) {
      console.error("Error during login request:", error);
    }
  }
  static async getUser() {
    return await axios.get("http://localhost:3000/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
  }
  static async register(username: string, password: string, email: string) {
    try {
      return await axios.post("http://localhost:3000/api/v1/register", {
        username,
        password,
        email,
      });
    } catch (error) {
      console.error("Error during register request:", error);
    }
  }
}
