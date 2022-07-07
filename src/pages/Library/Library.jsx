import * as marvelService from "../../utilities/marvel-service"
import { useEffect, useState } from 'react'
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

    useEffect(() => {
        getMarvelComics("")
    }, [])

    return (
        <>
            <div>
                <h1>Library Page</h1>
                <div>
                    {comicList.map((c, idx) => (
                        <>
                            <div>
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