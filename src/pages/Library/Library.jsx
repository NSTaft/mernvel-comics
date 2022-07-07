import * as marvelService from "../../utilities/marvel-service"
import { useEffect, useState } from 'react'
import ComicTile from '../../components/ComicTile/ComicTile'
import "./Library.css"

function Library() {
    const [comicList, setComicList] = useState([])
    let total = 0

    async function getMarvelComics(search = "") {
        const comicList = await marvelService.getMarvelComics(search)
        setComicList([...comicList.data.results])
        console.log(comicList.data)
        total = comicList.data.total
    }

    useEffect(() => {
        getMarvelComics("")
    }, [])

    return (
        <>
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