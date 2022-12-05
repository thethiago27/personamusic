import { Buffer } from "buffer";
import axios from "axios";
import { stringify } from "qs";
import { storeToken } from "@shared/session";

const getAccessToken = async (code: string): Promise<void> => {
  const url = "https://accounts.spotify.com/api/token";

  const data = {
    grant_type: "client_credentials",
    code: code,
    redirect_uri: `${import.meta.env.VITE_BASE_URL}/callback`,
  };

  const auth = Buffer.from(
    `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${
      import.meta.env.VITE_SPOTIFY_SECRET
    }`
  ).toString("base64");

  const headers = {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await axios.post(url, stringify(data), { headers: headers });

  storeToken(response.data.access_token);
};

export default getAccessToken;
