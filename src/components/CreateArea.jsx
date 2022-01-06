import React, { useState } from "react";

function CreateArea(props) {
    const [song, setSong] = useState({
        songTitle: "",
        songArtist: "",
        genre: "",
        rating: ""
    });
    function handleChange(event) {
        const { name, value } = event.target
        
        setSong(prevSong => {
            return {
                ...prevSong,
                [name]: value
            }
        })
    }

    function submitSong(event) {
        event.preventDefault();
        props.onAdd(song);
    }
    return <nav>
        <form>
            <input
                name="songTitle"
                placeholder="Song Title"
                value={song.songTitle}
                onChange={handleChange}
            />
            <input
                name="songArtist"
                placeholder="Artist Name"
                value={song.songArtist}
                onChange={handleChange}
            />
            <select required
                name="genre"
                value={song.genre}
                onChange={handleChange}>
                <option value=""></option>
                <option>Rock</option>
                <option>Hiphop</option>
                <option>Folk</option>
            </select>
            <select placeholder="Rating"
                name="rating"
                value={song.rating}
                onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <button onClick={submitSong}>Submit</button>
        </form>
    </nav>
}
export default CreateArea