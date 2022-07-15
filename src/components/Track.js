import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Favorite, Headset } from "@mui/icons-material";
import { colors } from "../styles";
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Track(props) {
  const { playTrack, currentTrackIndex } = useMusicPlayer();
  return (
    <ListItemButton
      sx={{
        width: 250,
        maxHeight: 50,
        backgroundColor: colors.TrackNameBg,
        borderRadius: 4
      }}
      onClick={()=> playTrack(props.index)}
    >
      <ListItemIcon >
        {props.index === currentTrackIndex ? <Headset /> : <Favorite sx={ {color: colors.HeartIcon}} />}
      </ListItemIcon>
      <ListItemText
        primary={props.track.name}
        primaryTypographyProps={{
          fontSize: 18,
          fontWeight: "medium",
          letterSpacing: 0,
          width: 200,
          color: "#f0effa",
        }}
      />
    </ListItemButton>
  );
}

export default Track;
