import React from 'react'

function SongList(props) {

    function handleClick() {
        props.onDelete(props.id)

    }

    return <tbody>
        {
            props.songs.map((songItem, index) => {
                return <tr onClick={handleClick} key={index} id={index}>
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