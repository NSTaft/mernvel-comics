import * as marvelService from "../../utilities/marvel-service"
import { useEffect, useState } from 'react'
import ComicTile from '../../components/ComicTile/ComicTile'
import "./Library.css"

function Library() {
    const [comicList, setComicList] = useState([])
    const [offset, setOffset] = useState(0)
    const [firstpage, setFirstPage] = useState(true)
    const [search, setSearch] = useState('')
    let limit = 9

    async function getMarvelComics(search, offset, limit) {
        const comicList = await marvelService.getMarvelComics(search, offset, limit)
        setComicList([...comicList.data.results])
        console.log(comicList.data)
    }

    useEffect(() => {
        getMarvelComics(search, offset, limit)
    })

    function nextPage() {
        setOffset(offset + 9)
        setFirstPage(false)
        // getMarvelComics(search, offset + 9, limit)
        setOffset(offset+9)
    }

    function previousPage(){
        setOffset(offset - 9)
        if (offset - 9 === 0){
            setFirstPage(true)
        }
        // getMarvelComics(search, offset - 9, limit)
        setOffset(offset-9)
    }

    function formSearch(evt){
        setSearch(evt.target.value);
    }

    function searchSubmit(evt){
        evt.preventDefault();
        setSearch(evt.target.value)
        // getMarvelComics(search, offset, limit)
    }

    return (
        <>
            <form onSubmit={searchSubmit}>
                <input type="text" name="search" required value={search} onChange={formSearch}/>
                <button type="submit">SEARCH A TITLE</button>
            </form>
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
                        <ComicTile comic={c} key={idx}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Library