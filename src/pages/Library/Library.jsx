import * as marvelService from "../../utilities/marvel-service"
import { useEffect, useState } from 'react'
import ComicTile from '../../components/ComicTile/ComicTile'
import "./Library.css"

function Library() {
    const [comicList, setComicList] = useState([])
    const [offset, setOffset] = useState(0)
    const [firstpage, setFirstPage] = useState(true)
    let limit = 9
    let total = 0
    let lastpage = false

    async function getMarvelComics(search = "", offset, limit) {
        const comicList = await marvelService.getMarvelComics(search, offset, limit)
        setComicList([...comicList.data.results])
        console.log(comicList.data)
        total = comicList.data.total
    }

    useEffect(() => {
        getMarvelComics("", offset, limit)
    }, [])

    function nextPage() {
        setOffset(offset + 9)
        setFirstPage(false)
        getMarvelComics("", offset + 9, limit)
    }

    function previousPage(){
        setOffset(offset - 9)
        if (offset - 9 === 0){
            setFirstPage(true)
        }
        getMarvelComics("", offset - 9, limit)
    }

    return (
        <>
            <nav className="nav">
                {firstpage ? (
                    <li onClick={nextPage}>Next</li>
                ): (
                    <>
                        <li onClick={previousPage}>Previous</li>
                        <li onClick={nextPage}>Next</li>
                    </>
                )}
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