import BgImage from "./img/sky-bg.jpg";

export  const colors = {
  RoseDust: "#985d6b",
  RichBlack: "#020106",
  Lilac: "#846E9A",
  DarkPurple: "#2C1F2B",
  OxfordBlue: "#031531",
  TrackListBg: "rgba(63, 78, 166, 0.75)",
  TrackNameBg: "#928FD9",
  HeartIcon: "#123159",
  DarkText: "#0D0D0D",
};
export const styles = {
  paper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "0D0D0D",
  },
  boxContainer: {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 10,
    width: 300,
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  controlBox: {
    height: 100,
    width: 300,
    background: 'rgba(0,0,0,0.2)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  trackListBox: {
    height: 300,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    gap: 1,
    background: colors.TrackListBg
  },
  marqueeBox: {
    height: 75,
    display: 'flex',
    alignItems:'center'
  },
  marquee: {
    background: 'transparent',
    color: '#fff', 
    fontSize: 18,
    width: 300
  },
  playButton: {
    background:
      " linear-gradient(90deg, rgba(249,120,150,1) 0%, rgba(145,111,179,1) 100%)",
    borderRadius: '50%',
    color: '#fff',
    height: 50,
    width: 50
  },
  skipButton: {
    color: "#fff",
    height: 40,
    width: 40,
    margin: 2
  }
};

