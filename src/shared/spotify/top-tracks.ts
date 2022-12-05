import { getToken } from "@shared/session";
import axios from "axios";

interface TopTracks {
  name: string;
  uri: string;
  track_number: number;
  id: string;
  image: string;
  type: string;
}
const getTopTracks = async (): Promise<TopTracks[]> => {
  const url = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term";

  const headers = {
    Authorization: `Bearer ${getToken()}`,
  };

  const response = await axios.get(url, { headers: headers });

  return response.data.items.map((item: any) => {
    return {
      name: item.name,
      uri: item.album.uri,
      track_number: item.track_number,
      id: item.id,
      image: item.album.images[2].url,
      type: item.type,
    };
  });
};

export default getTopTracks;
