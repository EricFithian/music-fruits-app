function SongList(props) {
    console.log(props.handleClick)
    return (
        <>
            {props.songs.map(song => {
                return (
                <>
                    <h3>{song}</h3>
                </>
                )
            })}
        </>
    )
}

export default SongList;