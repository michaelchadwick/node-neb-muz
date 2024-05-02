export default async function randomSong() {
  const response = await fetch(
    "https://music.nebyoolae.com/jsonapi/views/random_song/guess_neb"
  );
  const song = await response.json();

  return song.data[0].title;
}
