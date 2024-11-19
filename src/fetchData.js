export default async function fetchData(query) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const url = `https://api.discogs.com/database/search?q="${query}"`;
  const data = await fetch(url, {
    headers: {
      Authorization: "Discogs token=SucWNkOoWomKpBQuPKkTjJOouDlPYgToFiLMKkgz",
    },
  })
    .then((response) => response.json())
    .then((apiData) => apiData)
    .finally();

  return data;
}
