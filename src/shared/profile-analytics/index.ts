import { audioFeatures, getTopTracks } from "@shared/spotify/index";
import { getProfile } from "@shared/profile-analytics/neural";

const profileAnalytics = async () => {
  const topTracks = await getTopTracks();

  const audioFeaturesList = await Promise.all(
    topTracks.map((track) => audioFeatures(track.id))
  );

  const getPreferences = audioFeaturesList.reduce(
    (acc, item) => {
      if (item.isSad) acc.isSad++;
      if (item.isHappy) acc.isHappy++;
      if (item.isCalming) acc.isCalming++;
      if (item.isExciting) acc.isExciting++;
      if (item.isDanceable) acc.isDanceable++;
      if (item.isAcoustic) acc.isAcoustic++;
      return acc;
    },
    {
      isSad: 0,
      isHappy: 0,
      isCalming: 0,
      isExciting: 0,
      isDanceable: 0,
      isAcoustic: 0,
    }
  );

  const orderedPreferences = Object.entries(getPreferences).sort(
    (a, b) => b[1] - a[1]
  );

  // Co

  const { name } = getProfile(preferences.slice(0, 3));
};

export default profileAnalytics;
