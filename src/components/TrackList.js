import { Box } from "@mui/system";
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import Track from "./Track";
import { styles } from "../styles";

const TrackList = () => {
  const { trackList, playTrack, isPlaying } = useMusicPlayer();
  return (
    <Box sx={styles.trackListBox}>
      {trackList.map((track, index) => (
        <Track
          key={index}
          track={track}
          index={index}
          onClick={playTrack}
          isPlaying={isPlaying}
        />
      ))}
    </ Box>
  );
};
export default TrackList;
