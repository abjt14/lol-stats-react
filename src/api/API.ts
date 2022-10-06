const URL = 'https://lol-stats-api.vercel.app/search?summoner=';

export async function mainAPI (summoner: string) {
  try {
    const response = await fetch(URL + summoner);
    const body = await response.json();

    return body;
  } catch (error) {
    console.error(error);
  }
}