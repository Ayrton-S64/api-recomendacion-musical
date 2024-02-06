import {getAll, getByCode} from '../repositories/songs'

export async function listAll(){
  return await getAll();
}

export async function find(code: string){
  return await getByCode(code);
}

export async function search(query:string){
  
}

export async function getRecommendation(userId: number, amount: number = 5){
  // heads
  // Track Name	Artists	Album Name	Album Id	Track ID	Popularity	Release Date	Duration (ms)	Explicit URLs	Danceability	Energy	Key	Loudness	Mode	Speechiness	Acousticness	Instrumentalness	Liveness	Valence	Tempo
  const songsData = await getAll();

  const mappedData = songsData.map(song=>{
    return {
      track_name: song.titulo,
      artists: song.ArtistaCancion.map(rel=>rel.artista.nombre).join(', '),
      album_name: song.Album?.name,
      album_id: song.Album?.code,
      popularity: song.popularity,
      release_date: song.realaseDate.toLocaleDateString('en-CA'),
      duration: song.duration,
      explicit_URLs: song.url,
      danceability: song.danceability,
      energy: song.energy,
      key: song.key,
      loudness: song.loudness,
      mode: song.mode,
      speechiness: song.speechiness,
      acousticness: song.acousticness,
      instrumentalness: song.instrumentalness,
      liveness: song.liveness,
      valence: song.valence,
      tempo: song.tempo,
    }
  });

  return mappedData;
}