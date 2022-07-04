import * as marvelAPI from "./marvel-api"

export async function getMarvelComics(search){
    const comicList = await marvelAPI.getMarvelComics(search)
    return comicList
}