import React, { useState } from "react";
import Track1 from "./tracks/Track1.mp3";
import Track2 from "./tracks/Track2.mp3";
import Track3 from "./tracks/Track3.mp3";


const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Fun Disco",
        file: Track1,
      },
      {
        name: "Some Kinda Jazz",
        file: Track2,
      },
      {
        name: "Soulfully",
        file: Track3,
      }
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
