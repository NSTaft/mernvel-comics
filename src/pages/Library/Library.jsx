import * as marvelService from "../../utilities/marvel-service"
import { useState } from 'react'
import ComicTile from '../../components/ComicTile/ComicTile'
import "./Library.css"

function Library() {
    const [comicList, setComicList] = useState([])

    async function getMarvelComics(search = "") {
        const comicList = await marvelService.getMarvelComics(search)
        // const filteredData = comicList.Comic.title
        // const displayedData = filteredData.slice(0,8)
        setComicList([...comicList.data.results])
        console.log(comicList.data.results)
    }

    return (
        <>
            <div className="background">
                <h1>Library Page</h1>
                <button onClick={getMarvelComics}>Get Comic List</button>
                <div className="row comic-row">
                    {comicList.map((c, idx) => (
                        <>
                            <div className="col">
                                <ComicTile comic={c} key={idx} />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Library