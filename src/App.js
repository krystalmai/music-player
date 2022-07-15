import "./App.css";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

import { Paper, Box } from "@mui/material";
import TrackList from "./components/TrackList";
import { styles } from "./styles.js";

import Controls from "./components/Controls";
import CurrentSong from "./components/CurrentSong";

function App() {
  return (
    <MusicPlayerProvider>
      <Paper sx={styles.paper}>
        <Box sx={styles.boxContainer}>
          
            <CurrentSong />

          <TrackList />
          <Controls />
        </Box>
      </Paper>
    </MusicPlayerProvider>
  );
}

export default App;
