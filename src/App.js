import React, { useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header"
import SongPlaylist from "./components/SongPlaylist";

function App() {

  const [songs, setSongs] = useState([])

  function addSong(song) {
    setSongs(prevSong => {
      return [...prevSong, song]
    })
    console.log(song)
  }

  function deleteSong(id) {
    setSongs(prevNotes => {
      return prevNotes.filter((songItem, index) => {
        return index !== id
      })
    })
    console.log("Clicked")
  }


  return (<div>
    <Header />
    <CreateArea
      onAdd={addSong}
    />
    <SongPlaylist songs={songs} onDelete={deleteSong} />
    <Footer />
  </div>
  );
}

export default App;
