import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { styles } from "../styles";

function CurrentSong() {
  const { currentTrackName } = useMusicPlayer();

  return (
    <Box sx={styles.marqueeBox}>
      <Marquee style={styles.marquee} gradient={false}>
        {currentTrackName}
      </Marquee>
    </Box>
  );
}

export default CurrentSong;
