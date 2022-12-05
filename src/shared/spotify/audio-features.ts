import axios from "axios";
import { getToken } from "@shared/session";

interface AudioFeatures {
  isSad: boolean;
  isHappy: boolean;
  isCalming: boolean;
  isExciting: boolean;
  isDanceable: boolean;
  isAcoustic: boolean;
}
const audioFeatures = async (id: string): Promise<AudioFeatures> => {
  const url = `https://api.spotify.com/v1/audio-features/${id}`;

  const headers = {
    Authorization: `Bearer ${getToken()}`,
  };

  const response = await axios.get(url, { headers: headers });

  const { valence, energy, danceability, acousticness } = response.data;

  return {
    isSad: valence < 0.5,
    isHappy: valence > 0.5,
    isCalming: energy < 0.5,
    isExciting: energy > 0.5,
    isDanceable: danceability > 0.5,
    isAcoustic: acousticness > 0.5,
  };
};

export default audioFeatures;
