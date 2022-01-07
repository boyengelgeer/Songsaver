import React from 'react'

function SongList(props) {

    function handleClick(title) {
        props.onDelete(title)

    }

    return <tbody>
        {
            props.songs.map((songItem, index) => {
                return <tr onClick={() => handleClick(songItem.songTitle)} key={index}>
                    <td>{songItem.songTitle}</td>
                    <td>{songItem.songArtist}</td>
                    <td>{songItem.genre}</td>
                    <td>{songItem.rating}</td>
                </tr>
            })
        }

    </tbody>
}

export default SongList