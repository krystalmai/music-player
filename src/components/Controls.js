import { Box } from '@mui/material';
import React from 'react';
import {PlayCircleOutline, PauseCircleOutline, SkipPreviousOutlined, SkipNextOutlined} from '@mui/icons-material';
import { styles } from '../styles';
import useMusicPlayer from '../hooks/useMusicPlayer';

function Controls() {
  const { isPlaying, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();
  return (
    <Box sx={styles.controlBox}>
      <SkipPreviousOutlined sx={styles.skipButton} onClick={playPreviousTrack} />
      {isPlaying ? <PauseCircleOutline sx={styles.playButton} onClick={togglePlay} /> : <PlayCircleOutline sx={styles.playButton} onClick={togglePlay} />}
      <SkipNextOutlined sx={styles.skipButton} onClick={playNextTrack} />

    </Box>
  )
}

export default Controls
