import * as marvelService from "../../utilities/marvel-service"
import {useState} from 'react'


function Library(){
    const [comicList, setComicList] = useState([])

    async function getMarvelComics(search="") {
        const comicList = await marvelService.getMarvelComics(search)
        // const filteredData = comicList.Comic.title
        // const displayedData = filteredData.slice(0,8)
        setComicList([...comicList.data.results])
        console.log(comicList.data.results)
    }

    return (
    <>
        <h1>Library Page</h1>
        <button onClick={getMarvelComics}>Get Comic List</button>
        {comicList.map((c, idx) => (
            <div key={idx}>{c.title}</div>
        ))}
    </>
    )
}

export default Library