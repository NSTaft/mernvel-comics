function ComicTile(props){
    const image_URL = props.comic.thumbnail.path + "." + props.comic.thumbnail.extension
    
    return (
        <>
            <div>
                <h3>{props.comic.title}</h3>
                <img src={image_URL} alt="" />
            </div>
        </>
    )
}

export default ComicTile