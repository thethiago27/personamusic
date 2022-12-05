import { generateRandomString } from "@shared/random-string";
import { stringify } from "qs";

const authUrl = (): string => {
  const scope =
    "user-read-private user-read-email user-modify-playback-state streaming user-read-playback-state user-top-read";

  const url = {
    response_type: "code",
    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: `${import.meta.env.VITE_BASE_URL}/callback`,
    state: generateRandomString(16),
  };

  return `https://accounts.spotify.com/authorize?${stringify(url)}`;
};

export default authUrl;
