import * as marvelAPI from "./marvel-api"

export async function getMarvelComics(search, offset, limit){
    const comicList = await marvelAPI.getMarvelComics(search, offset, limit)
    return comicList
}