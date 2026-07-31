export default async function randomSong() {
  const API_URL =
    "https://music.nebyoolae.com/jsonapi/views/random_song/guess_neb";

  try {
    const response = await fetch(API_URL);
    const song = await response.json();

    return song.data[0].title;
  } catch {
    return null;
  }
}
