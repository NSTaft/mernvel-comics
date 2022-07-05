import "./ComicTile.css"

function ComicTile(props){
    const image_URL = props.comic.thumbnail.path + "." + props.comic.thumbnail.extension
    const alternative = props.comic.title + " title photo"

    return (
        <>
            <div className="comic-tile">
                <h4>{props.comic.title}</h4>
                <img src={image_URL} alt={alternative} />
            </div>
        </>
    )
}

export default ComicTile