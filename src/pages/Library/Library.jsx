import * as marvelService from "../../utilities/marvel-service"
import { useEffect, useState } from 'react'
import ComicTile from '../../components/ComicTile/ComicTile'
import "./Library.css"

function Library() {
    const [comicList, setComicList] = useState([])
    let total = 0
    let offset = 0
    let limit = 9

    async function getMarvelComics(search = "", offset, limit) {
        const comicList = await marvelService.getMarvelComics(search, offset, limit)
        setComicList([...comicList.data.results])
        console.log(comicList.data)
        total = comicList.data.total
    }

    useEffect(() => {
        getMarvelComics("", offset, limit)
    }, [])

    return (
        <>
            <nav className="nav">
                <li>Previous</li>
                <li>Next</li>
            </nav>
            <div className="library">
                <div className="grid">
                    {comicList.map((c, idx) => (
                        <ComicTile comic={c} key={idx} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Library