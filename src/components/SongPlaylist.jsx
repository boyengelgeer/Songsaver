import React from 'react';
import SongList from './Songlist';

function SongPlaylist(props) {
    return <main>
        <table style={{ width: "100%" }}>
            <thead>
                <tr className="song-header">
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
            </thead>
            <SongList songs={props.songs} onDelete={props.onDelete} />

        </table>


    </main>
}

export default SongPlaylist